import React from "react";
import classNames from "classnames";
import styles from "./Hamburger.module.css";

const Hamburger = ({ isActive, onClick }) => {
  return (
    <div
      className={classNames(styles.hamburger, {
        [styles.active]: isActive,
      })}
      onClick={onClick}
    >
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
    </div>
  );
};

export default Hamburger;
