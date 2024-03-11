import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./AdditionalDetails1.module.css";

export type AdditionalDetails1Type = {
  additionalDetails?: string;
  icon?: string;
  email?: string;
  gazizovaemailcom?: string;
  icon1?: string;
  phone?: string;
  iconButton?: string;
  icon2?: string;
  languages?: string;
  kazakhEnglishRussian?: string;

  /** Style props */
  propBorderRadius?: CSSProperties["borderRadius"];
  propColor?: CSSProperties["color"];
  propColor1?: CSSProperties["color"];
  propColor2?: CSSProperties["color"];
};

const AdditionalDetails1: FunctionComponent<AdditionalDetails1Type> = ({
  additionalDetails,
  icon,
  email,
  gazizovaemailcom,
  icon1,
  phone,
  iconButton,
  icon2,
  languages,
  kazakhEnglishRussian,
  propBorderRadius,
  propColor,
  propColor1,
  propColor2,
}) => {
  const additionalDetails1Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  const gazizovaemailcom1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const iconButtonStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const kazakhEnglishRussian1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  return (
    <div className={styles.additionalDetails} style={additionalDetails1Style}>
      <div className={styles.rectangleSeparator}>
        <h2 className={styles.additionalDetails1}>{additionalDetails}</h2>
        <div className={styles.button}>
          <input className={styles.icon} type="checkbox" />
        </div>
      </div>
      <div className={styles.email}>
        <img className={styles.icon1} alt="" src={icon} />
        <div className={styles.content}>
          <div className={styles.email1}>{email}</div>
          <div
            className={styles.gazizovaemailcom}
            style={gazizovaemailcom1Style}
          >
            {gazizovaemailcom}
          </div>
        </div>
      </div>
      <div className={styles.email2}>
        <img className={styles.icon2} alt="" src={icon1} />
        <div className={styles.content1}>
          <div className={styles.phone}>{phone}</div>
          <div className={styles.iconButton} style={iconButtonStyle}>
            {iconButton}
          </div>
        </div>
      </div>
      <div className={styles.email3}>
        <img className={styles.icon3} alt="" src={icon2} />
        <div className={styles.content2}>
          <div className={styles.languages}>{languages}</div>
          <div
            className={styles.kazakhEnglishRussian}
            style={kazakhEnglishRussian1Style}
          >
            {kazakhEnglishRussian}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalDetails1;
