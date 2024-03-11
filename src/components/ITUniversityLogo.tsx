import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ITUniversityLogo.module.css";

export type ITUniversityLogoType = {
  users?: string;
  network?: string;
  users1?: string;
  network1?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propPadding?: CSSProperties["padding"];
};

const ITUniversityLogo: FunctionComponent<ITUniversityLogoType> = ({
  users,
  network,
  users1,
  network1,
  propLeft,
  propPadding,
}) => {
  const networkStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const disable2Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={styles.iTUniversityLogo}>
      <div className={styles.active}>
        <div className={styles.activeChild} />
        <div className={styles.activeItem} />
        <img className={styles.usersIcon} alt="" src={users} />
        <div className={styles.network} style={networkStyle}>
          {network}
        </div>
      </div>
      <div className={styles.disable} style={disable2Style}>
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

export default ITUniversityLogo;
