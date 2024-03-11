import { FunctionComponent } from "react";
import FrameNav from "../components/FrameNav";
import Footer2 from "../components/Footer2";
import styles from "./Notices.module.css";
import Navigation1 from "../components/Navigation1";
const Notices: FunctionComponent = () => {
  return (
    <div>
      <Navigation1/>
    <div className={styles.notices}>
      <div className={styles.columns}>
        <div className={styles.main} />
        <div className={styles.sidebar} />
      </div>
      <FrameNav />
      <Footer2 />
    </div>
    </div>
  );
};

export default Notices;
