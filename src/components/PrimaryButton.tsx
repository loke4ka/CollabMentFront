import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./PrimaryButton.module.css";

export type PrimaryButtonType = {
  name1?: string;
  johnCarterPlaceholder?: string;
  group41?: string;
  phoneNumber?: string;
  groupPlaceholder?: string;
  group?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
  propPadding1?: CSSProperties["padding"];
  propWidth1?: CSSProperties["width"];
};

const PrimaryButton: FunctionComponent<PrimaryButtonType> = ({
  name1,
  johnCarterPlaceholder,
  group41,
  phoneNumber,
  groupPlaceholder,
  group,
  propPadding,
  propWidth,
  propHeight,
  propPadding1,
  propWidth1,
}) => {
  const johnCarterStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const johnCarter1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const groupIconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const companyNameStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const groupStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className={styles.primaryButton}>
      <div className={styles.formInput}>
        <div className={styles.name}>{name1}</div>
        <div className={styles.johnCarter} style={johnCarterStyle}>
          <div className={styles.johnCarterChild} />
          <input
            className={styles.johnCarter1}
            placeholder={johnCarterPlaceholder}
            type="text"
            style={johnCarter1Style}
          />
          <img
            className={styles.johnCarterItem}
            alt=""
            src={group41}
            style={groupIconStyle}
          />
        </div>
      </div>
      <div className={styles.phoneNumberCompany}>
        <div className={styles.phoneNumber}>{phoneNumber}</div>
        <div className={styles.companyName} style={companyNameStyle}>
          <div className={styles.companyNameChild} />
          <input
            className={styles.group}
            placeholder={groupPlaceholder}
            type="text"
            style={groupStyle}
          />
          <img className={styles.groupIcon} alt="" src={group} />
        </div>
      </div>
    </div>
  );
};

export default PrimaryButton;
