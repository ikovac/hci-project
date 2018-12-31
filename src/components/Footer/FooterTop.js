import React from "react";
import Container from "../Container";
import styles from "./styles.module.css";

const FooterTop = () => {
  return (
    <div className={styles.FooterTop}>
      <Container>
        <div className={styles.FooterSectionWrapper}>
          <div className={styles.FooterSection}>Section 1</div>
          <div className={styles.FooterSection}>Section 2</div>
          <div className={styles.FooterSection}>Section 3</div>
        </div>
      </Container>
    </div>
  );
};

export default FooterTop;
