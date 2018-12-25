import React from "react";
import styles from "./styles.module.css";
import cn from "classnames";

const Overlay = ({ status, className, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={cn(styles.Overlay, styles[status], className)}
    />
  );
};

export default Overlay;
