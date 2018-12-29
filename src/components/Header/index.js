import React from "react";
import styles from "./styles.module.css";
import Nav from "./Nav";
import NavLink from "./NavLink";
import navLinks from "../../config/menu";
import MenuButton from "../MenuButton";
import Logo from "./Logo";

export default ({ onClick, status }) => {
  const nav = navLinks.map(link => (
    <NavLink key={link.path} to={link.path}>
      {link.text}
    </NavLink>
  ));

  return (
    <header className={styles.Header}>
      <Logo screenType="Desktop" />
      <div className={styles.NavWrapper}>
        <MenuButton status={status} onClick={onClick} />
        <Logo screenType="Mobile" />
        <Nav>{nav}</Nav>
      </div>
    </header>
  );
};
