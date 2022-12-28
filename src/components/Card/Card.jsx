import React from "react";
import style from "./Card.module.css";

const Card = () => {
  return (
    <div className={style.card}>
      <div className={style.topContainer}>
        <div className={style.screen}></div>
      </div>
      <div className={style.bottomContainer}></div>
    </div>
  );
};

export default Card;
