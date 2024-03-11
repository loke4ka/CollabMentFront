import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./AdditionalDetails.module.css";

export type AdditionalDetailsType = {
  additionalDetails?: string;
  icon?: string;
  email?: string;
  gazizovaemailcom?: string;
  icon1?: string;
  phone?: string;
  website?: string;
  icon2?: string;
  languages?: string;
  kazakhEnglishRussian?: string;

  /** Style props */
  propBorderRadius?: CSSProperties["borderRadius"];
  propColor?: CSSProperties["color"];
  propColor1?: CSSProperties["color"];
  propColor2?: CSSProperties["color"];
};

const AdditionalDetails: FunctionComponent<AdditionalDetailsType> = ({
  additionalDetails,
  icon,
  email,
  gazizovaemailcom,
  icon1,
  phone,
  website,
  icon2,
  languages,
  kazakhEnglishRussian,
  propBorderRadius,
  propColor,
  propColor1,
  propColor2,
}) => {
  const additionalDetailsStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  const gazizovaemailcomStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const websiteStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const kazakhEnglishRussianStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  return (
    <div className={styles.additionalDetails} style={additionalDetailsStyle}>
      <div className={styles.additionalDetailsParent}>
        <h2 className={styles.additionalDetails1}>{additionalDetails}</h2>
        <div className={styles.button}>
          <img className={styles.icon} src="/edit1.png" />
        </div>
      </div>
      <div className={styles.email}>
        <img className={styles.icon1} alt="" src={icon} />
        <div className={styles.content}>
          <div className={styles.email1}>{email}</div>
          <div
            className={styles.gazizovaemailcom}
            style={gazizovaemailcomStyle}
          >
            {gazizovaemailcom}
          </div>
        </div>
      </div>
      <div className={styles.email2}>
        <img className={styles.icon2} alt="" src={icon1} />
        <div className={styles.content1}>
          <div className={styles.phone}>{phone}</div>
          <div className={styles.website} style={websiteStyle}>
            {website}
          </div>
        </div>
      </div>
      <div className={styles.email3}>
        <img className={styles.icon3} alt="" src={icon2} />
        <div className={styles.content2}>
          <div className={styles.languages}>{languages}</div>
          <div
            className={styles.kazakhEnglishRussian}
            style={kazakhEnglishRussianStyle}
          >
            {kazakhEnglishRussian}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalDetails;
