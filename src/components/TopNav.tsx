import { FunctionComponent } from "react";
import styles from "./TopNav.module.css";
import { Link } from "react-router-dom";

const username = localStorage.getItem('username');

const TopNav: FunctionComponent = () => {
  return (
    <header className={styles.topNav}>
      <img className={styles.patternIcon} alt="" src="/pattern1.svg" />
      <h1 className={styles.settings}>Settings</h1>
      <div className={styles.personalDetails}>
        <button className={styles.button}>
          <Link to={"/profile/" + username}><div className={styles.backToHomepage}>Back to homepage</div> </Link>
        </button>
        <img
          className={styles.notificationIcon}
          loading="eager"
          alt=""
          src="/notification.svg"
        />
      </div>
    </header>
  );
};

export default TopNav;
