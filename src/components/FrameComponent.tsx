import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <section className={styles.mainpageInner}>
      <div className={styles.newNameParentWrapper}>
        <div className={styles.newNameParent}>
          <img
            className={styles.divIcon}
            loading="eager"
            alt=""
            src="/div@2x.png"
          />
          <img className={styles.divIcon1} alt="" src="/div-1@2x.png" />
          <img className={styles.divIcon2} alt="" src="/div-2@2x.png" />
          <img className={styles.divIcon3} alt="" src="/div-3@2x.png" />
          <img className={styles.divIcon4} alt="" src="/div-4@2x.png" />
          <img className={styles.divIcon5} alt="" src="/div-5@2x.png" />
          <img className={styles.divIcon6} alt="" src="/div-6@2x.png" />
          <img className={styles.divIcon7} alt="" src="/div-7@2x.png" />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
