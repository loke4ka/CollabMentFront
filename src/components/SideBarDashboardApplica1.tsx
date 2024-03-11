import { FunctionComponent, useEffect, useState } from "react";
import styles from "./SideBarDashboardApplica1.module.css";
import Profile from "./Profile";

const username = localStorage.getItem('username');

const API_URL = 'http://127.0.0.1:8000/api/user/profile';
const Url = 'http://127.0.0.1:8000/';

interface UserData {
  first_name: string;
  last_name: string;
  email: string;
}

interface ProfileData {
  profile_photo: string;
}

const SideBarDashboardApplica1: FunctionComponent = () => {

  const [userData, setUserData] = useState<UserData | null>(null);
  const [profileData, setProfileData] = useState<ProfileData | null>(null);


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

const getProfileData = async (username: any) => {
  try {
      const response = await fetch(`${API_URL}/?username=${username}`);
      if (response.ok) {
          const profileData = await response.json();
          return profileData;
      } else {
          console.error('Failed to fetch profile data:', response.status);
          return null;
      }
  } catch (error) {
      console.error('Error fetching profile data:', error);
      return null;
  }
};

useEffect(() => {
  async function fetchData() {
    const userData = await getUserData(username);
    const profileData = await getProfileData(username);
    setUserData(userData);
    setProfileData(profileData);
  }
  fetchData();
}, []);
  

  return (
    <div className={styles.sideBarDashboardApplica}>
      <div className={styles.textfieldDesiredposition}>
        <div className={styles.dropdownTypeofwork}>
          <div className={styles.lineSeparator}>
            <img
              className={styles.tablersteamIcon}
              loading="eager"
              alt=""
              src="/tablersteam2.svg"
            />
            <h3 className={styles.collabment}>Collabment</h3>
          </div>
        </div>
        <div className={styles.iconInput}>
          <div className={styles.frameWorkExperience}>
            <img
              className={styles.icon}
              loading="eager"
              alt=""
              src="/icon.svg"
            />
            <div className={styles.dashboard}>Dashboard</div>
          </div>
          <div className={styles.frameWorkExperience1}>
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
          <div className={styles.personalDetails}>
            <div className={styles.frameContacts}>
              <div className={styles.rowTextfieldLocation}>
                <img
                  className={styles.phosphorIconsBriefcase}
                  alt=""
                  src="/phosphor-icons--briefcase.svg"
                />
                <div className={styles.appliedJobs}>Applied Jobs</div>
              </div>
            </div>
            <div className={styles.frameContacts1}>
              <div className={styles.iconParent}>
                <img className={styles.icon1} alt="" src="/icon-1.svg" />
                <input
                  className={styles.myPublicProfile}
                  placeholder="My Public Profile"
                  type="text"
                />
              </div>
            </div>
            <div className={styles.iconKazakhstan} />
          </div>
        </div>
      </div>
      <div className={styles.framePersonalqualities}>
        <div className={styles.settings}>SETTINGS</div>
      </div>
      <div className={styles.frameContent}>
        <button className={styles.menu}>
          <div className={styles.sidebarMenu}>
            <img className={styles.indicatorIcon} alt="" src="/indicator.svg" />
            <div className={styles.menu1}>
              <img className={styles.icon2} alt="" src="/icon-2.svg" />
              <div className={styles.settings1}>Settings</div>
            </div>
          </div>
        </button>
        <div className={styles.desiredPositionTextField}>
          <div className={styles.typeOfWorkDropdown}>
            <img
              className={styles.icon3}
              loading="eager"
              alt=""
              src="/icon-3.svg"
            />
            <div className={styles.logout}>Logout</div>
          </div>
        </div>
      </div>
      <img className={styles.patternIcon} alt="" src="/pattern.svg" />
      <div className={styles.profileMenu}>
        <div className={styles.roundedRectangle} />
        <div className={styles.frame}>
          <div className={styles.logout1}>
            <div className={styles.logout2}>Logout</div>
            <img className={styles.icon4} alt="" src="/icon-4.svg" />
          </div>
        </div>
      </div>
      <div className={styles.textfieldWorkExpParent}>
        <div className={styles.textfieldWorkExp} />
        <div className={styles.frameWrapper}>
          <div className={styles.personalQualitiesBoxParent}>


            <div className={styles.personalQualitiesBox}> <img className={styles.personalQualitiesBox} alt="" src={Url + profileData?.profile_photo}></img>  </div>
            <div className={styles.frameBio}>
              <div className={styles.certificatesFrame}>
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

export default SideBarDashboardApplica1;
