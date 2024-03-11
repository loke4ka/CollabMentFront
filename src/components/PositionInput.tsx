import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./PositionInput.module.css";

export type PositionInputType = {
  certificatesAndAchievemen?: string;
  addCertificates?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propFlex?: CSSProperties["flex"];
  propWidth1?: CSSProperties["width"];
  propFlex1?: CSSProperties["flex"];
};

const PositionInput: FunctionComponent<PositionInputType> = ({
  certificatesAndAchievemen,
  addCertificates,
  propWidth,
  propFlex,
  propWidth1,
  propFlex1,
}) => {
  const positionInputStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
    };
  }, [propWidth, propFlex]);

  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const certificatesAndAchievementsStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex1,
    };
  }, [propFlex1]);

  return (
    <div className={styles.positionInput} style={positionInputStyle}>
      <b className={styles.certificatesAndAchievements}>
        {certificatesAndAchievemen}
      </b>
      <div className={styles.rectangleParent} style={groupDivStyle}>
        <div className={styles.frameChild} />
        <div className={styles.addAnotherWorkExperienceBt}>
          <img
            className={styles.featherIconsPlusCircle}
            loading="eager"
            alt=""
            src="/feather-icons--pluscircle.svg"
          />
        </div>
        <div
          className={styles.certificatesAndAchievements1}
          style={certificatesAndAchievementsStyle}
        >
          <div className={styles.addCertificatesFrame}>
            <div className={styles.addCertificates}>{addCertificates}</div>
          </div>
          <div className={styles.browseFileOr}>
            Browse file or drop here, only pdf
          </div>
        </div>
      </div>
    </div>
  );
};

export default PositionInput;
