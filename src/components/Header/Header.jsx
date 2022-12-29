import React, { useEffect, useState } from "react";
import Hamburger from "../Hamburger/Hamburger";
import Sidebar from "../Sidebar/Sidebar";
import useMediaQuery from "../../Hooks/useMediaQuery";
import styles from "./Header.module.css";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const { matches } = useMediaQuery({ matchQuery: "(max-width: 1200px)" });

  useEffect(() => {
    if (matches) {
      setIsSidebarVisible(false);
    }
  }, [matches]);

  const handleHamburgerClick = () => {
    setIsSidebarVisible((isSidebarVisible) => !isSidebarVisible);
  };

  return (
    <header className={styles.header}>
      <>
        {matches ? (
          <Hamburger
            isActive={isSidebarVisible}
            onClick={handleHamburgerClick}
          />
        ) : (
          <Navigation />
        )}
        {isSidebarVisible && (
          <Sidebar>
            <Navigation />
          </Sidebar>
        )}
      </>
    </header>
  );
};

export default Header;
