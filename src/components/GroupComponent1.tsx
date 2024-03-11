import { FunctionComponent } from "react";
import styles from "./GroupComponent1.module.css";

export type GroupComponent1Type = {
  userName?: string;
  userName1?: string;
};

const GroupComponent1: FunctionComponent<GroupComponent1Type> = ({
  userName,
  userName1,
}) => {
  return (
    <div className={styles.userNameParent}>
      <div className={styles.userName}>{userName}</div>
      <input className={styles.communityFrame} type="text" />
      <div className={styles.userName1}>{userName1}</div>
    </div>
  );
};

export default GroupComponent1;
