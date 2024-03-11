import { FunctionComponent } from "react";
import FrameComponent4 from "../components/FrameComponent4";
import styles from "./LoginRegister3.module.css";

const LoginRegister3: FunctionComponent = () => {
  return (
    <div className={styles.loginRegister}>
      <div className={styles.frameA}>
        <h1 className={styles.getAProject}>Get a project quote</h1>
        <div className={styles.pleaseFillThe}>
          Please fill the form below to receive a quote for your project. Feel
          free to add as much detail as needed.
        </div>
      </div>
      <div className={styles.buttonZone}>
        <FrameComponent4 />
        <footer className={styles.secondaryBtnParent}>
          <button className={styles.secondaryBtn}>
            <div className={styles.buttonText}>Previous step</div>
          </button>
          <button className={styles.primaryBtn}>
            <div className={styles.buttonText1}>Next step</div>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default LoginRegister3;
