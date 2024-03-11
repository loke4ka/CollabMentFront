import { FunctionComponent } from "react";
import styles from "./StartupContainer.module.css";

const StartupContainer: FunctionComponent = () => {
  return (
    <section className={styles.startupContainer}>
      <div className={styles.navbarContainer}>
        <div className={styles.logoAndText}>
          <div className={styles.frameParent}>
            <header className={styles.frameGroup}>
              <div className={styles.tablersteamParent}>
                <img
                  className={styles.tablersteamIcon}
                  loading="eager"
                  alt=""
                  src="/tablersteam.svg"
                />
                <b className={styles.collabment}>COLLABMENT</b>
              </div>
              <div className={styles.textNode}>
                <div className={styles.home}>Home</div>
                <div className={styles.heading}>
                  <div className={styles.forIndivduals}>For Indivduals</div>
                </div>
                <div className={styles.forBusiness}>For Business</div>
                <div className={styles.forDevelopers}>For Developers</div>
              </div>
            </header>
            <div className={styles.rollingFundsFeesBreakdownD}>
              <div className={styles.list}>
                <div className={styles.textNode1} />
                <div className={styles.welcomeToCollabmentContainer}>
                  <span>
                    <span>{`Welcome to `}</span>
                    <span className={styles.collabment1}>{`Collabment: `}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.termsPrivacyDisclosuresCook}>
            <div className={styles.yourPathTo}>
              Your Path to Successful Startup Partnerships
            </div>
          </div>
        </div>
        <div className={styles.logoText}>
          <div className={styles.lineSeparator}>
            <a href="/login-register">
            <button className={styles.imageWithText}>
              <div className={styles.heading3}>Sign in</div>
            </button>
            </a>
            <a href="/signup">
            <button className={styles.imageWithText1}>
              <div className={styles.heading31}>Get started</div>
            </button>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.startupContainerChild} />
    </section>
  );
};

export default StartupContainer;
