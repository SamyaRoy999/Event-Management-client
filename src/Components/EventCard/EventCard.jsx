import { HoverButtonDemo } from "@/shared/HoverButton/HoverButton";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
const EventCard = ({ item }) => {
  const { title, date, id, location, description, category, img } = item;

  return (
    <div className="min-h-[400px]">
      <div class="max-w-sm bg-white text-center border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img class="rounded-t-lg" src={img} alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <p className="flex gap-2 justify-center items-center p-1">
            <CiLocationOn /> {location}
          </p>
          <p className="flex gap-2 justify-center p-1"> {date}</p>
          <Link to={`/eventDetails/${id}`}>
            <HoverButtonDemo>Details</HoverButtonDemo>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
