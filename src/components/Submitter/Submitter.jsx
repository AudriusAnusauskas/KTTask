import React from "react";
import style from "./Submitter.module.css";

const Submitter = () => {
  return (
    <div className={style.row}>
      <form className={style.form}>
        <input
          type="search"
          placeholder="Placeholder..."
          className={style.placeholder}
        />
        <input type="button" value="SUBMIT" className={style.button} />
        {/* <button className={style.button}>SUBMIT</button> */}
      </form>
    </div>
  );
};

export default Submitter;
