export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Only POST allowed" });
    }
  
    const brevoAPIKey = process.env.BREVO_API_KEY; 
    const brevoListId = 5;
  
    const { email, firstName, lastName, phone, message } = req.body;
  
    const contactData = {
      email,
      attributes: {
        FIRSTNAME: firstName,
        LASTNAME: lastName,
        PHONE: phone,
        MESSAGE: message,
      },
      listIds: [brevoListId],
      updateEnabled: true,
    };
  
    try {
      const response = await fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers: {
          "api-key": brevoAPIKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        return res.status(500).json({ message: "Brevo error", error: errorData });
      }
  
      return res.status(200).json({ message: "Contact added successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Server error", error });
    }
  }
  