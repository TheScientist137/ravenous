import React from "react";
import styles from './Footer.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
 return (
  <footer className={styles.Footer}>
   <div className={styles.footerContainer}>
    <p>Made with <FontAwesomeIcon icon={faHeart} /> by <a className={styles.link} href="https://github.com/TheScientist137/">@theScientist137</a></p>
   </div>
  </footer>
 );
};

export default Footer;