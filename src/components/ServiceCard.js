import React from "react";
import "../styles/ServiceCard.css";

const ServiceCard = ({ service }) => (
  <div className="service-card">
    <h3>{service.title}</h3>
    <p>{service.description}</p>
  </div>
);

export default ServiceCard;
