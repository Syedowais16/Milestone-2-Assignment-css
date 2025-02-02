// pages/products.js
import React from "react";
import styles from "./Products.module.css";

const Products = () => {
  const toys = [
    { id: 1, name: "Toy Car", price: "$10" },
    { id: 2, name: "Action Figure", price: "$15" },
    { id: 3, name: "Building Blocks", price: "$20" },
    { id: 4, name: "action figure", price: "$16" },
    { id: 5, name: "soft toy bear", price: "$18" },
    { id: 6, name: "toy bike", price: "$25" },
  ];

  return (
      <div className={styles.productContainer}>
        <h1>Our Toys</h1>
        <div className={styles.productList}>
          {toys.map((toy) => (
            <div key={toy.id} className={styles.productCard}>
              <img src={`/remotecar.jpg`} alt={toy.name} />
              <h3>{toy.name}</h3>
              <p>{toy.price}</p>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Products;
