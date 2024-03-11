import { FunctionComponent } from "react";
import styles from "./Profile1.module.css";

const Profile1: FunctionComponent = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.profileChild} />
      <div className={styles.lineWrapper}>
        <div className={styles.line} />
      </div>
      <div className={styles.rectangleWrapper}>
        <img
          className={styles.rectangleIcon}
          loading="lazy"
          alt=""
          src="/rectangle@2x.png"
        />
      </div>
      <div className={styles.otherWrapper}>
        <div className={styles.other}>
          <div className={styles.aGazizova}>A. Gazizova</div>
          <div className={styles.you}>YOU</div>
        </div>
      </div>
    </div>
  );
};

export default Profile1;
