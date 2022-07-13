import React from "react";

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
    </div>
  );
};

export default Home;
