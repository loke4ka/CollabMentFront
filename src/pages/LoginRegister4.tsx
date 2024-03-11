import { FunctionComponent } from "react";
import SecondFrame from "../components/SecondFrame";
import styles from "./LoginRegister4.module.css";

const LoginRegister4: FunctionComponent = () => {
  return (
    <div className={styles.loginRegister}>
      <div className={styles.registerFrame}>
        <h1 className={styles.getAProject}>Get a project quote</h1>
        <div className={styles.pleaseFillThe}>
          Please fill the form below to receive a quote for your project. Feel
          free to add as much detail as needed.
        </div>
      </div>
      <div className={styles.firstFrame}>
        <SecondFrame />
        <button className={styles.secondaryBtn}>
          <div className={styles.buttonText}>Previous step</div>
        </button>
      </div>
    </div>
  );
};

export default LoginRegister4;
