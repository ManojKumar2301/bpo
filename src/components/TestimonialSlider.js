import React from "react";
import "../styles/TestimonialSlider.css";

const testimonials = [
  { id: 1, text: "Great service!" },
  { id: 2, text: "Excellent AI solutions." },
];

const TestimonialSlider = () => (
  <div className="testimonial-slider">
    {testimonials.map((testimonial) => (
      <div key={testimonial.id}>{testimonial.text}</div>
    ))}
  </div>
);

export default TestimonialSlider;
