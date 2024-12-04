import React, { useState } from "react";
import "../styles/ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" required />
      <input type="email" name="email" placeholder="Email" required />
      <textarea name="message" placeholder="Message" required></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
