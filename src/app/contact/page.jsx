"use client";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    policyAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.policyAccepted) {
      alert("You must accept the privacy policy.");
      return;
    }
    console.log("Form data submitted:", formData);
    alert("Message sent!");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      policyAccepted: false,
    });
  };

  return (
    <div className="py-40 px-6 max-w-8xl w-full mx-auto flex flex-col md:flex-row justify-center items-start gap-10">
      <div className="md:w-1/3 text-left">
        <h1 className=" mb-4">Say hi!</h1>
        <p className="text-gray-300 mb-6">Fill out the form, and we will get back to you.</p>
        <p className="text-gray-300 mb-1">Contact us via</p>
        <a href="mailto:marahknyfaty@outlook.com" className="hover:underline hover:decoration-[#F5F5F5]">
          Marahknyfaty@outlook.com
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
                className="w-full p-3 bg-[#121212] rounded-lg focus:outline-none border focus:ring-2 focus:ring-[#F5F5F5]"
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
                className="w-full p-3 bg-[#121212] rounded-lg focus:outline-none border focus:ring-2 focus:ring-[#F5F5F5]"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-300 mb-1">
                Email <span className="text-#F5F5F5]">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-[#121212] rounded-lg focus:outline-none border focus:ring-2 focus:ring-[#F5F5F5]"
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
                className="w-full p-3 bg-[#121212] rounded-lg focus:outline-none border focus:ring-2 focus:ring-[#F5F5F5]"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-300 mb-1">
              Describe what you need help with <span className="text-[#F5F5F5]">*</span>
            </label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 bg-[#121212] rounded-lg focus:outline-none border focus:ring-2 focus:ring-[#F5F5F5]"
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
              I have read and accept the
              <a href="/privacy-policy" className="underline text-[#F5F5F5] ml-1">
                privacy policy
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#3B429F] hover:bg-[#2A2F7D] text-[#F5F5F5] font-bold py-3 rounded-full transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;





