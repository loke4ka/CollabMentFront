import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ProjectTitle.module.css";

export type ProjectTitleType = {
  users?: string;
  network?: string;
  users1?: string;
  network1?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propPadding?: CSSProperties["padding"];
};

const ProjectTitle: FunctionComponent<ProjectTitleType> = ({
  users,
  network,
  users1,
  network1,
  propLeft,
  propPadding,
}) => {
  const network1Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const disable5Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={styles.projectTitle}>
      <div className={styles.active}>
        <div className={styles.activeChild} />
        <div className={styles.activeItem} />
        <img className={styles.usersIcon} alt="" src={users} />
        <div className={styles.network} style={network1Style}>
          {network}
        </div>
      </div>
      <div className={styles.disable} style={disable5Style}>
        <div className={styles.disableChild} />
        <img
          className={styles.usersIcon1}
          loading="eager"
          alt=""
          src={users1}
        />
        <div className={styles.network1}>{network1}</div>
      </div>
    </div>
  );
};

export default ProjectTitle;
