import React from "react";
import styles from "./styles.module.css";
import Container from "../Container";

const FooterBottom = () => {
  return (
    <div className={styles.FooterBottomContainer}>
      <Container>
        <p>Copyright © 2018-2019 DiveIn web shop. All Rights Reserved.</p>
      </Container>
    </div>
  );
};

export default FooterBottom;
