import React from "react";
import Header from "../Header/Header";
import MainCotainer from "../MainContainer/MainCotainer";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={styles.main}>
      <Header />
      <MainCotainer />
    </div>
  );
};

export default Layout;
