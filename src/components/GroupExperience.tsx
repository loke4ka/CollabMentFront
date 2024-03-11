import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GroupExperience.module.css";

export type GroupExperienceType = {
  group?: string;
  freelanceUXUIDesigner?: string;
  selfEmployed?: string;
  aroundTheWorld?: string;
  jun2020Present?: string;
  yrs3Mos?: string;
  workWithClientsAndWebStud?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const GroupExperience: FunctionComponent<GroupExperienceType> = ({
  group,
  freelanceUXUIDesigner,
  selfEmployed,
  aroundTheWorld,
  jun2020Present,
  yrs3Mos,
  workWithClientsAndWebStud,
  propPadding,
}) => {
  const groupExperienceStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={styles.groupExperience}>
      <div className={styles.groupExperience1}>
        <div className={styles.groupExperience2}>
          <img
            className={styles.groupIcon}
            loading="eager"
            alt=""
            src={group}
          />
        </div>
        <div className={styles.groupExperience3}>
          <div className={styles.freelanceUxuiDesigner}>
            {freelanceUXUIDesigner}
          </div>
          <div className={styles.groupExperience4} style={groupExperienceStyle}>
            <div className={styles.groupExperience5}>
              <div className={styles.selfEmployed}>{selfEmployed}</div>
              <div className={styles.aroundTheWorld}>{aroundTheWorld}</div>
            </div>
            <div className={styles.aroundTheWorld1}>
              <div className={styles.jun2020}>{jun2020Present}</div>
              <div className={styles.yrs3Mos}>{yrs3Mos}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.experiencedSince}>
        <div className={styles.workWithClients}>
          {workWithClientsAndWebStud}
        </div>
      </div>
    </div>
  );
};

export default GroupExperience;
