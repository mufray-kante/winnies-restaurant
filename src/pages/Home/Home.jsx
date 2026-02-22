import React from "react";

const Home = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f8f5f2" }}>

      {/* HERO */}
      <section style={{
        backgroundImage: "url(/waffle.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "90vh",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
      }}>
        <div style={{ background: "rgba(0,0,0,0.6)", padding: "40px", borderRadius: "12px" }}>
          <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
            Premium Waffles  KES 250
          </h1>
          <p style={{ fontSize: "20px" }}>
            Kutus Executive Hostels  Ground Floor
          </p>
          <div style={{ marginTop: "15px", fontSize: "18px", color: "#FFD700" }}>
             4.6 (128 Reviews)
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section style={{ padding: "40px 20px", background: "#fff" }}>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Gallery</h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px"
        }}>
          <img src="/waffle.jpeg" style={{ width: "100%", borderRadius: "12px" }} />
          <img src="https://source.unsplash.com/600x400/?restaurant" style={{ width: "100%", borderRadius: "12px" }} />
          <img src="https://source.unsplash.com/600x400/?dessert" style={{ width: "100%", borderRadius: "12px" }} />
          <img src="https://source.unsplash.com/600x400/?coffee" style={{ width: "100%", borderRadius: "12px" }} />
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Contact Us</h2>
        <p>Call: 0783199768</p>
        <p>WhatsApp: 0708215665</p>
        <div style={{ marginTop: "20px" }}>
          <a href="tel:0783199768" style={{ marginRight: "15px", padding: "10px 20px", background: "#000", color: "#fff", borderRadius: "6px", textDecoration: "none" }}>
            Call Now
          </a>
          <a href="https://wa.me/0708215665" target="_blank" rel="noopener noreferrer" style={{ padding: "10px 20px", background: "green", color: "#fff", borderRadius: "6px", textDecoration: "none" }}>
            WhatsApp
          </a>
        </div>
      </section>

      {/* MAP */}
      <section style={{ height: "400px" }}>
        <iframe
          title="location"
          src="https://www.google.com/maps?q=Kutus%20Executive%20Hostels&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </section>

    </div>
  );
};

export default Home;
