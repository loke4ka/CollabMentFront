import { FunctionComponent } from "react";
import styles from "./Other1.module.css";

const Other1: FunctionComponent = () => {
  return (
    <div className={styles.other}>
      <div className={styles.otherChild} />
      <div className={styles.line} />
      <div className={styles.profileFrame}>
        <div className={styles.otherLine}>
          <img
            className={styles.moreHorizontalIcon}
            loading="lazy"
            alt=""
            src="/morehorizontal.svg"
          />
          <div className={styles.other1}>other</div>
        </div>
      </div>
      <div className={styles.line1} />
    </div>
  );
};

export default Other1;
