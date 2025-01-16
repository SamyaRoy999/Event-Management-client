import React from "react";
import data from "../../data/data.json";
import EventCard from "../EventCard/EventCard";
const UpcomingEvent = () => {
  console.log(data);

  return (
    <div className="my-14">
      <div className="flex justify-center text-center">
        <div>
          <h2 className="font-bold text-3xl ">Upcoming Events</h2>
          <p className="text-base font-semibold p-4">
            You can configure x closest date to display
          </p>
        </div>
      </div>
      <div className="grid gap-4 place-items-center grid-cols-1 md:grid-cols-2  lg:grid-cols-3 ">
        {data.map((item) => (
          <EventCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvent;
