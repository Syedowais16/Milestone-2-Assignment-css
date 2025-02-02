import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1>About Owais Toy Store</h1>
      <p>
        At Owais Toy Store, we believe in the magic of play.Our family-owned 
        business has been dedicated to bringing joy and learning to children of all ages. From 
        classic toys to the latest trends, we carefully curate our selection to ensure the 
        highest quality and safety standards.
      </p>

      <h2>Our Mission</h2>
      <p>
        We strive to create a world where playtime is both fun and educational. Our collection 
        is designed to spark imagination, enhance creativity, and encourage problem-solving skills. 
        We believe that toys are more than just objects—they are tools for learning and growing.
      </p>

      <h2>Why Choose Us?</h2>
      <ul className={styles.featureList}>
        <li> High-quality and safe toys for kids of all ages.</li>
        <li> Toys that inspire creativity and learning.</li>
        <li> Family-owned with a passion for play.</li>
        <li> Fast and reliable delivery services.</li>
        <li> Trusted by thousands of happy parents.</li>
      </ul>

      <h2>Our Commitment to You</h2>
      <p>
        We prioritize customer satisfaction by ensuring that each toy meets the highest 
        standards of safety and durability. Our friendly team is always here to help you 
        find the perfect toy for your child’s needs.
      </p>

      <h2>Come Visit Us!</h2>
      <p>
        Whether you're shopping online or visiting our store, we welcome you to 
        explore our amazing collection of toys. Let's make childhood memories together!  
      </p>
    </div>
  );
};

export default About;
