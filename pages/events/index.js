import React from "react";
import { useRouter } from "next/router";
import { getAllEvents } from "../../dummyData";
import EventList from "../../components/events/eventList";
import EventSearch from "../../components/events/eventSearch";

const index = () => {
  const events = getAllEvents();
  const router = useRouter();

  const SearchHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <div>
      <EventSearch onSearch={SearchHandler} />
      <EventList items={events}></EventList>
    </div>
  );
};

export default index;
