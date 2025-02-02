import React, { useState } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.formWrapper}>
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Feel free to reach out with any questions, suggestions, or feedback.</p>
        <form onSubmit={handleSubmit}>
          <input
            className={styles.inputField}
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            className={styles.inputField}
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <textarea
            className={styles.textArea}
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
          <button className={styles.submitButton} type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
