import { FunctionComponent } from "react";
import FooterInstance from "../components/FooterInstance";
import Footer5 from "../components/Footer5";
import styles from "./Chat.module.css";
import Navigation1 from "../components/Navigation1";

const Chat: FunctionComponent = () => {
  return (
    <div>
    <Navigation1 />
    <div className={styles.chat}>
      <div className={styles.columns}>
        <div className={styles.main} />
        <div className={styles.sidebar} />
      </div>
      <FooterInstance />
      <Footer5 />
    </div>
    </div>
  );
};

export default Chat;
