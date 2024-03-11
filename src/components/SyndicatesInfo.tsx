import { FunctionComponent } from "react";
import styles from "./SyndicatesInfo.module.css";

const SyndicatesInfo: FunctionComponent = () => {
  return (
    <div className={styles.syndicatesInfo}>
      <img
        className={styles.frameIcon}
        loading="eager"
        alt=""
        src="/frame.svg"
      />
      <div className={styles.mainContentContainer}>
        <div className={styles.div}>
          <div className={styles.lovedTrustedWrapper}>
            <h1 className={styles.lovedTrusted}>{`Loved & trusted`}</h1>
          </div>
          <div className={styles.divParent}>
            <div className={styles.div1}>
              <h3 className={styles.asAnInvestor}>
                “As an investor, Collabment exceeded my expectations. The
                integrated chat system facilitated direct communication,
                streamlining the entire process. Making Collabment my go-to
                platform for discovering and collaborating with promising
                ventures.”
              </h3>
              <div className={styles.listItemLink}>
                <img
                  className={styles.b16170a5347a239ee4651HomeTesIcon}
                  loading="eager"
                  alt=""
                  src="/633b16170a5347a239ee4651-hometestimonialsallijpg@2x.png"
                />
                <div className={styles.heading}>
                  <div className={styles.allyMasi}>Ally Masi</div>
                  <div className={styles.directorOfIndustriesContainer}>
                    <p className={styles.directorOfIndustries}>
                      Director of Industries Events Marketing
                    </p>
                    <p className={styles.salesforce}>Salesforce</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.div2}>
              <div className={styles.div3}>
                <h3 className={styles.collabmentIsNot}>
                  “Collabment is not just a platform; it's a dynamic ecosystem
                  fostering collaboration. Engaging in forums and communities
                  has expanded my network, providing opportunities beyond the
                  conventional.”
                </h3>
                <div className={styles.div4}>
                  <img
                    className={styles.b3c461433787246e6ff8eTalishabIcon}
                    loading="eager"
                    alt=""
                    src="/633b3c461433787246e6ff8e-talishabrantley1024x1024p500jpeg@2x.png"
                  />
                  <div className={styles.div5}>
                    <div className={styles.talishaBrantley}>
                      Talisha Brantley
                    </div>
                    <b className={styles.vpOfEventsContainer}>
                      <p className={styles.vpOfEvents}>VP of Events</p>
                      <p className={styles.bitwise}>Bitwise</p>
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SyndicatesInfo;
