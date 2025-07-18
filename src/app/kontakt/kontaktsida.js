"use client";

import React, { useState } from "react";

const Kontaktsida = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    policyAccepted: false,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.policyAccepted) {
      alert("Du måste acceptera integritetspolicyn.");
      return;
    }

    setLoading(true);
    setSuccess(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Något gick fel.");
      }

      setSuccess("Meddelandet skickades!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        policyAccepted: false,
      });
    } catch (error) {
      console.error(error);
      setSuccess("Kunde inte skicka meddelandet. Försök igen.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20 pb-40 px-6 max-w-8xl w-full mx-auto flex flex-col md:flex-row justify-center items-start gap-10">
      <div className="md:w-1/3 text-left">
        <h1 className="mb-4">Say hi!</h1>
        <p className="text-gray-300 mb-6">
          Fyll i formuläret så återkommer vi till dig.
        </p>
        <p className="text-gray-300 mb-1">Eller kontakta oss via</p>
        <a
          href="mailto:contact@zone90.se"
          className="hover:underline hover:decoration-[#F5F5F5]"
        >
          contact@zone90.se
        </a>
      </div>

      <div className="md:w-2/3">
        <p className="text-[20px] pb-10">Kontaktformulär</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-300 mb-1">
                Förnamn <span className="text-[#F5F5F5]">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-3 bg-[#121212] text-[#F5F5F5] rounded-lg border focus:ring-2 focus:ring-[#F5F5F5]"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-1">
                Efternamn <span className="text-[#F5F5F5]">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-3 bg-[#121212] text-[#F5F5F5] rounded-lg border focus:ring-2 focus:ring-[#F5F5F5]"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-300 mb-1">
                E-post <span className="text-[#F5F5F5]">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-[#121212] text-[#F5F5F5] rounded-lg border focus:ring-2 focus:ring-[#F5F5F5]"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-1">Telefon</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 bg-[#121212] text-[#F5F5F5] rounded-lg border focus:ring-2 focus:ring-[#F5F5F5]"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-300 mb-1">
              Beskriv vad du behöver hjälp med{" "}
              <span className="text-[#F5F5F5]">*</span>
            </label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 bg-[#121212] text-[#F5F5F5] rounded-lg border focus:ring-2 focus:ring-[#F5F5F5]"
              required
            />
          </div>

          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="policyAccepted"
              checked={formData.policyAccepted}
              onChange={handleChange}
              className="w-5 h-5 text-[#3B429F] border-[#3B429F] rounded focus:ring-[#3B429F]"
              required
            />
            <label className="text-gray-300">
              Jag har läst och accepterar integritetspolicy.
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#3B429F] font-[500] text-[#F5F5F5] py-3 rounded-full transition"
            disabled={loading}
          >
            {loading ? "Skickar..." : "Skicka"}
          </button>

          {success && (
            <p className="text-green-500 text-sm mt-2">{success}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Kontaktsida;

