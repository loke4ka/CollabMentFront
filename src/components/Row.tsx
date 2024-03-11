import { FunctionComponent } from "react";
import styles from "./Row.module.css";

export type RowType = {
  dateOfStudy?: string;
  placeholder?: string;
};

const Row: FunctionComponent<RowType> = ({ dateOfStudy, placeholder }) => {
  return (
    <div className={styles.row3}>
      <div className={styles.textfield}>
        <div className={styles.dateOfStudy}>{dateOfStudy}</div>
        <div className={styles.dropdown}>
          <input
            className={styles.input}
            placeholder={placeholder}
            type="text"
          />
          <img className={styles.icon} alt="" src="/icon-7.svg" />
        </div>
      </div>
      <div className={styles.textfield1}>
        <div className={styles.namesOfTheContainer}>
          <span>{`Names of the institution `}</span>
          <span className={styles.span}>*</span>
        </div>
        <div className={styles.dropdown1}>
          <div className={styles.select}>Select...</div>
          <img className={styles.icon1} alt="" src="/icon-52.svg" />
        </div>
      </div>
    </div>
  );
};

export default Row;
