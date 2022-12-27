import React from "react";
import Header from "../Header/Header";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <div>
      <Header />
      <main className={styles.main}>Main</main>
    </div>
  );
};

export default Layout;
