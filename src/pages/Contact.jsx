import React from 'react';

const Contact = () => {
  return (
    <div className="p-8 min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

      <div className="space-y-4">

        <a
          href="tel:0783199768"
          className="block bg-blue-600 text-white p-4 rounded text-center hover:bg-blue-700"
        >
          Call: 0783199768
        </a>

        <a
          href="https://wa.me/254708215665"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-green-600 text-white p-4 rounded text-center hover:bg-green-700"
        >
          WhatsApp: 0708215665
        </a>

      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold mb-2">Location</h3>
        <p>Executive Hostels Ground Floor</p>
        <p>Winnies Restaurant</p>

        <div className="mt-4 rounded overflow-hidden shadow">
          <iframe
            title="Winnies Location"
            src="https://www.google.com/maps?q=Executive+Hostels+Ground+Floor&output=embed"
            width="100%"
            height="300"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
