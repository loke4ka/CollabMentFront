import { FunctionComponent } from "react";
import styles from "./Other.module.css";

const Other: FunctionComponent = () => {
  return (
    <div className={styles.other}>
      <div className={styles.tablersteam} />
      <div className={styles.language} />
      <div className={styles.connectionFrame}>
        <div className={styles.frameHeader}>
          <img
            className={styles.moreHorizontalIcon}
            loading="eager"
            alt=""
            src="/morehorizontal.svg"
          />
          <div className={styles.other1}>other</div>
        </div>
      </div>
      <div className={styles.language1} />
    </div>
  );
};

export default Other;
