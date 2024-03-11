import { FunctionComponent } from "react";
import Textfield from "./Textfield";
import styles from "./Forms.module.css";

const Forms: FunctionComponent = () => {
  return (
    <div className={styles.forms}>
      <div className={styles.textfield}>
        <div className={styles.fullNameContainer}>
          <span>{`Full Name `}</span>
          <span className={styles.span}>*</span>
        </div>
        <div className={styles.input}>
          <input
            className={styles.ayaGazizova}
            placeholder="Aya Gazizova"
            type="text"
          />
        </div>
      </div>
      <div className={styles.row2}>
        <Textfield
          phoneNumber="Phone Number "
          thisIsPlaceholderPlacehol="+7 777 077 75 77"
        />
        <Textfield
          phoneNumber="Email "
          thisIsPlaceholderPlacehol="gazizova@email.com"
          propWidth="163px"
          propColor="#25324b"
        />
      </div>
      <div className={styles.row3}>
        <div className={styles.textfield1}>
          <div className={styles.dateOfBirthContainer}>
            <span>{`Date of Birth `}</span>
            <span className={styles.span1}>*</span>
          </div>
          <div className={styles.dropdown}>
            <input
              className={styles.input1}
              placeholder="09/08/2003"
              type="text"
            />
            <img className={styles.icon} alt="" src="/icon-7.svg" />
          </div>
        </div>
        <div className={styles.textfield2}>
          <div className={styles.gender}>
            <span>{`Gender `}</span>
            <span className={styles.span2}>*</span>
          </div>
          <div className={styles.dropdown1}>
            <div className={styles.female}>Female</div>
            <img className={styles.icon1} alt="" src="/icon-52.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;
