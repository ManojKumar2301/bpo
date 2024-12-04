import React from "react";
import ServiceCard from "./ServiceCard";
import "../styles/ServiceList.css";

const ServiceList = ({ services }) => (
  <div className="service-list">
    {services.map((service, index) => (
      <ServiceCard key={index} service={service} />
    ))}
  </div>
);

export default ServiceList;
