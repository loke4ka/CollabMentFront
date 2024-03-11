import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Disable.module.css";

export type DisableType = {
  messageSquare?: string;
  chat?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const Disable: FunctionComponent<DisableType> = ({
  messageSquare,
  chat,
  propPadding,
}) => {
  const disable4Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={styles.disable} style={disable4Style}>
      <div className={styles.disableChild} />
      <img
        className={styles.messageSquareIcon}
        loading="eager"
        alt=""
        src={messageSquare}
      />
      <div className={styles.chat}>{chat}</div>
    </div>
  );
};

export default Disable;
