import "../styles/Navbar.css";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive((prev) => !prev);
  };

  useEffect(() => {
    const handleClose = (event) => {
      if (
        !event.target.closest(".navbarMobile") &&
        !event.target.closest("#icon")
      ) {
        setMenuActive(false);
      }
    };

    if (menuActive) {
      document.addEventListener("click", handleClose);
    } else {
      document.removeEventListener("click", handleClose);
    }

    return () => {
      document.removeEventListener("click", handleClose);
    };
  }, [menuActive]);

  return (
    <>
      <nav className="navbarContainer" id="navbar">
        <div className="navbarInner">
          <div className="navbarLogoBanner">
            <div className="navbarLogo">
              THE<span className="navbarColored">BERATHAN</span>
            </div>
          </div>
          <div className="navbarContent">
            <ul className="navbarList">
              <li className="navbarListItem">
                <a href="#header" className="navbarLink">
                  Anasayfa
                </a>
              </li>
              <li className="navbarListItem">
                <a href="#yakında" className="navbarLink">
                  Hakkımda
                </a>
              </li>
              <li className="navbarListItem">
                <a href="#yakında" className="navbarLink">
                  Hizmetlerimiz
                </a>
              </li>
              <li className="navbarListItem">
                <a href="#yakında" className="navbarLink last">
                  İletişim
                </a>
              </li>
            </ul>

            <FontAwesomeIcon
              icon={faBars}
              size="xl"
              className="icon"
              id="icon"
              onClick={toggleMenu}
            />
          </div>
        </div>
      </nav>
      <nav className={`navbarMobile ${menuActive ? "active" : ""}`}>
        <div className="navbarMobileContainer" id="mobileNavbar">
          <div className="navbarMobileContent">
            <ul className="navbarMobileList">
              <li className="navbarMobileListItem">
                <a
                  href="#header"
                  className="navbarMobileLink"
                  onClick={toggleMenu}
                >
                  Anasayfa
                </a>
              </li>
              <li className="navbarMobileListItem">
                <a
                  href="#about"
                  className="navbarMobileLink"
                  onClick={toggleMenu}
                >
                  Hakkımda
                </a>
              </li>
              <li className="navbarMobileListItem">
                <a href="#a" className="navbarMobileLink" onClick={toggleMenu}>
                  Hizmetlerimiz
                </a>
              </li>
              <li className="navbarMobileListItem">
                <a
                  href="#b"
                  className="navbarMobileLink mobileLast"
                  onClick={toggleMenu}
                >
                  İletişim
                </a>
              </li>
            </ul>
          </div>
          <FontAwesomeIcon
            icon={faXmark}
            size="2xl"
            className="mobileIcon"
            onClick={toggleMenu}
          />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
