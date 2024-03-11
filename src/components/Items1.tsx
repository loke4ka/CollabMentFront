import { FunctionComponent } from "react";
import FRAMESEPARATOR from "./FRAMESEPARATOR";
import styles from "./Items1.module.css";

const Items1: FunctionComponent = () => {
  return (
    <header className={styles.items}>
      <FRAMESEPARATOR
        rss="/rss.svg"
        feed="feed"
        rss1="/rss-1.svg"
        feed1="feed"
      />
      <FRAMESEPARATOR
        rss="/users.svg"
        feed="Network"
        rss1="/users-1.svg"
        feed1="Network"
        propLeft="16.67%"
        propPadding="var(--padding-lg) var(--padding-sm) var(--padding-smi) var(--padding-mini)"
      />
      <FRAMESEPARATOR
        rss="/briefcase.svg"
        feed="jobs"
        rss1="/briefcase-1.svg"
        feed1="jobs"
        propLeft="32.22%"
        propPadding="var(--padding-lg) var(--padding-smi) var(--padding-smi)"
      />
      <div className={styles.fRAMESEPARATOR}>
        <div className={styles.disable}>
          <div className={styles.disableChild} />
          <img
            className={styles.messageSquareIcon}
            alt=""
            src="/messagesquare.svg"
          />
          <div className={styles.chat}>chat</div>
        </div>
        <div className={styles.active}>
          <div className={styles.activeChild} />
          <input className={styles.messageSquare} type="checkbox" />
          <div className={styles.chat1}>chat</div>
          <div className={styles.chatNotice} />
        </div>
        <div className={styles.count}>
          <div className={styles.rectangle} />
          <b className={styles.b}>1</b>
        </div>
      </div>
      <div className={styles.fRAMESEPARATOR1}>
        <div className={styles.disable1}>
          <div className={styles.disableItem} />
          <img
            className={styles.bellIcon}
            loading="lazy"
            alt=""
            src="/bell.svg"
          />
          <div className={styles.notices}>notices</div>
        </div>
        <div className={styles.active1}>
          <div className={styles.activeItem} />
          <div className={styles.activeInner} />
          <img className={styles.bellIcon1} alt="" src="/bell-1.svg" />
          <div className={styles.notices1}>notices</div>
        </div>
      </div>
    </header>
  );
};

export default Items1;
