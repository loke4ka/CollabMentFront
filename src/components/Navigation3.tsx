import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Navigation3.module.css";

export type Navigation3Type = {
  rss?: string;
  feed?: string;
  rss1?: string;
  feed1?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propPadding?: CSSProperties["padding"];
};

const Navigation3: FunctionComponent<Navigation3Type> = ({
  rss,
  feed,
  rss1,
  feed1,
  propLeft,
  propPadding,
}) => {
  const feed2Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const disable3Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={styles.navigation}>
      <div className={styles.active}>
        <div className={styles.activeChild} />
        <div className={styles.activeItem} />
        <img className={styles.rssIcon} alt="" src={rss} />
        <div className={styles.feed} style={feed2Style}>
          {feed}
        </div>
      </div>
      <div className={styles.disable} style={disable3Style}>
        <div className={styles.communityGuides} />
        <img className={styles.rssIcon1} alt="" src={rss1} />
        <div className={styles.feed1}>{feed1}</div>
      </div>
    </div>
  );
};

export default Navigation3;
