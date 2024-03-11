import { FunctionComponent } from "react";
import styles from "./FRAME.module.css";
import { hover } from "@testing-library/user-event/dist/hover";

const FRAME: FunctionComponent = () => {
  return (
    <form className={styles.fRAME}>
      <div className={styles.inputFrame}>
        <div className={styles.emailOrUsername}>
          <div className={styles.welcomeToCollabment}>
            Welcome to Collabment
          </div>
          <h1 className={styles.signIn}>Sign in</h1>
        </div>
        <div className={styles.noAccountText} style={{ cursor: "pointer"}}>
          <a href="/login-register1">
          <div className={styles.noAccountContainer}>
            <p className={styles.noAccount}>No Account ?</p>
            <p className={styles.signUp} >Sign up</p>
          </div>
          </a>
        </div>
      </div>
      <div className={styles.googleSignIn}>
        <div className={styles.inputGroup}>
          <button className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <img className={styles.googleIcon} alt="" src="/google.svg" />
            <div className={styles.signInWith}>Sign in with Google</div>
          </button>
          <div className={styles.passwordInputLabel}>
            <img
              className={styles.passwordInputLabelChild}
              loading="eager"
              alt=""
              src="/group-52.svg"
            />
            <img
              className={styles.passwordInputLabelItem}
              loading="eager"
              alt=""
              src="/group-51.svg"
            />
          </div>
        </div>
        <div className={styles.enterYourUsernameOrEmailAParent}>
          <div className={styles.enterYourUsername}>
            Enter your username or email address
          </div>
          <input className={styles.textInputRectangle} type="text" placeholder="Username or email address" />
          {/* <div className={styles.usernameOrEmail}>
          </div> */}
        </div>
      </div>
      <div className={styles.loginFrame}>
        <div className={styles.passwordInputFrame}>
          <div className={styles.enterYourPasswordParent}>
            <div className={styles.enterYourPassword}>Enter your Password</div>
            <input className={styles.rectangleShape} type="password" placeholder="Password" />
            {/* <div className={styles.password}></div> */}
          </div>
        </div>
        <div className={styles.forgotPassword}>Forgot Password</div>
      </div>
      <div className={styles.largeButton}>
        <button className={styles.buttonsoliddefaultlargemai}>
          <div className={styles.large}>Sign in</div>
        </button>
      </div>
    </form>
  );
};

export default FRAME;
