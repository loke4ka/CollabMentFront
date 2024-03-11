import { FunctionComponent } from "react";
import styles from "./Banking.module.css";

const Banking: FunctionComponent = () => {
  return (
    <div className={styles.banking}>
      <div className={styles.headerForMain}>
        <div className={styles.step2Parent}>
          <div className={styles.step2}>Step 2</div>
          <div className={styles.linkItemSignUp}>
            <h1 className={styles.interaction}>Interaction</h1>
            <img className={styles.overviewSubheading} src="/vector-3.svg"/>
          </div>
          <div className={styles.raiseSubheading}>
            <div className={styles.startupsCanShowcase}>
              Startups can showcase their projects through video presentations,
              while investors can display their portfolios. Engage, discuss, and
              find common ground for mutual growth.
            </div>
          </div>
        </div>
        <div className={styles.ventureFundsSubheading}>
          <div className={styles.syndicatesSubheading} />
        </div>
      </div>
      <div className={styles.div} />
      <div className={styles.partnershipsSubheading}>
        <div className={styles.helpCenterSubheading}>
          <div className={styles.educationCenterSubheading}>
            <div className={styles.step21}>Step 2</div>
            <div className={styles.careersSubheading}>
              <h1 className={styles.build}>Build</h1>
              <img className={styles.vectorIcon} alt="" src="/vector-3.svg" />
            </div>
            <div className={styles.listFrame}>
              <div
                className={styles.buildingASuccessful}
              >{`Building a Successful Partnership: After finding the perfect partner, start building a successful startup partnership. `}</div>
            </div>
          </div>
        </div>
        <div className={styles.partnershipsSubheadingChild} />
      </div>
    </div>
  );
};

export default Banking;
