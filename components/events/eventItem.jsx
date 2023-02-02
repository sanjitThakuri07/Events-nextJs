import React from "react";
import classes from "./eventItem.module.css";
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import Address from "../icons/address-icon";
import ArrowRight from "../icons/arrow-right-icon";

const EventItem = (props) => {
  const { image, title, date, location, id } = props;

  const formatedDate = new Date(date).toLocaleDateString("en-Us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formatedAddress = location.replace(",", "\n");

  return (
    <li className={classes.item}>
      <img src={`/${image}`} alt="title" />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{formatedDate}</time>
          </div>
          <div className={classes.address}>
            <Address />
            <address>{formatedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={`/events/${id}`}>
            <span>Explore Events</span>
            <span className={classes.icon}>
              <ArrowRight />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
