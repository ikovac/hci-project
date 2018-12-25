import React from "react";
import styles from "./styles.module.css";
import Nav from "./Nav";
import NavLink from "./NavLink";
import navLinks from "../../config/menu";

export default () => {
  const nav = navLinks.map(link => (
    <NavLink key={link.path} to={link.path}>
      {link.text}
    </NavLink>
  ));

  return (
    <header className={styles.Header}>
      <div className={styles.LogoWrapper}>
        <img src="/images/logo.png" alt="site logo" />
      </div>
      <div className={styles.NavWrapper}>
        <Nav>{nav}</Nav>
      </div>
    </header>
  );
};
