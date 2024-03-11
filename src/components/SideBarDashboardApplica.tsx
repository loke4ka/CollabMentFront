import { FunctionComponent, useEffect, useState } from "react";
import styles from "./SideBarDashboardApplica.module.css";

const API_URL = 'http://127.0.0.1:8000/api/user/profile';

const Url = 'http://127.0.0.1:8000/';

const getProfileData = async (username: any) => {
  try {
      const response = await fetch(`${API_URL}/?username=${username}`);
      if (response.ok) {
          const profileData = await response.json();
          return profileData;
      } else {
          // Обработка ошибок
          console.error('Failed to fetch user data:', response.status);
          return null;
      }
  } catch (error) {
      console.error('Error fetching user data:', error);
      return null;
  }
};

const getUserData = async (username: any) => {
  try {
      const response = await fetch(`${API_URL}s/${username}/`);
      if (response.ok) {
          const userData = await response.json();
          return userData;
      } else {
          // Обработка ошибок
          console.error('Failed to fetch user data:', response.status);
          return null;
      }
  } catch (error) {
      console.error('Error fetching user data:', error);
      return null;
  }
};

const username = localStorage.getItem('username');

interface UserData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
}

interface ProfileData {
  profile_photo: string;
}

const SideBarDashboardApplica: FunctionComponent = () => {

  const [userData, setUserData] = useState<UserData | null>(null);
  const [profileData, setProfileData] = useState<ProfileData | null>(null);

  useEffect(() => {
    async function fetchData() {
      const userData = await getUserData(username);
      const profileData = await getProfileData(username);
      setUserData(userData);
      setProfileData(profileData);
    }
    fetchData();
  }, []);

  function logout(): void {
    localStorage.clear();
    window.location.href = "/login-register";
  }

  return (
    <div className={styles.sideBarDashboardApplica}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.tablersteamParent}>
            <img
              className={styles.tablersteamIcon}
              loading="eager"
              alt=""
              src="/tablersteam2.svg"
            />
            <h3 className={styles.collabment}>Collabment</h3>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.iconParent}>
            <img
              className={styles.icon}
              loading="eager"
              alt=""
              src="/icon.svg"
            />
            <div className={styles.dashboard}>Dashboard</div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.featherIconsBookmarkParent}>
              <img
                className={styles.featherIconsBookmark}
                loading="eager"
                alt=""
                src="/feather-icons--bookmark.svg"
              />
              <div className={styles.favoriteJobs}>Favorite Jobs</div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.phosphorIconsBriefcaseParent}>
              <img
                className={styles.phosphorIconsBriefcase}
                loading="eager"
                alt=""
                src="/phosphor-icons--briefcase.svg"
              />
              <div className={styles.appliedJobs}>Applied Jobs</div>
            </div>
          </div>
          <div className={styles.line}>
            <div className={styles.textWrapper}>
              <div className={styles.text}>
                <img className={styles.icon1} alt="" src="/icon-1.svg" />
                <div className={styles.myPublicProfile}>My Public Profile</div>
              </div>
            </div>
            <div className={styles.buttonText}>
              <div className={styles.rectangleShape} />
              <div className={styles.settingsWrapper}>
                <div className={styles.settings}>SETTINGS</div>
              </div>
            </div>
          </div>
          <div className={styles.mainmenuframe}>
            <button className={styles.menu}>
              <div className={styles.sidebarMenu}>
                <img
                  className={styles.indicatorIcon}
                  alt=""
                  src="/indicator.svg"
                />
                <div className={styles.menu1}>
                  <img className={styles.icon2} alt="" src="/icon-2.svg" />
                  <div className={styles.settings1}>Settings</div>
                </div>
              </div>
            </button>
            <div className={styles.mainmenuframeInner}>
              <div className={styles.iconGroup} onClick={() => logout()} style={{cursor: 'pointer'}}>
                <img className={styles.icon3} alt="" src="/icon-3.svg" />
                <div className={styles.logout}>Logout</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.patternIcon} alt="" src="/pattern.svg" />
      <div className={styles.profileMenu}>
        <div className={styles.roundedRectangle} />
        <div className={styles.frame}>
          <div className={styles.logout1} onClick={() => logout()} style={{cursor: 'pointer'}}>
            <div className={styles.logout2}>Logout</div>
            <img className={styles.icon4} alt="" src="/icon-4.svg" />
          </div>
        </div>
      </div>
      <div className={styles.topnavline}>
        <div className={styles.personalprofileframe} />
        <div className={styles.topnavframe}>
          <div className={styles.tabsframe}>
            <img
              className={styles.tabmenuinstanceIcon}
              loading="eager"
              alt=""
              src={Url + profileData?.profile_photo}
            />
            <div className={styles.personalinformationtext}>
              <div className={styles.inputforfullname}>
                <div className={styles.ayaGazizova}>{userData?.first_name} {userData?.last_name}</div>
              </div>
              <div className={styles.gazizovaemailcom}>{userData?.email}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBarDashboardApplica;
