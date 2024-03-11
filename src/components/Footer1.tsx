import { FunctionComponent } from "react";
import styles from "./Footer1.module.css";

const Footer1: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.navigationSection} />
      <div className={styles.sep}>
        <div className={styles.separatorLine} />
        <div className={styles.aboutCareersAdvertisingSmal} />
      </div>
      <div className={styles.navigation}>
        <div className={styles.communityGuidelinesLink}>
          <div className={styles.navigation1}>Navigation</div>
          <div className={styles.aboutCareersAdvertisingContainer}>
            <p className={styles.about}>About</p>
            <p className={styles.careers}>Careers</p>
            <p className={styles.advertising}>Advertising</p>
            <p className={styles.smallBusiness}>Small Business</p>
          </div>
        </div>
        <div className={styles.talentSolutionsLink}>
          <div className={styles.talentSolutionsMarketingContainer}>
            <p className={styles.talentSolutions}>Talent Solutions</p>
            <p className={styles.marketingSolutions}>Marketing Solutions</p>
            <p className={styles.salesSolutions}>Sales Solutions</p>
            <p className={styles.saferyCenter}>Safery Center</p>
          </div>
        </div>
        <div className={styles.talentSolutionsLink1}>
          <div className={styles.communityGuidelinesPrivacyContainer}>
            <p className={styles.communityGuidelines}>Community Guidelines</p>
            <p className={styles.privacyTerms}>{`Privacy & Terms `}</p>
            <p className={styles.mobileApp}>Mobile App</p>
          </div>
        </div>
      </div>
      <div className={styles.fastAccess}>
        <div className={styles.fastAccess1}>Fast access</div>
        <div className={styles.questionsFrame}>
          <div className={styles.settingsFrame}>
            <div className={styles.questionsFrameRectangle} />
            <div className={styles.questions}>Questions?</div>
            <div className={styles.settingsFrame1}>
              <img
                className={styles.helpCircleIcon}
                loading="eager"
                alt=""
                src="/helpcircle.svg"
              />
            </div>
          </div>
          <div className={styles.settingsFrame2}>
            <div className={styles.settingsFrameChild} />
            <div className={styles.settings}>Settings</div>
            <img
              className={styles.settingsIcon}
              loading="eager"
              alt=""
              src="/settings.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.language}>
        <div className={styles.language1}>Language</div>
        <div className={styles.languageRectangle}>
          <div className={styles.rectangleContainer} />
          <div className={styles.profilePicHolder}>
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
        <div className={styles.collaborationText}>
          <b className={styles.collabment}>COLLABMENT</b>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
