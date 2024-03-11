import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <section className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.profileManagementWrapper}>
          <h3 className={styles.profileManagement}>Profile Management</h3>
        </div>
        <div className={styles.communitiesAndForumsWrapper}>
          <h3 className={styles.communitiesAndForums}>
            Communities and Forums
          </h3>
        </div>
        <div className={styles.investorManagementWrapper}>
          <h3 className={styles.investorManagement}>Investor Management</h3>
        </div>
        <div className={styles.interactionManagementWrapper}>
          <h3 className={styles.interactionManagement}>
            Interaction management
          </h3>
        </div>
      </div>
      <div className={styles.frame}>
        <img
          className={styles.unsplashkw3m50xrhjkIcon}
          loading="eager"
          alt=""
          src="/unsplashkw3m50xrhjk@2x.png"
        />
        <img
          className={styles.frameChild}
          loading="eager"
          alt=""
          src="/rectangle-34624157@2x.png"
        />
        <img
          className={styles.partnershipsLinkIcon}
          loading="eager"
          alt=""
          src="/rectangle-34624158@2x.png"
        />
        <div className={styles.helpCenterLink}>
          <img
            className={styles.blogLinkIcon}
            loading="eager"
            alt=""
            src="/rectangle-34624177@2x.png"
          />
        </div>
      </div>
      <div className={styles.rollingFundsParent}>
        <div className={styles.rollingFunds}>
          <div className={styles.craftImpressiveProfiles}>
            Craft impressive profiles for your startup or investment portfolio.
            Upload video presentations, add key information, and stand out from
            the crowd.
          </div>
        </div>
        <div className={styles.connectWithLikeMinded}>
          Connect with like-minded individuals in our communities and discuss
          ideas on forums. Find support, advice, and opportunities to meet the
          perfect partners.
        </div>
        <div className={styles.syndicates}>
          <div className={styles.investorRelationsReimagined}>
            Investor relations reimagined. Leverage software to drive
            meaningful, actionable engagement.
          </div>
        </div>
        <div className={styles.engageDirectlyThrough}>
          Engage directly through our chat and messaging system. Share comments,
          receive feedback, and foster successful communication with your future
          partners. Together, we shape the future.
        </div>
      </div>
      <div className={styles.demoDayFunds}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameItem} />
          <div className={styles.howItWorksWrapper}>
            <h1 className={styles.howItWorks}>How it works?</h1>
          </div>
          <h1 className={styles.elevatingCollaborationTo}>
            Elevating Collaboration to New Heights
          </h1>
          <div className={styles.embarkingOnSuccessfulPartneWrapper}>
            <div className={styles.embarkingOnSuccessful}>
              Embarking on successful partnerships has never been more
              accessible. Begin by creating a profile that truly reflects your
              startup's essence or showcases your investment portfolio. This is
              your chance to narrate your journey, achievements, and
              aspirations, ensuring that your unique story shines in the crowded
              digital space.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
