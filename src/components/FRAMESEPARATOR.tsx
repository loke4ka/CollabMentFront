import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FRAMESEPARATOR.module.css";

export type FRAMESEPARATORType = {
  rss?: string;
  feed?: string;
  rss1?: string;
  feed1?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propPadding?: CSSProperties["padding"];
};

const FRAMESEPARATOR: FunctionComponent<FRAMESEPARATORType> = ({
  rss,
  feed,
  rss1,
  feed1,
  propLeft,
  propPadding,
}) => {
  const feed3Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const disable5Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={styles.fRAMESEPARATOR}>
      <div className={styles.active}>
        <div className={styles.activeChild} />
        <div className={styles.activeItem} />
        <img className={styles.rssIcon} alt="" src={rss} />
        <div className={styles.feed} style={feed3Style}>
          {feed}
        </div>
      </div>
      <div className={styles.disable} style={disable5Style}>
        <div className={styles.rss} />
        <img className={styles.rssIcon1} alt="" src={rss1} />
        <div className={styles.feed1}>{feed1}</div>
      </div>
    </div>
  );
};

export default FRAMESEPARATOR;
