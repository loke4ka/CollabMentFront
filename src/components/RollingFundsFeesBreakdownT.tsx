import { FunctionComponent } from "react";
import Signup from "./Signup";
import styles from "./RollingFundsFeesBreakdownT.module.css";

const RollingFundsFeesBreakdownT: FunctionComponent = () => {
  return (
    <div className={styles.rollingFundsFeesBreakdownT}>
      <Signup
        step1="Step 2"
        create="Search"
        registrationAndProfileCre="Partner Search: Utilize powerful search tools to find startups or investors aligning with your goals and interests."
        propBackgroundColor="#f98e73"
      />
      <div className={styles.div} />
    </div>
  );
};

export default RollingFundsFeesBreakdownT;
