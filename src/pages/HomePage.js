import React from "react";
import HeroSection from "../components/HeroSection";
import ServiceList from "../components/ServiceList";
import TestimonialSlider from "../components/TestimonialSlider";
import ContactForm from "../components/ContactForm";

const services = [
  { title: "AI Solutions", description: "Leverage AI for your business needs." },
  { title: "Customer Support", description: "Enhance CX with AI-driven tools." },
  { title: "Data Analytics", description: "Turn insights into actionable data." },
  { title: "Cloud Computing", description: "Optimize your operations with cloud services." },
  { title: "Cybersecurity", description: "Ensure the safety of your digital assets." },
];

const HomePage = () => (
  <div>
    <HeroSection />
    <ServiceList services={services} />
    <TestimonialSlider />
    <ContactForm />
  </div>
);

export default HomePage;
