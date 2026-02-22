import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function FloatingCart() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <motion.div
      className="cart-floating"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => navigate("/checkout")}
    >
      {cart.length}
    </motion.div>
  );
}