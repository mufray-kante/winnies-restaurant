import React, { useState } from "react";
import waffle from "../../assets/images/waffle.jpg";
import texture from "../../assets/images/texture.png";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Request sent!\n\n" +
      "Name: " + formData.name + "\n" +
      "Email: " + formData.email + "\n" +
      "Message: " + formData.message
    );

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      className="h-screen flex items-center justify-center text-white text-center"
      style={{
        backgroundImage: "url(" + waffle + "), url(" + texture + ")",
        backgroundSize: "cover, 200px 200px",
        backgroundBlendMode: "overlay"
      }}
    >
      <div className="bg-black bg-opacity-60 p-10 rounded-xl max-w-lg">
        <h1 className="text-4xl font-bold mb-4">
          Winnie's Restaurant
        </h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 mb-2 rounded text-black"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 mb-2 rounded text-black"
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 mb-2 rounded text-black"
            required
          />

          <button
            type="submit"
            className="bg-green-600 px-4 py-2 rounded mt-2"
          >
            Send Request
          </button>
        </form>
      </div>

      {/* Floating Buttons */}
      <div className="fixed bottom-5 right-5 flex flex-col gap-3">
        <a
          href="tel:0783199768"
          className="bg-blue-600 text-white px-4 py-2 rounded-full"
        >
          Call: 0783199768
        </a>

        <a
          href="https://wa.me/+254708215665"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-4 py-2 rounded-full"
        >
          WhatsApp: +25408215665
        </a>
      </div>
    </div>
  );
};

export default Home;