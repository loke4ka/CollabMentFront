import { FunctionComponent, useState, useEffect } from "react";
import Component1 from "./Component1";
import styles from "./FrameNav.module.css";
import axios from 'axios';

const UrlToView = 'http://127.0.0.1:8000/api'

const FrameNav: FunctionComponent = () => {

  const username = localStorage.getItem('username');

  const [viewsCount, setViewsCount] = useState(null);

    useEffect(() => {
        const fetchViewsCount = async () => {
            try {
                const response = await axios.get(UrlToView + `/profile/views/count/${username}/`);
                setViewsCount(response.data.profile_views_count);
            } catch (error) {
                console.error('Error fetching profile views count:', error);
            }
        };

        fetchViewsCount();
    }, [username]);

  return (
    <section className={styles.frameNav}>
      
      <div className={styles.lineSeparator}>
        <div className={styles.footer}>
          <div className={styles.navigation1}>
            <div className={styles.navigationChild} />
            <div className={styles.notifications}>
              <div className={styles.line3} />
              <div className={styles.notifications1}>Notifications</div>
              <div className={styles.rectangle1} />
            </div>
            <div className={styles.notificationSettingsWrapper}>
              {/* <div className={styles.notificationSettings}>
                Notification settings
              </div> */}
            </div>
          </div>
          <div className={styles.dashboard}>
            <div className={styles.dashboardChild} />
            <div className={styles.frameParent}>
              <div className={styles.yourDashboardParent}>
                <div className={styles.yourDashboard}>your dashboard</div>
                {/* <div className={styles.goToStats}>go to stats</div> */}
              </div>
              <div className={styles.earlier} />
            </div>
            <div className={styles.dashboardInner}>
              <div className={styles.parent}>
                <div className={styles.div2}>{viewsCount}</div>
                <div className={styles.viewsToday}>Views of profile</div>
              </div>
            </div>
            <div className={styles.frameDiv}>
              {/* <div className={styles.group}>
                <div className={styles.div3}>15</div>
                <div className={styles.postsViews}>posts views</div>
              </div> */}
            </div>
            <div className={styles.dashboardInner1}>
              <div className={styles.container}>
                {/* <div className={styles.div4}>9</div>
                <div className={styles.searchAppereances}>
                  search appereances
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.line4}>
          <div className={styles.groupedFrames}>
            <div className={styles.yourDashboard1}>
              <div className={styles.viewstodayWrapper}>
                <div className={styles.viewstoday} />
              </div>
              <div className={styles.recent}>recent</div>
              <div className={styles.searchappearances}>
                <div className={styles.line5} />
              </div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.frameGroupChild} />
              <div className={styles.youAppearedInSearches}>
                <div className={styles.hoursago}>
                  <img
                    className={styles.groupIcon}
                    alt=""
                    src="/group@2x.png"
                  />
                  <div className={styles.group1}>
                    <img
                      className={styles.groupChild}
                      alt=""
                      src="/rectangle-22@2x.png"
                    />
                    <img
                      className={styles.groupItem}
                      alt=""
                      src="/rectangle-23@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.questionsFrame}>
                <div className={styles.youAppearedInContainer}>
                  <span className={styles.youAppearedIn}>
                    You appeared in 9 searches
                  </span>
                  <span> this week</span>
                </div>
                <div className={styles.hours}>3 hours</div>
              </div>
              <img
                className={styles.moreHorizontalIcon1}
                alt=""
                src="/morehorizontal.svg"
              />
            </div>
          </div>
          {/* <div className={styles.groupedFrames1}>
            <div className={styles.frameContainer}>
              <div className={styles.lineWrapper}>
                <div className={styles.line6} />
              </div>
              <div className={styles.earlier1}>Earlier</div>
              <div className={styles.lineContainer}>
                <div className={styles.line7} />
              </div>
            </div>
             <div className={styles.div5}>
              <div className={styles.child} />
              <div className={styles.inner}>
                <div className={styles.groupParent}>
                  <img
                    className={styles.groupIcon1}
                    alt=""
                    src="/rectangle-22@2x.png"
                  />
                  <div className={styles.group2}>
                    <img
                      className={styles.groupInner}
                      alt=""
                      src="/rectangle-22-1@2x.png"
                    />
                    <div className={styles.rectangleDiv} />
                    <img
                      className={styles.rectangleIcon}
                      alt=""
                      src="/rectangle-23-1@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.weFoundJobsThatYouMayBeParent}>
                <div className={styles.weFoundJobs}>
                  We found jobs that you may be interested
                </div>
                <div className={styles.dayAgo}>2 day ago</div>
              </div>
              <img
                className={styles.moreHorizontalIcon2}
                alt=""
                src="/morehorizontal.svg"
              />
            </div> 
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default FrameNav;
