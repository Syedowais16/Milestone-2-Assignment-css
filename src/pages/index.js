import React from "react";
import styles from "./Home.module.css";
import Link from "next/link";
const Home = () => {
  return (
    <div>
      <div className={styles.hero}>
        <h1>Welcome to Owais Toy Store!</h1>
        <p>Your one-stop shop for the best toys and fun-filled adventures!</p>
        <Link href="/products"><button className={styles.ctaButton}>Shop Now</button></Link>
      </div>

      <div className={styles.productsSection}>
        <h2>Featured Toys</h2>
        <div className={styles.productCards}>
          <div className={styles.productCard}>
            <img
              src="/remotecar.jpg"
              alt="Toy 1"
              className={styles.productImage}
            />
            <h3>Super Rocket Toy</h3>
            <p className={styles.productDescription}>Fun for kids of all ages!</p>
          </div>
          <div className={styles.productCard}>
            <img
              src="/remotecar.jpg"
              alt="Toy 2"
              className={styles.productImage}
            />
            <h3>Magic Puzzle</h3>
            <p className={styles.productDescription}>Enhance problem-solving skills!</p>
          </div>
          <div className={styles.productCard}>
            <img
              src="/remotecar.jpg"
              alt="Toy 3"
              className={styles.productImage}
            />
            <h3>Building Blocks Set</h3>
            <p className={styles.productDescription}>Great for creativity!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
