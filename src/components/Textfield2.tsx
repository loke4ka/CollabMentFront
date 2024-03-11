import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Textfield2.module.css";

export type Textfield1Type = {
  educationalLevel?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const Textfield1: FunctionComponent<Textfield1Type> = ({
  educationalLevel,
  propPadding,
}) => {
  const inputStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={styles.textfield}>
      <div className={styles.educationalLevel}>
        <span>{educationalLevel}</span>
        <span className={styles.span}>*</span>
      </div>
      <div className={styles.input} style={inputStyle}>
        <div className={styles.select}>Select...</div>
        <img className={styles.icon} alt="" src="/icon-52.svg" />
      </div>
    </div>
  );
};

export default Textfield1;
