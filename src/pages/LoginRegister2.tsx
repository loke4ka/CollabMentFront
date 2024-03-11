import { FunctionComponent } from "react";
import styles from "./LoginRegister2.module.css";

const LoginRegister2: FunctionComponent = () => {
  return (
    <div className={styles.loginRegister}>
      <div className={styles.registerFrame}>
        <div className={styles.mainFRAME}>
          <div className={styles.logoColl}>
            <img
              className={styles.tablersteamIcon}
              loading="eager"
              alt=""
              src="/tablersteam-1.svg"
            />
            <b className={styles.collabment}>COLLABMENT</b>
          </div>
          <div className={styles.firstFrame}>
            <div className={styles.firstFrameInner}>
              <div className={styles.welcomeTextParent}>
                <div className={styles.welcomeText}>
                  <div className={styles.welcomeToCollabment}>
                    Welcome to Collabment
                  </div>
                  <h1 className={styles.signUp}>Sign up</h1>
                </div>
                <div className={styles.signinText}>
                  <div className={styles.haveAnAccountContainer}>
                    <p className={styles.haveAnAccount}>Have an Account ?</p>
                    <p className={styles.signIn}>Sign in</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.jobSeekerFrame}>
              <div className={styles.findRemoteJob}>
                <div
                  className={styles.areYouLooking}
                >{`Are you looking for a remote job or hireing remote talent?  `}</div>
              </div>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <img
                  className={styles.frameItem}
                  loading="eager"
                  alt=""
                  src="/group-32.svg"
                />
                <div className={styles.remoteWorkerIcon}>
                  <div className={styles.imARemote}>I’m a remote worker</div>
                  <div
                    className={styles.imAnEmployee}
                  >{`I’m an employee looking for a remote job `}</div>
                </div>
                <div className={styles.ellipseShape}>
                  <div className={styles.ellipseShapeChild} />
                </div>
              </div>
              <div className={styles.rectangleGroup}>
                <div className={styles.frameInner} />
                <div className={styles.hiringFrameWrapper}>
                  <div className={styles.hiringFrame}>
                    <img
                      className={styles.hiringFrameChild}
                      loading="eager"
                      alt=""
                      src="/group-35.svg"
                    />
                    <div className={styles.iwanttohireText}>
                      <div className={styles.iWantTo}>
                        I want to hire employees
                      </div>
                      <div
                        className={styles.imOnEmployer}
                      >{`I’m on employer hiring remote talent  `}</div>
                    </div>
                  </div>
                </div>
                <div className={styles.vectorParent}>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src="/ellipse-61.svg"
                  />
                  <img
                    className={styles.vectorIcon}
                    loading="eager"
                    alt=""
                    src="/vector4.svg"
                  />
                </div>
              </div>
              <div className={styles.primaryBtn}>
                <button className={styles.primaryBtn1}>
                  <div className={styles.buttonText}>Next step</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.imgParent}>
        <div className={styles.img} />
        <div className={styles.texte} />
        <h1 className={styles.findAJob}>Find a job through your community</h1>
        <img
          className={styles.icon}
          loading="eager"
          alt=""
          src="/111092401-1@2x.png"
        />
      </div>
    </div>
  );
};

export default LoginRegister2;
