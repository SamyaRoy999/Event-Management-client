import { Banner } from "@/Components/Banner/Banner";
import UpcomingEvent from "@/Components/UpcomingEvent/UpcomingEvent";
import React from "react";

const Home = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <Banner></Banner>
      <UpcomingEvent />
    </div>
  );
};

export default Home;
