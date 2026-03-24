import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CartProvider } from "./context/CartContext"; // ✅ added

import Home from "./pages/Home";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import SlashTransition from "./components/SlashTransition";
import { AuthProvider } from "./context/AuthContext";
import Profile from "./components/profile/Profile";

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
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <CartProvider> {/* ✅ wrapped everything */}
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}