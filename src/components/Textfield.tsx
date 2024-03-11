import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Textfield.module.css";

export type TextfieldType = {
  phoneNumber?: string;
  thisIsPlaceholderPlacehol?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propColor?: CSSProperties["color"];
};

const Textfield: FunctionComponent<TextfieldType> = ({
  phoneNumber,
  thisIsPlaceholderPlacehol,
  propWidth,
  propColor,
}) => {
  const thisIsPlaceholderStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      color: propColor,
    };
  }, [propWidth, propColor]);

  return (
    <div className={styles.textfield}>
      <div className={styles.phoneNumberContainer}>
        <span>{phoneNumber}</span>
        <span className={styles.span}>*</span>
      </div>
      <div className={styles.input}>
        <input
          className={styles.thisIsPlaceholder}
          placeholder={thisIsPlaceholderPlacehol}
          type="text"
          style={thisIsPlaceholderStyle}
        />
      </div>
    </div>
  );
};

export default Textfield;
