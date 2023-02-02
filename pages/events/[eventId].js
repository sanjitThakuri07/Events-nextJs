import React from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../dummyData";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import EventAlert from "../../components/ui/error-alert/error-alert";
import Button from "../../components/ui/button";

const individualEvent = () => {
  // const
  const router = useRouter();
  const { eventId } = router.query;
  const event = getEventById(eventId);

  if (!event) {
    return (
      <>
        <EventAlert>
          <p>No Event Found</p>
        </EventAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
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
