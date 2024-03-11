import { FunctionComponent } from "react";
import styles from "./FrameComponent2.module.css";
import stylesAnimation from "../components/globalAnimations.module.css";
import { Link } from "react-router-dom";

const username = localStorage.getItem('username');

const FrameComponent2: FunctionComponent = () => {

  return (
    <section className={styles.topNavParent}>
      <header className={styles.topNav}>
        <img className={styles.patternIcon} alt="" src="/pattern1.svg" />
        <h1 className={styles.settings}>Settings</h1>
        <div className={styles.notification}>
         
          <button className={styles.button}>
            <b className={styles.backToHomepage}><Link to={`/profile/${username}`}>Back to homepage</Link></b>
          </button>
          
          <img
            className={styles.notificationIcon}
            loading="eager"
            alt=""
            src="/notification.svg"
          />
        </div>
      </header>
      <div className={styles.tabsComponent}>
        <div className={styles.tabs}>
          <Link className={stylesAnimation.NavLinkSettings} to="/MyProfile">
            <div className={styles.personalInformation}>My Profile</div>
          </Link>
          <Link className={stylesAnimation.NavLinkSettings} to="/dash-personal">
          <div className={styles.personalInformation}>Personal information</div>
          </Link>
          <Link className={stylesAnimation.NavLinkSettings} to="/login-details">

          <div className={styles.tabMenu1}>
            <div className={styles.loginDetails}>Login Details</div>
          </div>
          </Link>
          <div className={styles.tabMenu2}>
            <div className={styles.caption1}>Notifications</div>
          </div>
          <div className={styles.tabMenu3}>
            <div className={styles.caption2}>Notifications</div>
          </div>
          <div className={styles.tabMenu4}>
            <div className={styles.caption3}>Notifications</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
