import React from "react";

import { TestimonialCard } from "../../../../components";
import { MOCK_DATA_TESTIMONIALS } from "../../../../constants/mock";
import "./styles.css";

const Testimonials = () => {
  return (
    <div className="testimonialsContainer">
      <p className="testimonialsTitle">Testimonials</p>
      <p className="testimonialsSubText">
        Don’t take our word for it – here’s what our clients say:
      </p>

      <div className="testimonialsItemsContainer">
        {MOCK_DATA_TESTIMONIALS.map(testimonial => (
          <TestimonialCard testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
