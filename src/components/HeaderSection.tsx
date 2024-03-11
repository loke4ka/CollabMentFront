import { FunctionComponent } from "react";
import styles from "./HeaderSection.module.css";

const HeaderSection: FunctionComponent = () => {
  return (
    <div className={styles.headerSection}>
      <div className={styles.equitySection}>
        <div className={styles.builtWithStartup}>
          Built with startup scaling in mind
        </div>
        <div className={styles.rollingFunds}>
          <div className={styles.collabmentIsWhere}>
            Collabment is where innovative ideas meet strategic investments, and
            partnerships flourish. Join us to revolutionize the way you
            collaborate, whether you're a startup visionary or an investment
            trailblazer. Elevate your partnership game with Collabment – where
            collaboration becomes a catalyst for success.
          </div>
        </div>
      </div>
      <div className={styles.syndicates}>
        <div className={styles.feesBreakdown}>
          <div className={styles.demoDayFunds}>
            <div className={styles.startupsCanShowcase}>
              Startups can showcase their projects through video presentations,
              while investors can display their portfolios. Engage, discuss, and
              find common ground for mutual growth.
            </div>
          </div>
          <div className={styles.partnerships}>
            <div className={styles.helpCenter}>
              <div className={styles.helpCenterChild} />
              <div className={styles.educationCenter}>
                <img
                  className={styles.aboutUsIcon}
                  alt=""
                  src="/rectangle-34624177-2@2x.png"
                />
              </div>
              <div className={styles.collabmentGoesBeyond}>
                Collabment goes beyond a mere platform; it's a vibrant
                community. Engage in discussions, join forums, and participate
                in communities relevant to your interests. Connect with
                like-minded individuals and build relationships that extend
                beyond the transaction.
              </div>
            </div>
            <div className={styles.helpCenter1}>
              <div className={styles.helpCenterItem} />
              <div className={styles.helpCenterInner}>
                <img
                  className={styles.frameChild}
                  loading="eager"
                  alt=""
                  src="/rectangle-34624178@2x.png"
                />
              </div>
              <div className={styles.startupsCanShowcase1}>
                Startups can showcase their projects through video
                presentations, while investors can display their portfolios.
                Engage, discuss, and find common ground for mutual growth.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
