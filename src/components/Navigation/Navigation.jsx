import React from "react";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <div className={styles.navitem}>
        <a className={styles.link} href="/">
          Lorem ipsum{" "}
        </a>
      </div>
      <div className={styles.navitem}>
        <a className={styles.link} href="/">
          Lorem ipsum{" "}
        </a>
      </div>
      <div className={styles.navitem}>
        <a className={styles.link} href="/">
          Lorem ipsum{" "}
        </a>
      </div>
    </div>
  );
};

export default Navigation;
