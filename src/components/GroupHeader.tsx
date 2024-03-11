import { FunctionComponent } from "react";
import styles from "./GroupHeader.module.css";

const GroupHeader: FunctionComponent = () => {
  return (
    <footer className={styles.groupHeader}>
      <div className={styles.footer}>
        <div className={styles.navigationBar} />
        <div className={styles.sep}>
          <div className={styles.footerBase} />
          <div className={styles.mainContent} />
        </div>
        <div className={styles.navigation}>
          <div className={styles.communityGuidesPrivacy}>
            <div className={styles.navigation1}>Navigation</div>
            <div className={styles.aboutCareersAdvertisingContainer}>
              <p className={styles.about}>About</p>
              <p className={styles.careers}>Careers</p>
              <p className={styles.advertising}>Advertising</p>
              <p className={styles.smallBusiness}>Small Business</p>
            </div>
          </div>
          <div className={styles.talentMarketingSales}>
            <div className={styles.talentSolutionsMarketingContainer}>
              <p className={styles.talentSolutions}>Talent Solutions</p>
              <p className={styles.marketingSolutions}>Marketing Solutions</p>
              <p className={styles.salesSolutions}>Sales Solutions</p>
              <p className={styles.saferyCenter}>Safery Center</p>
            </div>
          </div>
          <div className={styles.talentMarketingSales1}>
            <div className={styles.communityGuidelinesPrivacyContainer}>
              <p className={styles.communityGuidelines}>Community Guidelines</p>
              <p className={styles.privacyTerms}>{`Privacy & Terms `}</p>
              <p className={styles.mobileApp}>Mobile App</p>
            </div>
          </div>
        </div>
        <div className={styles.fastAccess}>
          <div className={styles.fastAccess1}>Fast access</div>
          <div className={styles.parent}>
            <div className={styles.div}>
              <div className={styles.child} />
              <div className={styles.questions}>Questions?</div>
              <div className={styles.helpCircleWrapper}>
                <img
                  className={styles.helpCircleIcon}
                  loading="eager"
                  alt=""
                  src="/helpcircle.svg"
                />
              </div>
            </div>
            <div className={styles.div1}>
              <div className={styles.item} />
              <div className={styles.settings}>Settings</div>
              <div className={styles.settingsWrapper}>
                <img
                  className={styles.settingsIcon}
                  loading="eager"
                  alt=""
                  src="/settings.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.language}>
          <div className={styles.language1}>Language</div>
          <div className={styles.div2}>
            <div className={styles.inner} />
            <div className={styles.englishWrapper}>
              <div className={styles.english}>English</div>
            </div>
            <img
              className={styles.chevronDownIcon}
              alt=""
              src="/chevrondown.svg"
            />
          </div>
        </div>
        <div className={styles.logoColl}>
          <img
            className={styles.tablersteamIcon}
            loading="eager"
            alt=""
            src="/tablersteam-1.svg"
          />
          <b className={styles.collabment}>COLLABMENT</b>
        </div>
      </div>
    </footer>
  );
};

export default GroupHeader;
