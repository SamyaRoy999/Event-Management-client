import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../../data/data.json";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState([]);
  useEffect(() => {
    const filterEvent = data.filter((item) => item.id == id);
    setEvent(filterEvent);
  }, [id]);
  console.log(event);

  return (
    <div className="h-screen text-white ">
      {event.map((item) => (
        <div key={item.id} className="container  mx-auto px-4 py-8">
          <div className="flex flex-wrap mt-20 -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-auto rounded-lg shadow-md mb-4"
              />
            </div>

            <div className="w-full md:w-1/2 px-4 ">
              <h2 className="text-3xl font-bold mb-2">{item.title}</h2>
              <p className="text-gray-400 mb-2">{item.description}</p>
              <p className="text-gray-400 mb-2">Category : {item.category}</p>
              <p className="text-gray-400 mb-2">Date : {item.date}</p>
              <p className="text-gray-400 mb-2">Location : {item.location}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventDetails;
