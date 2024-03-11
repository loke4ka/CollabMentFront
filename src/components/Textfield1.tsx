import { FunctionComponent } from "react";
import styles from "./Textfield1.module.css";

export type Textfield11Type = {
  professionalField?: string;
};

const Textfield11: FunctionComponent<Textfield11Type> = ({
  professionalField,
}) => {
  return (
    <div className={styles.textfield}>
      <div className={styles.professionalFieldContainer}>
        <span>{professionalField}</span>
        <span className={styles.span}>*</span>
      </div>
      <div className={styles.input}>
        <div className={styles.select}>Select...</div>
        <img className={styles.icon} alt="" src="/icon-52.svg" />
      </div>
    </div>
  );
};

export default Textfield11;
