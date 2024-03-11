import { FunctionComponent } from "react";
import Navigation1 from "../components/Navigation1";
import AyaGazizova from "../components/ProfileMain";
import Footer from "../components/Footer";
import styles from "./ProfilePage.module.css";
import { useParams } from "react-router-dom"; 

const ProfilePage: FunctionComponent = () => {

  const { username } = useParams<{ username: string }>();


  return (
    <div className={styles.profilePage}>
      <div className={styles.columns}>
        <div className={styles.main} />
        <div className={styles.sidebar} />
      </div>
      <main className={styles.group}>
        <Navigation1 />
        <AyaGazizova username={username || ''} />
      </main>
      <div className={styles.profilePageChild} />
      <Footer />
    </div>
  );
};

export default ProfilePage;
