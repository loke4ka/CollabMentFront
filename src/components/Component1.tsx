import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Component1.module.css";

export type Component1Type = {
  rss?: string;
  feed?: string;
  rss1?: string;
  feed1?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propPadding?: CSSProperties["padding"];
};

const Component1: FunctionComponent<Component1Type> = ({
  rss,
  feed,
  rss1,
  feed1,
  propLeft,
  propPadding,
}) => {
  const feed1Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const disable1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={styles.div}>
      <div className={styles.active}>
        <div className={styles.activeChild} />
        <div className={styles.activeItem} />
        <img className={styles.rssIcon} alt="" src={rss} />
        <div className={styles.feed} style={feed1Style}>
          {feed}
        </div>
      </div>
      <div className={styles.disable} style={disable1Style}>
        <div className={styles.languageFrame} />
        <img className={styles.rssIcon1} alt="" src={rss1} />
        <div className={styles.feed1}>{feed1}</div>
      </div>
    </div>
  );
};

export default Component1;
