import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GroupComponent2.module.css";

export type GroupComponent2Type = {
  enterYourUsernameOrEmailA?: string;
  usernameOrEmailAddress?: string;

  propBorder?: CSSProperties["border"];
  propWidth?: CSSProperties["width"];
  propDisplay?: CSSProperties["display"];
};

const GroupComponent2: FunctionComponent<GroupComponent2Type> = ({
  enterYourUsernameOrEmailA,
  usernameOrEmailAddress,
  propBorder,
  propWidth,
  propDisplay,
}) => {
  const inputRectangleStyle: CSSProperties = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  const usernameOrEmailStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      display: propDisplay,
    };
  }, [propWidth, propDisplay]);

  return (
    <div className={styles.enterYourUsernameOrEmailAParent}>
      <div className={styles.enterYourUsername}>
        {enterYourUsernameOrEmailA}
      </div>
      <input
        className={styles.inputRectangle}
        type="text"
        style={inputRectangleStyle}
      />
      <div className={styles.usernameOrEmail} style={usernameOrEmailStyle}>
        {usernameOrEmailAddress}
      </div>
    </div>
  );
};

export default GroupComponent2;
