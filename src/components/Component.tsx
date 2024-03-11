import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Component.module.css";

export type ComponentType = {
  rss?: string;
  feed?: string;
  rss1?: string;
  feed1?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propPadding?: CSSProperties["padding"];
};

const Component: FunctionComponent<ComponentType> = ({
  rss,
  feed,
  rss1,
  feed1,
  propLeft,
  propPadding,
}) => {
  const feedStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const disableStyle: CSSProperties = useMemo(() => {
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
        <div className={styles.feed} style={feedStyle}>
          {feed}
        </div>
      </div>
      <div className={styles.disable} style={disableStyle}>
        <div className={styles.disableChild} />
        <img className={styles.rssIcon1} alt="" src={rss1} />
        <div className={styles.feed1}>{feed1}</div>
      </div>
    </div>
  );
};

export default Component;
