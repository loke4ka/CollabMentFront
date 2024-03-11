import { FunctionComponent } from "react";
import styles from "./FrameComponent3.module.css";

const FrameComponent3: FunctionComponent = () => {
  return (
    <div className={styles.tabsWrapper}>
      <div className={styles.tabs}>
        <div className={styles.tabMenu}>
          <div className={styles.caption}>My Profile</div>
        </div>
        <div className={styles.personalInformation}>Personal information</div>
        <div className={styles.tabMenu1}>
          <div className={styles.caption1}>Login Details</div>
          <img
            className={styles.tabMenuChild}
            loading="eager"
            alt=""
            src="/rectangle-1732.svg"
          />
        </div>
        <div className={styles.tabMenu2}>
          <div className={styles.caption2}>Notifications</div>
        </div>
        <div className={styles.tabMenu3}>
          <div className={styles.caption3}>Notifications</div>
        </div>
        <div className={styles.tabMenu4}>
          <div className={styles.caption4}>Notifications</div>
        </div>
        <div className={styles.tabMenu5}>
          <div className={styles.caption5}>Notifications</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
