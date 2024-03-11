import { FunctionComponent } from "react";
import Navigation3 from "./Navigation3";
import Disable from "./Disable";
import styles from "./Navigation2.module.css";

const Navigation2: FunctionComponent = () => {
  return (
    <header className={styles.navigation}>
      <div className={styles.navigation1}>
        <div className={styles.base} />
        <div className={styles.logoZone}>
          <div className={styles.base1} />
          <div className={styles.frameFrame} />
        </div>
        <div className={styles.upwork}>
          <div className={styles.logoColl}>
            <div className={styles.junPresent}>
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
        <div className={styles.footer}>
          <div className={styles.items}>
            <Navigation3
              rss="/rss.svg"
              feed="feed"
              rss1="/rss-1.svg"
              feed1="feed"
            />
            <Navigation3
              rss="/users.svg"
              feed="Network"
              rss1="/users-1.svg"
              feed1="Network"
              propLeft="16.67%"
              propPadding="var(--padding-lg) var(--padding-sm) var(--padding-smi) var(--padding-mini)"
            />
            <Navigation3
              rss="/briefcase.svg"
              feed="jobs"
              rss1="/briefcase-1.svg"
              feed1="jobs"
              propLeft="32.22%"
              propPadding="var(--padding-lg) var(--padding-smi) var(--padding-smi)"
            />
            <div className={styles.navigation2}>
              <Disable messageSquare="/messagesquare.svg" chat="chat" />
              <div className={styles.active}>
                <div className={styles.activeChild} />
                <div className={styles.activeItem} />
                <img
                  className={styles.messageSquareIcon}
                  alt=""
                  src="/messagesquare-1.svg"
                />
                <div className={styles.chat}>chat</div>
              </div>
              <div className={styles.count}>
                <div className={styles.rectangle} />
                <b className={styles.b}>1</b>
              </div>
            </div>
            <div className={styles.navigation3}>
              <Disable
                messageSquare="/bell.svg"
                chat="notices"
                propPadding="var(--padding-lg) var(--padding-lg) var(--padding-smi) var(--padding-lgi)"
              />
              <div className={styles.active1}>
                <div className={styles.activeInner} />
                <div className={styles.rectangleDiv} />
                <img className={styles.bellIcon} alt="" src="/bell-1.svg" />
                <div className={styles.notices}>notices</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.language}>
          <div className={styles.search}>
            <button className={styles.aboutParent}>
              <div className={styles.about} />
              <img className={styles.searchIcon} alt="" src="/search.svg" />
              <div className={styles.text}>
                <div className={styles.search1}>Search</div>
              </div>
            </button>
            <div className={styles.image} />
          </div>
        </div>
        <div className={styles.profileWrapper}>
          <div className={styles.profile}>
            <div className={styles.frame} />
            <div className={styles.frameWrapper}>
              <div className={styles.frame1} />
            </div>
            <div className={styles.textWrapper}>
              <img
                className={styles.textIcon}
                loading="eager"
                alt=""
                src="/rectangle@2x.png"
              />
            </div>
            <div className={styles.group}>
              <div className={styles.rectangle1}>
                <div className={styles.aGazizova}>A. Gazizova</div>
                <div className={styles.you}>YOU</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.settings}>
          <div className={styles.other}>
            <div className={styles.headerContainer} />
            <div className={styles.instance} />
            <div className={styles.navbar}>
              <div className={styles.logo}>
                <img
                  className={styles.moreHorizontalIcon}
                  alt=""
                  src="/morehorizontal.svg"
                />
                <div className={styles.other1}>other</div>
              </div>
            </div>
            <div className={styles.instance1} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation2;
