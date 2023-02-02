import React from "react";
import { getFeaturedEvents } from "../dummyData";
import EventList from "../components/events/eventList";

const index = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents}></EventList>
    </div>
  );
};

export default index;
