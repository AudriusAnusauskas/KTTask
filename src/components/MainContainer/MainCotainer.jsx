import React from "react";
import Card from "../Card/Card";
import styles from "./MainContainer.module.css";

const MainCotainer = () => {
  return (
    <div className={styles.main}>
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default MainCotainer;
