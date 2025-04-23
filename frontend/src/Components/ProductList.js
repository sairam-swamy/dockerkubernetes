import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/products`)
      .then((res) => {
        console.log("Data from API:", res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>🛒 Product List</h2>
      {products.length === 0 ? (
        <p>Loading products...</p>
      ) : (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {products.map((product) => (
            <li
              key={product.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "10px",
                marginBottom: "10px",
                maxWidth: "400px",
              }}
            >
              <strong>{product.name}</strong>
              <br />
              <span>💲{product.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;


