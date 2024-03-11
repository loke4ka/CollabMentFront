import { FunctionComponent } from "react";
import Component from "./Component";
import styles from "./Items.module.css";

const Items: FunctionComponent = () => {
  return (
    <header className={styles.items}>
      <Component rss="/rss.svg" feed="feed" rss1="/rss-1.svg" feed1="feed" />
      <div className={styles.div}>
        <div className={styles.active}>
          <div className={styles.activeChild} />
          <img
            className={styles.usersIcon}
            loading="eager"
            alt=""
            src="/users1.svg"
          />
          <div className={styles.network}>Network</div>
          <div className={styles.activeItem} />
        </div>
        <div className={styles.disable}>
          <div className={styles.disableChild} />
          <img className={styles.usersIcon1} alt="" src="/users-1.svg" />
          <div className={styles.network1}>Network</div>
        </div>
      </div>
      <Component
        rss="/briefcase.svg"
        feed="jobs"
        rss1="/briefcase-1.svg"
        feed1="jobs"
        propLeft="32.22%"
        propPadding="var(--padding-lg) var(--padding-smi) var(--padding-smi)"
      />
      <div className={styles.div1}>
        <div className={styles.disable1}>
          <div className={styles.disableItem} />
          <img
            className={styles.messageSquareIcon}
            loading="eager"
            alt=""
            src="/messagesquare.svg"
          />
          <div className={styles.chat}>chat</div>
        </div>
        <div className={styles.active1}>
          <div className={styles.activeInner} />
          <div className={styles.rectangleDiv} />
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
      <div className={styles.div2}>
        <div className={styles.disable2}>
          <div className={styles.disableInner} />
          <img
            className={styles.bellIcon}
            loading="eager"
            alt=""
            src="/bell.svg"
          />
          <div className={styles.notices}>notices</div>
        </div>
        <div className={styles.active2}>
          <div className={styles.activeChild1} />
          <div className={styles.activeChild2} />
          <img className={styles.bellIcon1} alt="" src="/bell-1.svg" />
          <div className={styles.notices1}>notices</div>
        </div>
      </div>
    </header>
  );
};

export default Items;
