import { FunctionComponent } from "react";
import styles from "./TextfieldDesiredposition.module.css";

const TextfieldDesiredposition: FunctionComponent = () => {
  return (
    <div className={styles.textfieldDesiredposition}>
      <div className={styles.tabs}>
        <div className={styles.tabMenu}>
          <div className={styles.caption}>My Profile</div>
        </div>
        <div className={styles.tabMenu1}>
          <div className={styles.personalInformation}>Personal information</div>
          <img
            className={styles.tabMenuChild}
            loading="eager"
            alt=""
            src="/rectangle-173.svg"
          />
        </div>
        <div className={styles.loginDetails}>Login Details</div>
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
  );
};

export default TextfieldDesiredposition;
