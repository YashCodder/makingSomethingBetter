import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CartProvider } from "./context/CartContext"; // ✅ added

import Home from "./pages/Home";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import SlashTransition from "./components/SlashTransition";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
      <SlashTransition />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <CartProvider> {/* ✅ wrapped everything */}
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </CartProvider>
  );
}