import React from "react";
import Link from "next/link";
import classes from "./button.module.css";

const button = ({ link, type, children }) => {
  return type !== "link" ? (
    <Link href={link} className={classes.btn}>
      {children}
    </Link>
  ) : (
    <button className={classes.btn}>{children}</button>
  );
};

export default button;
