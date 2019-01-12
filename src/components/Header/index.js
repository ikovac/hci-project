import React from "react";
import styles from "./styles.module.css";
import Nav from "./Nav";
import NavLink from "./NavLink";
import navLinks from "../../config/menu";
import MenuButton from "../MenuButton";
import Logo from "./Logo";

export default ({ onClick, status }) => {
  let nav = navLinks.map(link => (
    <NavLink key={link.path} to={link.path}>
      {link.text}
    </NavLink>
  ));
  if(localStorage.getItem('user')) {
    nav.push(<NavLink key="admin" to="/admin-page">Admin</NavLink>);
  }
  nav.push(<NavLink id="search-icon" key="search" to="/search"><i className="fas fa-search"></i></NavLink>);

  return (
    <header className={styles.Header}>
      <Logo screenType="Desktop" />
      <div className={styles.NavWrapper}>
        <MenuButton status={status} onClick={onClick} />
        <Logo screenType="Mobile" />
        <Nav>{nav}</Nav>
        <NavLink id="search-icon-mobile" key="search" to="/search"><i className="fas fa-search"></i></NavLink>
      </div>
    </header>
  );
};
