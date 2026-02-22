import React from "react";
import "../index.css";

const Home = () => {
  return (
    <div className="home">

      {/* Announcement Bar */}
      <div className="announcement">
        EXCLUSIVE DISCOUNT ON ALL ANIME MERCHANDISE
      </div>

      {/* Navbar */}
<nav className="navbar">

  <div className="nav-left">
    <div className="kanji-mark">アニメ</div>
    <div className="logo">INDIAN ANIME STORE</div>
  </div>

  <ul className="nav-links">

    <li className="nav-item">
      <span>Apparels</span>
      <div className="dropdown-menu">
        <a>Oversized Tees</a>
        <a>Hoodies</a>
        <a>Jackets</a>
      </div>
    </li>

    <li className="nav-item"><span>Merchandise</span></li>

    <li className="nav-item">
      <span>Electronics</span>
      <div className="dropdown-menu">
        <a>RGB Lamps</a>
        <a>Headphones</a>
        <a>Mousepads</a>
      </div>
    </li>

    <li className="nav-item"><span>Cart</span></li>

    <li className="nav-item">
      <span>My Account</span>
      <div className="dropdown-menu">
        <a>Profile</a>
        <a>Orders</a>
        <a>Logout</a>
      </div>
    </li>

    <li className="search">⌕</li>

  </ul>

  <div className="scan-line"></div>

</nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h5>EXPLORE THE BEST</h5>
          <h1>Anime Merchandise</h1>
          <p>Coming Soon....</p>

          <div className="hero-buttons">
            <button className="btn primary">Discover</button>
            <button className="btn outline">Shop</button>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="categories">
        <h2>FEATURED CATEGORIES</h2>
        <div className="divider"></div>
        <p className="subtitle">
          Discover the latest arrivals and exclusive collections
        </p>

        <div className="category-grid">

          <div className="category-card">
            <img
              src="https://images.unsplash.com/photo-1611605698335-8b1569810432"
              alt="Apparels"
            />
            <div className="card-content">
              <h3>Apparels</h3>
              <p>Premium anime hoodies & tees</p>
              <button className="btn small">Explore</button>
            </div>
          </div>

          <div className="category-card">
            <img
              src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db"
              alt="Merchandise"
            />
            <div className="card-content">
              <h3>Merchandise</h3>
              <p>Figures, posters & collectibles</p>
              <button className="btn small">Explore</button>
            </div>
          </div>

          <div className="category-card">
            <img
              src="https://images.unsplash.com/photo-1606112219348-204d7d8b94ee"
              alt="Electronics"
            />
            <div className="card-content">
              <h3>Electronics</h3>
              <p>Anime gadgets & accessories</p>
              <button className="btn small">Explore</button>
            </div>
          </div>

        </div>
      </section>

      {/* Featured Products */}
      <section className="products">
        <h2>BEST SELLERS</h2>
        <div className="divider"></div>

        <div className="product-grid">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="product-card">
              <img
                src="https://images.unsplash.com/photo-1585386959984-a41552231658"
                alt="product"
              />
              <h4>Anime Hoodie</h4>
              <p className="price">₹1,499</p>
              <button className="btn small">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* Promo Banner */}
      <section className="promo">
        <div className="promo-content">
          <h2>Level Up Your Collection</h2>
          <p>Limited Edition Drops Available Now</p>
          <button className="btn primary">Shop Now</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-grid">

          <div>
            <h4>Indian Anime Store</h4>
            <p>Your ultimate destination for anime merchandise in India.</p>
          </div>

          <div>
            <h4>Shop</h4>
            <p>Apparels</p>
            <p>Merchandise</p>
            <p>Electronics</p>
          </div>

          <div>
            <h4>Support</h4>
            <p>Contact Us</p>
            <p>Shipping Policy</p>
            <p>Returns</p>
          </div>

          <div>
            <h4>Follow Us</h4>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Twitter</p>
          </div>

        </div>

        <div className="copyright">
          © 2026 Indian Anime Store. All rights reserved.
        </div>
      </footer>

    </div>
  );
};

export default Home;