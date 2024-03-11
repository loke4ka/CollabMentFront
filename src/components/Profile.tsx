import { FunctionComponent } from "react";
import styles from "./Profile.module.css";

const Profile: FunctionComponent = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.brandonWilson} />
      <div className={styles.acceptDecline}>
        <div className={styles.rectangle} />
      </div>
      <div className={styles.heyIsawyourworks}>
        <img
          className={styles.frameIcon}
          loading="eager"
          alt=""
          src="/rectangle@2x.png"
        />
      </div>
      <div className={styles.audreyAlexander}>
        <div className={styles.yesterday}>
          <div className={styles.aGazizova}>A. Gazizova</div>
          <div className={styles.you}>YOU</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
