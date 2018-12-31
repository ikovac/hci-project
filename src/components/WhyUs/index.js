import React from "react";
import styles from "./styles.module.css";

const WhyUs = () => {
  return (
    <>
      <h2>Zašto odabrati nas?</h2>
      <div className={styles.WhyUsContainer}>
        <div className={styles.WhyUsElement}>
          <div className={styles.Icon} title="Povrat robe unutar 30 dana">30</div>
          <p className={styles.Text}>Mogućnost povrata robe unutar 30 dana</p>
        </div>
        <div className={styles.WhyUsElement}>
          <div className={styles.Icon} title="3 godine garancije">3</div>
          <p className={styles.Text}>Garancija 3 godine na sve proizvode</p>
        </div>
        <div className={styles.WhyUsElement}>
          <div className={styles.Icon}>
            <i className="fas fa-shipping-fast" />
          </div>
          <p className={styles.Text}>Besplatna dostava</p>
        </div>
        <div className={styles.WhyUsElement}>
          <div className={styles.Icon}>
            <i className="far fa-money-bill-alt" />
          </div>
          <p className={styles.Text}>Najniže cijene</p>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
