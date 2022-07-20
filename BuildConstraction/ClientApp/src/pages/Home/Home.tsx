import React from "react";
import ContactForm from "../Contact/components/ContactForm";

import {
  BannerShowProjects,
  GreetingBlock,
  OurLastProjects,
  OurNewPlans,
  Testimonials,
} from "./components";

const Home = () => {
  return (
    <div>
      <GreetingBlock />
      <OurLastProjects />
      <BannerShowProjects />
      <OurNewPlans />
      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default Home;
