import React from "react";
import classes from "./main-header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={classes?.header}>
      <div className={classes?.logo}>
        <Link href="/">NextEvents</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href="/events">Browse All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
