import React from "react";
import styles from "./styles.module.css";
import Nav from "./Nav";
import NavLink from "./NavLink";
import navLinks from "../../config/menu";
import cn from "classnames";
import MenuButton from "../MenuButton";

export default () => {
  const nav = navLinks.map(link => (
    <NavLink key={link.path} to={link.path}>
      {link.text}
    </NavLink>
  ));

  return (
    <header className={styles.Header}>
      <div className={cn(styles.LogoWrapper, styles.Desktop)}>
        <img src="/images/logo.png" alt="site logo" />
      </div>
      <div className={styles.NavWrapper}>
        <MenuButton />
        <div className={cn(styles.LogoWrapper, styles.Mobile)}>
          <img src="/images/logo.png" alt="site logo" />
        </div>
        <Nav>{nav}</Nav>
      </div>
    </header>
  );
};
