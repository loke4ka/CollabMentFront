import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Textfield21.module.css";

export type Textfield2Type = {
  label?: string;
  thisIsPlaceholderPlacehol?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const Textfield2: FunctionComponent<Textfield2Type> = ({
  label,
  thisIsPlaceholderPlacehol,
  propWidth,
}) => {
  const thisIsPlaceholder1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.textfield}>
      <div className={styles.label}>{label}</div>
      <div className={styles.input}>
        <input
          className={styles.thisIsPlaceholder}
          placeholder={thisIsPlaceholderPlacehol}
          type="text"
          style={thisIsPlaceholder1Style}
        />
      </div>
      <div className={styles.thisIsHelper}>Minimum 8 characters</div>
    </div>
  );
};

export default Textfield2;
