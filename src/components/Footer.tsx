import { FunctionComponent } from "react";
import "antd/dist/antd.min.css";
import { Select } from "antd";
import styles from "./Footer.module.css";

const Footer: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.rectangle} />
      <div className={styles.sep}>
        <div className={styles.line} />
        <div className={styles.rectangle1} />
      </div>
      <div className={styles.navigation}>
        <div className={styles.navigationParent}>
          <div className={styles.navigation1}>Navigation</div>
          <div className={styles.aboutCareersAdvertisingContainer}>
            <p className={styles.about}>About</p>
            <p className={styles.careers}>Careers</p>
            <p className={styles.advertising}>Advertising</p>
            <p className={styles.smallBusiness}>Small Business</p>
          </div>
        </div>
        <div className={styles.talentSolutionsMarketingSolWrapper}>
          <div className={styles.talentSolutionsMarketingContainer}>
            <p className={styles.talentSolutions}>Talent Solutions</p>
            <p className={styles.marketingSolutions}>Marketing Solutions</p>
            <p className={styles.salesSolutions}>Sales Solutions</p>
            <p className={styles.saferyCenter}>Safery Center</p>
          </div>
        </div>
        <div className={styles.communityGuidelinesPrivacyWrapper}>
          <div className={styles.communityGuidelinesPrivacyContainer}>
            <p className={styles.communityGuidelines}>Community Guidelines</p>
            <p className={styles.privacyTerms}>{`Privacy & Terms `}</p>
            <p className={styles.mobileApp}>Mobile App</p>
          </div>
        </div>
      </div>
      <div className={styles.fastAccess}>
        <div className={styles.fastAccess1}>Fast access</div>
        <div className={styles.helpTextParent}>
          <div className={styles.helpText}>
            <div className={styles.questionsSettings} />
            <div className={styles.questions}>Questions?</div>
            <div className={styles.questionsSettingsFrame}>
              <img
                className={styles.helpCircleIcon}
                loading="eager"
                alt=""
                src="/helpcircle.svg"
              />
            </div>
          </div>
          <div className={styles.helpText1}>
            <div className={styles.helpTextChild} />
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
        <Select
          className={styles.rootLanguageBox}
          virtual={false}
          showArrow={false}
        >{` `}</Select>
      </div>
      <div className={styles.logoColl}>
        <img
          className={styles.tablersteamIcon}
          alt=""
          src="/tablersteam-1.svg"
        />
        <b className={styles.collabment}>COLLABMENT</b>
      </div>
    </footer>
  );
};

export default Footer;
