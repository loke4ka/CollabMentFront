import { FunctionComponent } from "react";
import styles from "./Footer5.module.css";

const Footer5: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.navigationFrame} />
      <div className={styles.sep}>
        <div className={styles.line} />
        <div className={styles.sepFrame} />
      </div>
      <div className={styles.navigation}>
        <div className={styles.navigationFrame1}>
          <div className={styles.navigation1}>Navigation</div>
          <div className={styles.aboutCareersAdvertisingContainer}>
            <p className={styles.about}>About</p>
            <p className={styles.careers}>Careers</p>
            <p className={styles.advertising}>Advertising</p>
            <p className={styles.smallBusiness}>Small Business</p>
          </div>
        </div>
        <div className={styles.frameInstance}>
          <div className={styles.talentSolutionsMarketingContainer}>
            <p className={styles.talentSolutions}>Talent Solutions</p>
            <p className={styles.marketingSolutions}>Marketing Solutions</p>
            <p className={styles.salesSolutions}>Sales Solutions</p>
            <p className={styles.saferyCenter}>Safery Center</p>
          </div>
        </div>
        <div className={styles.frameInstance1}>
          <div className={styles.communityGuidelinesPrivacyContainer}>
            <p className={styles.communityGuidelines}>Community Guidelines</p>
            <p className={styles.privacyTerms}>{`Privacy & Terms `}</p>
            <p className={styles.mobileApp}>Mobile App</p>
          </div>
        </div>
      </div>
      <div className={styles.fastAccess}>
        <div className={styles.fastAccess1}>Fast access</div>
        <div className={styles.communityGuidesFrame}>
          <div className={styles.settingsFrame}>
            <div className={styles.questionsFrame} />
            <div className={styles.questions}>Questions?</div>
            <div className={styles.helpcircleFrame}>
              <img
                className={styles.helpCircleIcon}
                loading="lazy"
                alt=""
                src="/helpcircle.svg"
              />
            </div>
          </div>
          <div className={styles.settingsFrame1}>
            <div className={styles.settingsFrameChild} />
            <div className={styles.settings}>Settings</div>
            <img
              className={styles.settingsIcon}
              loading="lazy"
              alt=""
              src="/settings.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.language}>
        <div className={styles.language1}>Language</div>
        <div className={styles.chevrondownFrame}>
          <div className={styles.chevrondownFrameChild} />
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
          alt=""
          src="/tablersteam-1.svg"
        />
        <div className={styles.collabLabel}>
          <b className={styles.collabment}>COLLABMENT</b>
        </div>
      </div>
    </footer>
  );
};

export default Footer5;
