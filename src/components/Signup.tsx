import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Signup.module.css";

export type SignupType = {
  step1?: string;
  create?: string;
  registrationAndProfileCre?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
};

const Signup: FunctionComponent<SignupType> = ({
  step1,
  create,
  registrationAndProfileCre,
  propBackgroundColor,
}) => {
  const equityListStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div className={styles.signup}>
      <div className={styles.containerFrameWrapper}>
        <div className={styles.containerFrame}>
          <div className={styles.step1}>{step1}</div>
          <div className={styles.listContainer}>
            <h1 className={styles.create}>{create}</h1>
            <img className={styles.helpCenter} src="vector-3.svg"/>
          </div>
          <div className={styles.registrationAndProfile}>
            {registrationAndProfileCre}
          </div>
        </div>
      </div>
      <div className={styles.equityList} style={equityListStyle} />
    </div>
  );
};

export default Signup;
