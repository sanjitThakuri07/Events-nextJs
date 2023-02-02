import React from "react";
import Link from "next/link";
import classes from "./button.module.css";

const Button = ({ link, type, children, onClick }) => {
  return !link ? (
    <button className={classes.btn} onClick={onClick}>
      {children}
    </button>
  ) : (
    <Link href={link} className={classes.btn}>
      {children}
    </Link>
  );
};

export default Button;
