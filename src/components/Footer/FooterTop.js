import React from "react";
import Container from "../Container";
import styles from "./styles.module.css";
import cn from "classnames";

const FooterTop = () => {
  return (
    <div className={styles.FooterTop}>
      <Container>
        <div className={styles.FooterSectionWrapper}>
          <div className={styles.FooterSection}>
            <h4>Radno vrijeme</h4>
            <p>PON-PET: 08:00 - 20:00</p>
            <p>SUB: 09:30 - 26:00</p>
            <p>NED: ne radimo</p>
          </div>
          <div className={styles.FooterSection}>
            <h4>Kontakt</h4>
            <p>Email: divein@shop.hr</p>
            <p>Mob: 092 292 1211</p>
            <p>Tel: (021) 381 211</p>
            <p>21000 Split, Ulica Zdravka Mamića 9</p>
          </div>
          <div className={cn(styles.FooterSection, styles.SMSection)}>
            <h4>Društvene mreže</h4>
            <a href="http://www.google.hr" title="Instagram">
              <i className={cn("fab fa-instagram", styles.Instagram)} />
            </a>
            <a href="http://www.google.hr" title="Facebook">
              <i className={cn("fab fa-facebook-f", styles.Facebook)} />
            </a>
            <a href="http://www.google.hr" title="Youtube">
              <i className={cn("fab fa-youtube", styles.Youtube)} />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FooterTop;
