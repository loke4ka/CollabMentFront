import { FunctionComponent } from "react";
import styles from "./GroupComponent.module.css";

const GroupComponent: FunctionComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <img
        className={styles.frameItem}
        loading="eager"
        alt=""
        src="/ellipse-6@2x.png"
      />
      <div className={styles.ourTeamLogoParent}>
        <img
          className={styles.ourTeamLogo}
          loading="eager"
          alt=""
          src="/vector3.svg"
        />
        <div className={styles.brandonMessageParent}>
          <div className={styles.brandonMessage}>
            <div className={styles.collabmentInfo}>
              <h2 className={styles.brandonWilson}>Brandon Wilson</h2>
              <div className={styles.h}> · 1h</div>
            </div>
            <div className={styles.profileInfo}>
              <h3 className={styles.ourTeamAt}>
                Our team at Collabment Company is gearing up for something BIG!
                🚀
              </h3>
              <img
                className={styles.image8Icon}
                loading="eager"
                alt=""
                src="/image-8@2x.png"
              />
            </div>
          </div>
          <div className={styles.postComponents}>
            <div className={styles.commentParent}>
              <img
                className={styles.commentIcon}
                loading="eager"
                alt=""
                src="/comment.svg"
              />
              <div className={styles.replyHelp}>10</div>
            </div>
            <div className={styles.retweetParent}>
              <img
                className={styles.retweetIcon}
                loading="eager"
                alt=""
                src="/retweet.svg"
              />
              <div className={styles.div}>1</div>
            </div>
            <div className={styles.likeParent}>
              <img
                className={styles.likeIcon}
                loading="eager"
                alt=""
                src="/like.svg"
              />
              <div className={styles.div1}>8</div>
            </div>
            <div className={styles.shareParent}>
              <img
                className={styles.shareIcon}
                loading="eager"
                alt=""
                src="/share.svg"
              />
              <div className={styles.div2}>10</div>
            </div>
            <div className={styles.statisticsParent}>
              <img
                className={styles.statisticsIcon}
                alt=""
                src="/statistics.svg"
              />
              <div className={styles.div3}>10</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameInner} />
    </div>
  );
};

export default GroupComponent;
