import React from "react";
import styles from "./styles.module.css";
import cn from "classnames";
import NavLink from "../Header/NavLink";
import navLinks from "../../config/menu";

const SideMenu = ({ status, className }) => {
  const nav = navLinks.map(link => (
    <NavLink
      key={link.path}
      to={link.path}
      className={styles.NavLink}
      activeClassName={styles.NavLink_active}
    >
      {link.text}
    </NavLink>
  ));

  return (
    <nav className={cn(styles.Menu, styles[status], className)}>{nav}</nav>
  );
};

export default SideMenu;
