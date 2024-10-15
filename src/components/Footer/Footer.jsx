import React from "react";
import { Link } from "react-router-dom";


import { ROUTES } from "../../utils/routes";
import styles from "../../styles/styles/Footer.module.css";

import LOGO from "../../images/logo.svg";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="STAFF" />
        </Link>
      </div>
      <div className={styles.rights}>
        Developed by{" "}
        <a
          href="https://youtube.com/Tomkovich"
          target="_blank"
          rel="noreferrer"
        >
          Kulinkovich
        </a>
      </div>

      <div className={styles.socials}>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
          </svg>
        </a>

        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
          </svg>
        </a>

        <a href="https://YouTube.com" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Footer;
