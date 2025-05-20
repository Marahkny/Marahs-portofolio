"use client";
import React, { useState } from "react";
import Head from "next/head";

const Contact = () => {
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
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!formData.policyAccepted) {
      alert("You must accept the privacy policy.");
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
        throw new Error("Something went wrong");
      }
  
      setSuccess("Message sent successfully!");
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
      setSuccess("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  
  

  return (
    <>
      <Head>
        <title>Zone 90 » Contact</title>
        <meta
          name="description"
          content="Contact Zone 90 – we're here to help your business grow. Reach out for web design, SEO, and digital strategy."
        />
        <meta property="og:title" content="Zone 90 – Contact" />
        <meta property="og:image" content="/photos/logo90.png" />
        <link rel="canonical" href="https://zone90.se/contact" />
      </Head>

      <div className="pt-20 pb-40 px-6 max-w-8xl w-full mx-auto flex flex-col md:flex-row justify-center items-start gap-10">
        <div className="md:w-1/3 text-left">
          <h1 className="mb-4">Say hi!</h1>
          <p className="text-gray-300 mb-6">
            Fill out the form, and we will get back to you.
          </p>
          <p className="text-gray-300 mb-1">Or contact us via</p>
          <a
            href="mailto:contact@zone90.se"
            className="hover:underline hover:decoration-[#F5F5F5]"
          >
            contact@zone90.se
          </a>
        </div>

        <div className="md:w-2/3">
          <p className="text-[20px] pb-10">Contact form</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-1">
                  First name <span className="text-[#F5F5F5]">*</span>
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
                  Last name <span className="text-[#F5F5F5]">*</span>
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
                  Email <span className="text-[#F5F5F5]">*</span>
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
                <label className="block text-gray-300 mb-1">Phone</label>
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
                Describe what you need help with{" "}
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
                I have read and accept the privacy policy
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#3B429F] font-[500] text-[#F5F5F5] py-3 rounded-full transition"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>

            {success && (
              <p className="text-green-500 text-sm mt-2">{success}</p>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;