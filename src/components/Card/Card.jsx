import React from "react";
import style from "./Card.module.css";

const Card = () => {
  return (
    <div className={style.card}>
      <div className={style.topContainer}>
        <div className={style.screen}></div>
        <div className={style.textBox}>
          <h3 className={style.header}>
            Lorem ipsum dolor sit amet, consectetur
          </h3>
          <h4 className={style.subheader}>Lorem ipsum</h4>
          <p className={style.text12}>Lorem ipsum dolor sit</p>
        </div>
      </div>
      <div className={style.bottomContainer}></div>
    </div>
  );
};

export default Card;
