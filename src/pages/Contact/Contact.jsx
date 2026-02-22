import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name:"", email:"", message:"" });
  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    alert(`Message sent! Name: ${formData.name} Email: ${formData.email} Message: ${formData.message}`);
    setFormData({ name:"", email:"", message:"" });
  };
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <label className="block mb-4">Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full mt-1 p-2 border rounded" required />
        </label>
        <label className="block mb-4">Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full mt-1 p-2 border rounded" required />
        </label>
        <label className="block mb-4">Message:
          <textarea name="message" value={formData.message} onChange={handleChange} className="w-full mt-1 p-2 border rounded" required />
        </label>
        <button type="submit" className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
