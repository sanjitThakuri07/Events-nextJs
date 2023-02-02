import React from "react";
import { useRef } from "react";
import Button from "../ui/button";
import classes from "./eventSearch.module.css";

const EventSearch = (props) => {
  const YearInputRef = useRef();
  const MonthInputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();

    const selectedYear = YearInputRef?.current?.value;
    const selectedMonth = MonthInputRef?.current?.value;

    props.onSearch(selectedYear, selectedMonth);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={YearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="year">Month</label>
          <select id="year" ref={MonthInputRef}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button type="button">Find Events</Button>
    </form>
  );
};

export default EventSearch;
