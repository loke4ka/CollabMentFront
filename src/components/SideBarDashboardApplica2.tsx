import { FunctionComponent } from "react";
import styles from "./SideBarDashboardApplica2.module.css";

const SideBarDashboardApplica2: FunctionComponent = () => {
  return (
    <div className={styles.sideBarDashboardApplica}>
      <div className={styles.frameParent}>
        <div className={styles.tablersteamWrapper}>
          <div className={styles.tablersteam}>
            <img
              className={styles.tablersteamIcon}
              loading="eager"
              alt=""
              src="/tablersteam2.svg"
            />
            <h3 className={styles.collabment}>Collabment</h3>
          </div>
        </div>
        <div className={styles.favoriteJobsFrame}>
          <div className={styles.frameIconWrapper}>
            <div className={styles.frameIcon}>
              <div className={styles.frameFrameFrameFrame}>
                <img
                  className={styles.icon}
                  loading="eager"
                  alt=""
                  src="/icon.svg"
                />
                <div className={styles.dashboard}>Dashboard</div>
              </div>
              <div className={styles.frameFrameFrameFrame1}>
                <img
                  className={styles.featherIconsBookmark}
                  loading="eager"
                  alt=""
                  src="/feather-icons--bookmark.svg"
                />
                <div className={styles.favoriteJobs}>Favorite Jobs</div>
              </div>
              <div className={styles.frameFrameFrameFrame2}>
                <img
                  className={styles.phosphorIconsBriefcase}
                  loading="eager"
                  alt=""
                  src="/phosphor-icons--briefcase.svg"
                />
                <div className={styles.appliedJobs}>Applied Jobs</div>
              </div>
              <div className={styles.frameFrameFrameFrame3}>
                <img className={styles.icon1} alt="" src="/icon-1.svg" />
                <div className={styles.caption}>My Public Profile</div>
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.sETTINGS}>
              <div className={styles.settings}>SETTINGS</div>
            </div>
          </div>
          <div className={styles.menuParent}>
            <button className={styles.menu}>
              <div className={styles.sidebarMenu}>
                <img
                  className={styles.indicatorIcon}
                  alt=""
                  src="/indicator.svg"
                />
                <div className={styles.menu1}>
                  <img className={styles.icon2} alt="" src="/icon-2.svg" />
                  <div className={styles.settings1}>Settings</div>
                </div>
              </div>
            </button>
            <div className={styles.frameLogout}>
              <div className={styles.lineSeparator}>
                <img className={styles.icon3} alt="" src="/icon-3.svg" />
                <div className={styles.logout}>Logout</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.patternIcon} alt="" src="/pattern.svg" />
      <div className={styles.profileMenu}>
        <div className={styles.roundedRectangle} />
        <div className={styles.frame}>
          <div className={styles.logout1}>
            <div className={styles.logout2}>Logout</div>
            <img className={styles.icon4} alt="" src="/icon-4.svg" />
          </div>
        </div>
      </div>
      <div className={styles.topNavigationBar}>
        <div className={styles.tabMenu} />
        <div className={styles.buttonNotification}>
          <div className={styles.frameProfilePic}>
            <div className={styles.rectangleProfileContainer} />
            <div className={styles.ayaGazizovaText}>
              <div className={styles.emailAddressInput}>
                <div className={styles.ayaGazizova}>Aya Gazizova</div>
              </div>
              <div className={styles.gazizovaemailcom}>gazizova@email.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBarDashboardApplica2;
