import * as React from "react";
import { useState } from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faBars, faPhone } from "@fortawesome/free-solid-svg-icons";
import * as styles from "./header.module.css";

const Header = (props) => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible((prevState) => !prevState);
  };

  return (
    <header
      className={styles.header}
      style={{ backgroundColor: props.backgroundColor || "defaultColor" }}
    >
      <Link href="/">
        <img
          src="/logos/F.A.A.F/logo_1.png"
          alt="Logo"
          className="logo"
          width={83}
          height={83}
        />
      </Link>
      <div
        className={`${styles.navigationContainer} ${
          isNavVisible ? styles.visible : ""
        }`}
        style={{ backgroundColor: props.backgroundColor || "defaultColor" }}
      >
        <nav>
          <ul>
            <li>
              <Link href="/about" className={props.active==="about" ? styles.active : ""}>
                <span className={styles.linkSpan}>About us</span>
                <span className={styles.iconLinkSpan}></span>
              </Link>
            </li>
            <li>
              <Link href="/work" className={props.active==="work" ? styles.active : ""}>
                <span className={styles.linkSpan}>Our work</span>
                <span className={styles.iconLinkSpan}></span>
              </Link>
            </li>
            <li>
              <Link href="/get-involved" className={props.active==="get-involved" ? styles.active : ""}>
                <span className={styles.linkSpan}>Get involved</span>
                <span className={styles.iconLinkSpan}></span>
              </Link>
            </li>
            <li>
              <Link href="/contact" className={props.active==="contact" ? styles.active : ""}>
                <span className={styles.linkSpan}>Contact</span>
                <span className={styles.iconLinkSpan}></span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.navContact}>
          <span>
            <FontAwesomeIcon icon={faPhone} />
          </span>
          <span>+256 782 710434</span>
        </div>
      </div>
      <button 
        className={styles.toggleBtn} 
        onClick={toggleNav}
        style={{ backgroundColor: props.btnBackgroundColor || "defaultColor" }}
      >
        {isNavVisible ? (
          <FontAwesomeIcon icon={faClose} className={styles.toggleIcon} />
        ) : (
          <FontAwesomeIcon icon={faBars} className={styles.toggleIcon} />
        )}
      </button>
    </header>
  );
};

export default Header;
