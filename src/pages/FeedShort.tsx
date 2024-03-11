import { FunctionComponent } from "react";
import LikeFrame from "../components/LikeFrame";
import GroupComponent from "../components/GroupComponent";
import GroupHeader from "../components/GroupHeader";
import styles from "./FeedShort.module.css";

const FeedShort: FunctionComponent = () => {
  return (
    <div className={styles.feedshort}>
      <div className={styles.columns}>
        <div className={styles.main} />
        <div className={styles.sidebar} />
      </div>
      <section className={styles.commentSection}>
        <div className={styles.navigation}>
          <div className={styles.base} />
          <div className={styles.logoZone}>
            <div className={styles.base1} />
            <div className={styles.textBlock} />
          </div>
          <div className={styles.rectangleShape}>
            <div className={styles.logoColl}>
              <div className={styles.vectorPath}>
                <img
                  className={styles.tablersteamIcon}
                  loading="eager"
                  alt=""
                  src="/tablersteam1.svg"
                />
              </div>
              <b className={styles.collabment}>COLLABMENT</b>
            </div>
          </div>
          <div className={styles.newPostButton}>
            <nav className={styles.items}>
              <div className={styles.projectTitle}>
                <div className={styles.active}>
                  <div className={styles.footerSection} />
                  <img
                    className={styles.rssIcon}
                    loading="eager"
                    alt=""
                    src="/rss1.svg"
                  />
                  <div className={styles.feed}>feed</div>
                  <div className={styles.languageSelector} />
                </div>
                <div className={styles.disable}>
                  <div className={styles.disableChild} />
                  <img className={styles.rssIcon1} alt="" src="/rss-1.svg" />
                  <div className={styles.feed1}>feed</div>
                </div>
              </div>
              <div className={styles.projectTitle1}>
                <div className={styles.active1}>
                  <div className={styles.activeChild} />
                  <div className={styles.activeItem} />
                  <img className={styles.usersIcon} alt="" src="/users.svg" />
                  <div className={styles.network}>Network</div>
                </div>
                <div className={styles.disable1}>
                  <div className={styles.disableItem} />
                  <img
                    className={styles.usersIcon1}
                    loading="eager"
                    alt=""
                    src="/users-1.svg"
                  />
                  <div className={styles.network1}>Network</div>
                </div>
              </div>
              <div className={styles.projectTitle2}>
                <div className={styles.active2}>
                  <div className={styles.activeInner} />
                  <div className={styles.rectangleDiv} />
                  <img
                    className={styles.briefcaseIcon}
                    alt=""
                    src="/briefcase.svg"
                  />
                  <div className={styles.jobs}>jobs</div>
                </div>
                <div className={styles.disable2}>
                  <div className={styles.disableInner} />
                  <img
                    className={styles.briefcaseIcon1}
                    loading="eager"
                    alt=""
                    src="/briefcase-1.svg"
                  />
                  <div className={styles.jobs1}>jobs</div>
                </div>
              </div>
              <div className={styles.projectTitle3}>
                <div className={styles.disable3}>
                  <div className={styles.disableChild1} />
                  <img
                    className={styles.messageSquareIcon}
                    loading="eager"
                    alt=""
                    src="/messagesquare.svg"
                  />
                  <div className={styles.chat}>chat</div>
                </div>
                <div className={styles.active3}>
                  <div className={styles.activeChild1} />
                  <div className={styles.activeChild2} />
                  <img
                    className={styles.messageSquareIcon1}
                    alt=""
                    src="/messagesquare-1.svg"
                  />
                  <div className={styles.chat1}>chat</div>
                </div>
                <div className={styles.count}>
                  <div className={styles.rectangle} />
                  <b className={styles.b}>1</b>
                </div>
              </div>
              <div className={styles.projectTitle4}>
                <div className={styles.disable4}>
                  <div className={styles.disableChild2} />
                  <img
                    className={styles.bellIcon}
                    loading="eager"
                    alt=""
                    src="/bell.svg"
                  />
                  <div className={styles.notices}>notices</div>
                </div>
                <div className={styles.active4}>
                  <div className={styles.activeChild3} />
                  <div className={styles.activeChild4} />
                  <img className={styles.bellIcon1} alt="" src="/bell-1.svg" />
                  <div className={styles.notices1}>notices</div>
                </div>
              </div>
            </nav>
          </div>
          <div className={styles.collabmentLogo}>
            <div className={styles.search}>
              <button className={styles.frameProfile}>
                <div className={styles.frameText} />
                <img className={styles.searchIcon} alt="" src="/search1.svg" />
                <div className={styles.retweetFrame}>
                  <div className={styles.search1}>Search</div>
                </div>
              </button>
              <div className={styles.shareFrame} />
            </div>
          </div>
          <div className={styles.ellipseProfile}>
            <div className={styles.profile}>
              <div className={styles.profileName} />
              <div className={styles.frameProjects}>
                <div className={styles.freelanceLabel} />
              </div>
              <div className={styles.textNewArticle}>
                <img
                  className={styles.ellipseCommentIcon}
                  loading="eager"
                  alt=""
                  src="/rectangle@2x.png"
                />
              </div>
              <div className={styles.brandonFrame}>
                <div className={styles.vectorArrow}>
                  <div className={styles.aGazizova}>A. Gazizova</div>
                  <div className={styles.you}>YOU</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.separatorLine}>
            <div className={styles.other}>
              <div className={styles.headerGroup} />
              <div className={styles.profileTablersteam} />
              <div className={styles.rectangleProfile}>
                <div className={styles.frameComment}>
                  <img
                    className={styles.moreHorizontalIcon}
                    alt=""
                    src="/morehorizontal.svg"
                  />
                  <div className={styles.other1}>other</div>
                </div>
              </div>
              <div className={styles.profileTablersteam1} />
            </div>
          </div>
        </div>
        <div className={styles.retweetFrame1}>
          <LikeFrame />
          <GroupComponent />
        </div>
      </section>
      <GroupHeader />
    </div>
  );
};

export default FeedShort;
