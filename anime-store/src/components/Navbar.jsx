import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="logo">ANIMEX</div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/checkout">Checkout</Link>
      </div>

      <div className="cart-count">
        🛒 {cart.length}
      </div>
    </motion.nav>
  );
}