import React from "react";
import "./productstyle.css";

function ProductCard({ image, title, price, oldPrice, hoverImage }) {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          className="product-image front-image"
          src={image}
          alt={title}
        />

        <img
          className="product-image hover-image"
          src={hoverImage}
          alt={title}
        />
        <span className="discount-badge">-42%</span>
        <div className="wishlist">♡</div>
        <div className="product-overlay">
          <div className="sizes">
            <span className="size-item">S</span>
            <span className="size-item">M</span>
            <span className="size-item">L</span>
            <span className="size-item">XL</span>
            <span className="size-item">XXL</span>
          </div>
          <div className="card-btn-container">
            <button className="cart-btn">ADD TO CART</button>
          </div>
        </div>
      </div>
      <div className="product-info">
        <h3>{title}</h3>
        <div className="price-container">
          <span className="old-price">{oldPrice}</span>
          <span className="new-price">{price}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;