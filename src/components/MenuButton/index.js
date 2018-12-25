import React from "react";
import styles from "./styles.module.css";
import cn from "classnames";

const MenuButton = ({ status, onClick, className }) => (
  <button
    className={cn(styles.Button, styles[status], className)}
    onClick={onClick}
  >
    <span className={cn(styles.Content, styles[status])}>MENU</span>
  </button>
);

export default MenuButton;
