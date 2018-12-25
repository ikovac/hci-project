import React from "react";
import styles from "./styles.module.css";
import { Link } from "gatsby";

export default ({ children, ...rest }) => (
  <Link
    className={styles.NavLink}
    activeClassName={styles.NavLink__active}
    {...rest}
  >
    {children}
  </Link>
);
