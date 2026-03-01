import React from "react";
import "../index.css";
import Navbar from "../components/Navbar";
import CustomizedSection from "./customizedsection/CustomizedSection";

const Home = () => {

  return (
    <div className="home">

      <Navbar />

      

      {/* Luxury Hero */}
      <section className="hero">

        <div className="hero-carousel">
          <div className="slide slide1"></div>
          <div className="slide slide2"></div>
          <div className="slide slide3"></div>
        </div>

        <div className="hero-overlay"></div>

        <div className="hero-text">
          <h1>
            Curated Anime
            <br />
            Luxury Essentials
          </h1>

          <p>Elevated merchandise for the modern collector.</p>

          <button className="btn-primary">
            Explore Collection
          </button>
        </div>

      </section>

      {/* Editorial Split Section */}
      <section className="editorial">
        <div className="editorial-image">
          <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1974&auto=format&fit=crop"
            alt="Oversized Streetwear"
          />
        </div>

        <div className="editorial-text">
          <h2>Designed With Precision</h2>
          <p>
            Every piece in our collection is thoughtfully designed,
            crafted with premium fabrics and attention to detail.
          </p>
          <button className="btn-outline">Discover</button>
        </div>
      </section>

      {/* ================= CUSTOMIZATION SECTION ================= */}
      <CustomizedSection/>



     {/* ULTRA PRODUCT GRID */}
<section className="products">
  <div className="products-header">
    <h2>Selected Pieces</h2>
    <p>Premium anime-inspired essentials for the modern collector.</p>
  </div>

  <div className="product-grid">
    {[
  {
    name: "Shadow Clan Hoodie",
    price: "₹1,999",
    tag: "NEW",
    image:
      "https://images.unsplash.com/photo-1602810319428-019690571b5b?q=80&w=1974&auto=format&fit=crop",
  },
  {
    name: "Tokyo Drift Tee",
    price: "₹1,499",
    image:
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=1974&auto=format&fit=crop",
  },
  {
    name: "Midnight Street Jacket",
    price: "₹2,799",
    image:
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=1974&auto=format&fit=crop",
  },
  {
    name: "Neo Oversized Drop",
    price: "₹1,699",
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1974&auto=format&fit=crop",
  },
  {
    name: "Limited Edition Hoodie",
    price: "₹2,299",
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1974&auto=format&fit=crop",
  },
  {
    name: "Urban Shinobi Fit",
    price: "₹1,899",
    image:
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1974&auto=format&fit=crop",
  },
].map((item, index) => (
      <div key={index} className="product-card">
        <div className="product-image-wrapper">
          {item.tag && <span className="product-badge">{item.tag}</span>}
          <img src={item.image} alt={item.name} />
          <div className="product-overlay">
            <button className="view-btn">View Product</button>
          </div>
        </div>

        <div className="product-info">
          <h4>{item.name}</h4>
          <p>{item.price}</p>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* Large Statement Banner */}
      <section className="statement">
        <h2>
          Minimal.
          <br />
          Timeless.
          <br />
          Iconic.
        </h2>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div>
            <h4>Indian Anime Store</h4>
            <p>Elevated anime fashion & collectibles.</p>
          </div>

          <div>
            <p>Shop</p>
            <p>Collections</p>
            <p>Contact</p>
          </div>

          <div>
            <p>Instagram</p>
            <p>Twitter</p>
          </div>
        </div>

        <div className="copyright">
          © 2026 Indian Anime Store
        </div>
      </footer>

    </div>
  );
};

export default Home;