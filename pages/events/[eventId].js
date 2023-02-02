import React from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../dummyData";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

const individualEvent = () => {
  // const
  const router = useRouter();
  const { eventId } = router.query;
  const event = getEventById(eventId);

  if (!event) {
    return <p>No Event Found</p>;
  }

  return (
    <>
      <EventSummary title={event?.title} />
      <EventLogistics
        address={event?.location}
        image={event?.image}
        imageAlt={event?.title}
        date={event?.date}
      />
      <EventContent>
        <p>{event?.description}</p>
      </EventContent>
    </>
  );
};

export default individualEvent;
