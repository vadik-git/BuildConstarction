import React from "react";
import ContactForm from "../Contact/components/ContactForm";
import { useEffect } from "react";
import service from "../../services/ourProjectRequestsService"
import {
  BannerShowProjects,
  GreetingBlock,
  OurLastProjects,
  OurNewPlans,
} from "./components";

const Home = () => {

  useEffect(() => {
    service.getAllOurProjects();
  }, [])

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
