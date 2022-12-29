import React from "react";
import style from "./Submitter.module.css";
import { useRef, useState } from "react";

const Submitter = () => {
  const inputRef = useRef(null);

  const [updated, setUpdated] = useState([]);

  const handleClick = (e) => {
    setUpdated(
      updated.concat(
        <div className={style.messageContainer}>
          <div className={style.row1}>
            <div className={style.circle}></div>
            <div className={style.messageHeader}>
              <p>Lorem Ipsum</p>
            </div>
          </div>
          <div className={style.row2}>{inputRef.current.value}</div>
        </div>
      )
    );
  };
  const resetInput = (e) => {
    e.target.value = "";
  };

  return (
    <div className={style.row}>
      <form className={style.form}>
        <input
          type="text"
          ref={inputRef}
          placeholder="Placeholder..."
          className={style.placeholder}
          onFocus={(e) => resetInput(e)}
        />
        <input
          type="button"
          value="SUBMIT"
          className={style.button}
          onClick={handleClick}
        />
      </form>
      <div className={style.submitterContainer}>{updated}</div>
    </div>
  );
};

export default Submitter;
