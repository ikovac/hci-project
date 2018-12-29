import React from "react";
import cn from "classnames";
import { Link } from "gatsby";
import styles from "./styles.module.css";

const Logo = ({ screenType }) => {
  return (
    <div className={cn(styles.LogoWrapper, styles[screenType])}>
      <Link to="/" exact="true">
        <img src="/images/logo.png" alt="site logo" />
      </Link>
    </div>
  );
};

export default Logo;
