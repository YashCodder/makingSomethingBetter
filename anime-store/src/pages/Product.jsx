import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import products from "../data/products";

export default function Product() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div style={{ padding: "120px 40px" }}>
        <h1>Product Not Found</h1>
      </div>
    );
  }

  const recommended = products
  .filter(p => p.id !== product.id)
  .sort(() => 0.5 - Math.random())
  .slice(0, 3);

  return (
    <motion.div
      style={{ padding: "120px 40px" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>{product.title}</h1>
      <p style={{ fontSize: "20px", margin: "10px 0" }}>
        ₹{product.price}
      </p>

      <button
        onClick={() => navigate("/checkout")}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Buy Now
      </button>

      {recommended.length > 0 && (
        <>
          <h2 style={{ marginTop: "60px" }}>Recommended</h2>
          {recommended.map(item => (
            <div
              key={item.id}
              style={{ cursor: "pointer", marginTop: "10px" }}
              onClick={() => navigate(`/product/${item.id}`)}
            >
              {item.title}
            </div>
          ))}
        </>
      )}
    </motion.div>
  );
}