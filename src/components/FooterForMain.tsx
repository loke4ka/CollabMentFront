import { FunctionComponent } from "react";
import styles from "./FooterForMain.module.css";

const FooterForMain: FunctionComponent = () => {
  return (
    <footer className={styles.footerformain}>
      <div className={styles.headingGetStarted}>
        <div className={styles.signInListItemNode}>
          <div className={styles.signUpListItemNode}>
            <div className={styles.heading3GetStartedParent}>
              <div className={styles.heading3}>Get started</div>
              <div className={styles.signInCallToAction}>
                <div className={styles.listItem}>Sign in</div>
                <div className={styles.listItem1}>Sign up</div>
              </div>
            </div>
            <div className={styles.forStartupsHeadingNode}>
              <div className={styles.rollingFundsListItemNode}>
                <div className={styles.heading31}>For Startups</div>
                <div className={styles.startupResources}>
                  <div className={styles.listItem2}>Overview</div>
                  <div className={styles.listItem3}>Equity</div>
                  <div className={styles.listItem4}>Equity for Law Firms</div>
                  <div className={styles.listItem5}>Raise</div>
                  <div className={styles.listItem6}>Banking</div>
                  <div className={styles.listItem7}>People</div>
                  <div className={styles.listItem8}>Roll Up Vehicles™</div>
                  <div className={styles.listItem9}>Incorporation</div>
                  <div className={styles.listItem10}>Pricing</div>
                  <div className={styles.listItem11}>Cap Tables</div>
                </div>
              </div>
              <div className={styles.helpCenterLink}>
                <div className={styles.heading32}>For Investors</div>
                <div className={styles.helpCenterListItemLink}>
                  <div className={styles.listItem12}>Rolling Funds</div>
                  <div className={styles.listItem13}>Venture Funds</div>
                  <div className={styles.listItem14}>Syndicates</div>
                  <div className={styles.listItem15}>Wishlist</div>
                  <div className={styles.listItem16}>
                    Rolling Funds® Fees Breakdown
                  </div>
                  <div className={styles.listItem17}>Demo Day Funds</div>
                </div>
              </div>
              <div className={styles.forStartupsTitle}>
                <div className={styles.heading33}>Resources</div>
                <div className={styles.educationCenterLink}>
                  <div className={styles.listItem18}>Partnerships</div>
                  <div className={styles.listItem19}>Blog</div>
                  <div className={styles.listItem20}>Help Center</div>
                  <div className={styles.listItem21}>Education Center</div>
                  <div className={styles.listItem22}>About us</div>
                  <div className={styles.listItem23}>Careers</div>
                  <div className={styles.listItem24}>Form CRS</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cookieSettingsHub}>
            <div className={styles.linkTerms}>Terms</div>
            <div className={styles.linkPrivacy}>Privacy</div>
            <div className={styles.linkDisclosures}>Disclosures</div>
            <div className={styles.linkCookie}>Cookie Settings</div>
          </div>
        </div>
      </div>
      <div className={styles.termsPrivacyDisclosures}>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
        <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
      </div>
    </footer>
  );
};

export default FooterForMain;
