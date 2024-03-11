import { FunctionComponent } from "react";
import Items from "../components/Items";
import Profile from "../components/Profile";
import Other from "../components/Other";
import Photo from "../components/Photo";
import Footer1 from "../components/Footer1";
import styles from "./Network.module.css";
import Navigation1 from "../components/Navigation1";

const Network: FunctionComponent = () => {
  return (
    <div>
    <div >
    <Navigation1/>
  </div>
    <div className={styles.network}>
      <div className={styles.columns}>
        <div className={styles.main} />
        <div className={styles.sidebar} />
      </div>
    
      <Photo />
      <Footer1 />
    </div>
    </div>
  );
};

export default Network;
