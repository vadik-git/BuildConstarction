import React from "react";
import ContactForm from "../Contact/components/ContactForm";

import {
  BannerShowProjects,
  GreetingBlock,
  OurLastProjects,
  OurNewPlans,
} from "./components";

const Home = () => {
  return (
    <div>
      <GreetingBlock />
      <OurLastProjects />
      <BannerShowProjects />
      <OurNewPlans />
      <ContactForm />
    </div>
  );
};

export default Home;
