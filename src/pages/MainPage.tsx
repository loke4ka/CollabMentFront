import { FunctionComponent } from "react";
import StartupContainer from "../components/StartupContainer";
import FrameComponent1 from "../components/FrameComponent1";
import Signup from "../components/Signup";
import RollingFundsFeesBreakdownT from "../components/RollingFundsFeesBreakdownT";
import Banking from "../components/Banking";
import HeaderSection from "../components/HeaderSection";
import SyndicatesInfo from "../components/SyndicatesInfo";
import FrameComponent from "../components/FrameComponent";
import FooterForMain from "../components/FooterForMain";
import styles from "./MainPage.module.css";

const MainPage: FunctionComponent = () => {
  return (
    <div className={styles.mainpage}>
      <StartupContainer />
      <FrameComponent1 />
      <section className={styles.numbersFrame}>
        <div className={styles.testimonials}>
          <h1 className={styles.whyCollabment}>Why Collabment?</h1>
        </div>
        <div className={styles.item}>
          <div className={styles.link}>
            <div className={styles.rollingFundsVentureFundsSyParent}>
              <div className={styles.rollingFundsVentureFundsSy}>
                <div className={styles.rollingFundsFees}>01</div>
                <div className={styles.wishlist}>
                  <div className={styles.resourcesPartnershipsHelpCe}>
                    <h1 className={styles.growWithThe}>Grow with the Best:</h1>
                    <div className={styles.collabmentBringsTogether}>
                      Collabment brings together promising startups and seasoned
                      investors. Here, you'll find an extensive community of
                      professionals ready to share their expertise and resources
                      for your success.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.partnerships}>
                <div className={styles.helpCenter}>02</div>
                <div className={styles.headingWelcomeWrapper}>
                  <div className={styles.headingWelcome}>
                    <h1 className={styles.findThePerfectContainer}>
                      <span>
                        <span>Find the Perfect Partner</span>
                        <span className={styles.span}>:</span>
                      </span>
                    </h1>
                    <div className={styles.ourPowerfulSearch}>
                      Our powerful search system allows startups to find
                      suitable investors, and investors to discover promising
                      projects. Filters and tags ensure precise matches to your
                      criteria.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.partnerships1}>
                <div className={styles.div}>03</div>
                <div className={styles.partnershipsInner}>
                  <div className={styles.transparencyAndTrustParent}>
                    <h1 className={styles.transparencyAndTrust}>
                      Transparency and Trust:
                    </h1>
                    <div className={styles.ourPowerfulSearch1}>
                      Our powerful search system allows startups to find
                      suitable investors, and investors to discover promising
                      projects. Filters and tags ensure precise matches to your
                      criteria.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className={styles.linkTermsPrivacyDisclosures}
            alt=""
            src="/rectangle-34624177-1@2x.png"
          />
        </div>
        <div className={styles.partnershipsLink}>
          <div className={styles.helpCenterLink}>
            <h1 className={styles.howItWorks}>How it works?</h1>
          </div>
          <div className={styles.ourPowerfulSearch2}>
            Our powerful search system allows startups to find suitable
            investors, and investors to discover promising projects. Filters and
            tags ensure precise matches to your criteria.
          </div>
        </div>
        <div className={styles.div1} />
        <Signup
          step1="Step 1"
          create="Create"
          registrationAndProfileCre="Registration and Profile Creation: Join Collabment, create your profile, and share details about your startup or investment experience."
        />
        <div className={styles.div2} />
        <RollingFundsFeesBreakdownT />
        <Banking />
        <HeaderSection />
        <div className={styles.text}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.linkWrapper}>
                <div className={styles.link1}>
                  <div className={styles.listFrame}>
                    <div className={styles.heading}>
                      <div className={styles.listItemFrame} />
                      <div className={styles.fuelingInnovation}>
                        <span className={styles.fuelingInnovationTxtContainer}>
                          <p className={styles.fueling}>Fueling</p>
                          <p className={styles.innovation}>innovation</p>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.withMoreThanContainer}>
                    <span>
                      <p className={styles.withMoreThan}>
                        With more than half of all top-tier VC
                      </p>
                      <p className={styles.dealsRunThrough}>
                        deals run through the platform, Collabment is at the
                        heart of venture investing. This exposure gives
                        Collabment the insight to
                      </p>
                      <p className={styles.identifyGapsIn}>
                        identify gaps in the VC market and build
                      </p>
                      <p className={styles.theSolutionsThat}>
                        the solutions that bridge them.
                      </p>
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.headingForStartups}>
                <div className={styles.expectationExceeded}>
                  <div className={styles.vPEvents}>
                    <div className={styles.allyMasi}>
                      <h1 className={styles.heading1}>$</h1>
                      <div className={styles.assetsOnPlatform}>
                        assets on platform
                      </div>
                    </div>
                    <div className={styles.frameResources}>
                      <div className={styles.parentHeader}>1</div>
                    </div>
                  </div>
                  <div className={styles.fundsContainer}>
                    <div className={styles.startupsContainer}>2</div>
                  </div>
                  <div className={styles.investorContainer}>
                    <div className={styles.activeInvestorsFrame}>4</div>
                  </div>
                  <div className={styles.forInvestorsInfo}>
                    <h1 className={styles.b}>B</h1>
                  </div>
                </div>
                <div className={styles.ventureFunds}>
                  <div className={styles.syndicates}>
                    <div className={styles.feesBreakdown}>
                      <div className={styles.invitationFrame}>2</div>
                      <div className={styles.activeInvestorSection}>
                        <div className={styles.registrationPortal}>3</div>
                      </div>
                      <div className={styles.fundsAndSyndicates}>
                        <h1 className={styles.k}>k+</h1>
                      </div>
                    </div>
                    <div className={styles.fundsAndSyndicates1}>
                      funds and syndicates
                    </div>
                  </div>
                  <div className={styles.newSection}>
                    <div className={styles.lovedTrusted}>
                      <div className={styles.expectationExceeded1}>
                        <div className={styles.talishaBrantleyQuote}>
                          <div className={styles.review}>
                            <div className={styles.partnershipsHub}>1</div>
                          </div>
                          <div className={styles.learningCenter}>2</div>
                        </div>
                        <div className={styles.activeStartups}>
                          active startups
                        </div>
                      </div>
                    </div>
                    <h1 className={styles.k1}>k+</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.byTheNumbers}>By the numbers</div>
          </div>
        </div>
        <div className={styles.helpCenter1}>
          <div className={styles.educationCenter}>
            <div className={styles.aboutUs}>
              <div className={styles.careers}>
                <div className={styles.frameNode}>8</div>
              </div>
              <div className={styles.headingNode}>5</div>
              <div className={styles.activeInvestorSection1}>
                <h1 className={styles.k2}>k+</h1>
              </div>
            </div>
            <div className={styles.activeInvestors}>active investors</div>
          </div>
          <div className={styles.investorCollabment}>
            <div className={styles.footerForMain}>
              <h1 className={styles.listNode}>$</h1>
              <div className={styles.listNode1}>8</div>
              <div className={styles.bWrapper}>
                <h1 className={styles.b1}>B</h1>
              </div>
            </div>
            <div className={styles.raisedByActive}>
              raised by active startups
            </div>
          </div>
        </div>
        <SyndicatesInfo />
      </section>
      <div className={styles.aboutusLink}>
        <div className={styles.careersLink}>
          <div className={styles.careersLinkChild} />
          <div className={styles.welcomeToCollabmentContainer}>
            <span>
              <span>{`Welcome to `}</span>
              <span className={styles.collabment}>
                <span>Collabment:</span>
                <span className={styles.span1}>{` `}</span>
              </span>
            </span>
          </div>
        </div>
      </div>
      <FrameComponent />
      <FooterForMain />
    </div>
  );
};

export default MainPage;
