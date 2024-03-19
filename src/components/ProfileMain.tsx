import { FunctionComponent, useEffect, useState } from "react";
import AdditionalDetails from "./AdditionalDetails";
import styles from "./ProfileMain.module.css";
import { Link, redirect, useNavigation } from 'react-router-dom';
import axios from "axios";


const API_URL = 'https://loke4ka.pythonanywhere.com/api/user/profile';
const Url = 'https://loke4ka.pythonanywhere.com/';

const UrlToView = 'http://127.0.0.1:8000/api'

interface UserData {
  username: string;
  phone_number?: string;
  email?: string;
  first_name?: string;
  last_name?: string;
  birthday?: string;
  gender?: string;
  user_type?: string;
}

interface userPofileData {
  profile_photo?: string;
  city?: string;
  citizenship?: string;
  desired_position?: string;
}

interface guestUserProps {
  username: string;
}

const AyaGazizova: FunctionComponent<guestUserProps> = ({ username }) => {



  const [userData, setUserData] = useState<UserData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [userPofileData, setUserPofileData] = useState<userPofileData | null>(null);
  const viewerUsername = localStorage.getItem('username'); 

  useEffect(() => {
    const increaseProfileView = async () => {

      try {
          await axios.post(UrlToView + '/profile/view/increase/', {
              viewed_profile_username: username, // Передаем username того, чей профиль просматриваем
              viewer_username: viewerUsername // Передаем username того, кто просматривает профиль 
          });

          console.log('Profile view increased successfully');
      } catch (error) {
          console.error('Error increasing profile view:', error);
      }
  };
  increaseProfileView();

}, [username]);

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

const getUserProfileData = async (username: string) => {
  try {
    const response = await fetch(`${API_URL}/?username=${username}`);
    if (response.ok) {
      const userData = await response.json();
      return userData;
    } else {
      throw new Error(`Failed to fetch user data: ${response.status}`);
    }
  } catch (error : any) {
    setError(error.message);
  }
};
  

useEffect(() => {
 

  const fetchData = async () => {
      const userDataLocal = await getUserData(username);
      const userPofileData = await getUserProfileData(username);
      if (userDataLocal) {
          setUserData(userDataLocal);
      }
      if (userPofileData) {
          setUserPofileData(userPofileData);
      }
      console.log(userData);
      console.log(userPofileData);
  };

  if (username) {
      fetchData();
  }
}, []); 

if (error) {
  return (
    <div className="error-message">
      <p>{error}</p>
    </div>
  );
}

if (!userData) {
  return (
    <div className="loading-message">
      <p>Loading...</p>
    </div>
  );
}

  return (
    <section className={styles.ayaGazizova}>
      <div className={styles.excitingNews}>
        <div className={styles.commentRetweetLikeShare}>
          <div className={styles.statisticsFrame}>
            <div className={styles.statisticsFrameChild} />
            <div className={styles.ellipse} />
            <div className={styles.frameComment}>
              {/* <div className={styles.retweetFrame}>
                <div className={styles.editProfile}>Edit profile</div>
              </div> */}
              <div className={styles.shareFrame}>
                <div className={styles.rectangleQuestionsHelp}>
                  <img
                    className={styles.rectangleQuestionsHelpChild}
                    alt=""
                    src="/rectangle-13@2x.png"
                  />
                  {/* <img
                    className={styles.navigationFrameIcon}
                    alt=""
                    src="/navigation-frame.svg"
                  /> */}
                </div>

                {userPofileData ? (
                    <div className={styles.userInfo}>
                        {userPofileData.profile_photo ? (
                            <img src={`${Url}${userPofileData.profile_photo}`} alt="User Avatar" className={styles.userAvatar} />
                        ) : (
                            <div className={styles.talentMarketingSalesCommuni} />
                        )}
                    </div>
                    ) : (
                        <div className={styles.userInfo}>
                            <div className={styles.talentMarketingSalesCommuni} />
                        </div>
                    )}

                {/* <div className={styles.talentMarketingSalesCommuni} /> */}

              </div>
            </div>
            <div className={styles.fastAccessFrame}>
              <div className={styles.languageFrame}>
                <div className={styles.tablersteam}>
                  <h1 className={styles.ayaGazizova1}>{userData?.first_name} {userData?.last_name}</h1>
                  <div className={styles.ayaGazizova2}>@{username}</div>
                </div>
                <div className={styles.additionalDetailsButton}>
                  <h3 className={styles.uxuiDesigner}>{userPofileData?.desired_position}</h3>
                  <div className={styles.emailIconContent}>
                    <div className={styles.emailIconContent1}>
                      <div className={styles.groupFrameEllipse}>
                        <div className={styles.frameAboutPosts}>
                          <img
                            className={styles.commentRetweetLikeShareSta}
                            alt=""
                            src="/frame-1.svg"
                          />
                          <h3 className={styles.almatyKazakhstan}>
                            {userPofileData?.citizenship} {userPofileData?.city}
                            {/* Almaty, Kazakhstan */}
                          </h3>
                        </div>
                        <div className={styles.footerNavigationRectangleSe}>
                          <h3 className={styles.following}>
                            <span>
                              <b>0</b>
                            </span>
                            <span className={styles.following1}>
                              <span>{` `}</span>
                              <span>Following</span>
                            </span>
                          </h3>
                          <h3 className={styles.followers}>
                            <span>
                              <b>0</b>
                            </span>
                            <span className={styles.followers1}>
                              <span>{` `}</span>
                              <span>Followers</span>
                            </span>
                          </h3>
                        </div>
                      </div>
                    </div>
                    {/* November 24, 2000 */}
                    <div className={styles.text} style={{ display: 'flex', alignItems: 'center'}}>
                            <img
                              className={styles.frameIcon1}
                              alt=""
                              src="/frame-11.svg"
                            />
                           <div className={styles.bornNovember24}>
                      Born [{userData.birthday}]
                    </div>
                  </div>
                    
                  </div>
                </div>
                <div className={styles.tablersteamLogoCollInstance}>
                  {/* <button className={styles.button}>
                    <div className={styles.child} />
                    <div className={styles.toSetUp}>To set up a contact</div>
                  </button> */}
                  <a href="/chat">
                  <button className={styles.button1}>
                    <div className={styles.item} />
                    <div className={styles.sendAMessage}>Send a message</div>
                  </button>
                  </a>
                </div>
                <div className={styles.languageFrameInner}>
                  <div className={styles.aboutParent}>
                    <Link to={"/profileAbout/" + username}><h3 className={styles.about}>About</h3></Link>
                    <h3 className={styles.posts}>Posts</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* "+7 777 077 75 77" */}
          <div className={styles.applicantDashboardContact}>
            <AdditionalDetails
              additionalDetails="Additional Details"
              icon="/icon-11.svg"
              email="Email"

              gazizovaemailcom = {userData?.email}

              icon1="/icon-21.svg"
              phone="Phone"
              website= {userData?.phone_number}
              icon2="/icon-31.svg"
              languages="Languages"
              kazakhEnglishRussian="Kazakh, English, Russian "
            />
            <AdditionalDetails
              additionalDetails="Social Links"
              icon="/icon-51.svg"
              email="Instagram"
              gazizovaemailcom="test.com"
              icon1="/icon-6.svg"
              phone="Twitter"
              website="test.com"
              icon2="/icon-71.svg"
              languages="Website"
              kazakhEnglishRussian="test/com"
              propBorderRadius="unset"
              propColor="#4640de"
              propColor1="#4640de"
              propColor2="#4640de"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default AyaGazizova;
