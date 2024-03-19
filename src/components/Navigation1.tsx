import { FunctionComponent, useEffect, useState } from "react";
import styles from "./Navigation1.module.css";
import stylesAnimation from "../components/globalAnimations.module.css";

import { Link } from 'react-router-dom';

interface UserData {
  username: string;
  profile_photo?: string;
}

const API_URL = 'https://loke4ka.pythonanywhere.com/api/user/profile';
const Url = 'https://loke4ka.pythonanywhere.com/';

const Navigation1: FunctionComponent = () => {

  const [userData, setUserData] = useState<UserData | null>(null);
  const usernameLocal = localStorage.getItem('username');

  const [img, setImg] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
    
        const response = await fetch(`${API_URL}/?username=${usernameLocal}`);
        if (response.ok) {
          // console.log('Response from server:', response);
          const data = await response.json();
          setUserData(data);
          localStorage.setItem('userData', JSON.stringify(data));
          
          localStorage.setItem('profile_photo', data.profile_photo);
        } else {
          // Обработка ошибок
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <header className={styles.navigation}>
      <div className={styles.navigation1}>
        <div className={styles.base} />
        <div className={styles.logoZone}>
          <div className={styles.base1} />
          <div className={styles.frame} />
        </div>
        <div className={styles.rectangle}>
          <div className={styles.logoColl}>
          <a href="/" className={stylesAnimation.ProfileLink} style={{alignContent: "center", justifyContent: "center"}}>
            <div className={styles.excitingNews}>
              <img
                className={styles.tablersteamIcon}
                style={{alignContent: "center", justifyContent: "center", marginLeft: "10px"}}
                loading="eager"
                alt=""
                src="/tablersteam1.svg"
              />
            </div>
            <b className={styles.collabment}>COLLABMENT</b>
            </a>
          </div>
         
        </div>
        <div className={styles.like}>
          <div className={styles.items}>
            <div className={styles.statistics}>
              <Link to="/feed" className={stylesAnimation.NavLink}>
              <div className={styles.active}>
                <div className={styles.activeChild} />
                <div className={styles.activeItem} />
                <img className={styles.rssIcon} alt="" src="/rss.svg" />
                <div className={styles.feed}>feed</div>
              </div>
              </Link>

              <Link to="/feed" className={stylesAnimation.NavLink}>
              <div className={styles.disable}>

                <div className={styles.disableChild} />
                <img className={styles.rssIcon1} alt="" src="/rss-1.svg" />
                <div className={styles.feed1}>feed</div>
              </div>
              </Link>

            </div>
            <div className={styles.statistics1}>
            <Link to="/network" className={stylesAnimation.NavLink}>

              <div className={styles.active1}>
                <div className={styles.activeInner} />
                <div className={styles.rectangleDiv} />
                <img className={styles.usersIcon} alt="" src="/users.svg" />
                <div className={styles.network}>Network</div>
              </div>
              </Link>
              <Link to="/network" className={stylesAnimation.NavLink}>
              <div className={styles.disable1}>
                <div className={styles.disableItem} />
                <img className={styles.usersIcon1} alt="" src="/users-1.svg" />
                <div className={styles.network1}>Network</div>
              </div>
              </Link>
            </div>
            {/* <div className={styles.statistics2}>
            <Link to="/network" className={stylesAnimation.NavLink}>
              <div className={styles.active2}>
                <div className={styles.activeChild1} />
                <div className={styles.activeChild2} />
                <img
                  className={styles.briefcaseIcon}
                  alt=""
                  src="/briefcase.svg"
                />
                <div className={styles.jobs}>jobs</div>
              </div>
              </Link>
              <Link to="/network" className={stylesAnimation.NavLink}>

              <div className={styles.disable2}>
                <div className={styles.disableInner} />
                <img
                  className={styles.briefcaseIcon1}
                  alt=""
                  src="/briefcase-1.svg"
                />
                <div className={styles.jobs1}>jobs</div>
              </div>
              </Link>
            </div> */}
            <div className={styles.statistics3}>
            <Link to="/chat" className={stylesAnimation.NavLink}>

              <div className={styles.disable3}>
                <div className={styles.disableChild1} />
                <img
                  className={styles.messageSquareIcon}
                  loading="eager"
                  alt=""
                  src="/messagesquare.svg"
                />
                <div className={styles.chat}>chat</div>
              </div>
              </Link>
              <Link to="/chat" className={stylesAnimation.NavLink}>

              <div className={styles.active3}>
                <div className={styles.activeChild3} />
                <div className={styles.activeChild4} />
                <img
                  className={styles.messageSquareIcon1}
                  alt=""
                  src="/messagesquare-1.svg"
                />
                <div className={styles.chat1}>chat</div>
              </div>
              </Link>
              <div className={styles.count}>
                <div className={styles.rectangle1} />
                <b className={styles.b}>1</b>
              </div>
            </div>
            <div className={styles.statistics4}>
            <Link to="/notices" className={stylesAnimation.NavLink}>

              <div className={styles.disable4}>
                <div className={styles.disableChild2} />
                <img
                  className={styles.bellIcon}
                  loading="eager"
                  alt=""
                  src="/bell.svg"
                />
                <div className={styles.notices}>notices</div>
              </div>
              </Link>
              <Link to="/notices" className={stylesAnimation.NavLink}>
              <div className={styles.active4}>
                <div className={styles.activeChild5} />
                <div className={styles.activeChild6} />
                <img className={styles.bellIcon1} alt="" src="/bell-1.svg" />
                <div className={styles.notices1}>notices</div>
              </div>
              </Link>
            </div>
          </div>
        </div>
        {/* <div className={styles.language}>
          <div className={styles.search}>
            <button className={styles.frameAboutPosts}>
              <div className={styles.additionalDetailsButton} />
              <img className={styles.searchIcon} alt="" src="/search.svg" />
              <div className={styles.emailInstagram}>
                <div className={styles.search1}>Search</div>
              </div>
            </button>
            <div className={styles.languagesWebsite} />
          </div>
        </div> */}
        <div className={styles.profileWrapper}>
          <div className={styles.profile}>
            <div className={styles.profileChild} />
            <div className={styles.footerNavigation}>
              <div className={styles.rectangleFastaccess} />
            </div>
            <div className={styles.framecommentretweetlikesharest}>


            {userData ? (
              <div className={styles.userInfo}>
                  {userData.profile_photo ? (
                      <img src={`${Url}${userData.profile_photo}`} alt="User Avatar" className={styles.userAvatar} />
                  ) : (
                      <div className={styles.retweetFrame} />
                  )}
              </div>
              ) : (
                  <div className={styles.userInfo}>
                      <div className={styles.retweetFrame} />
                  </div>
              )}


              {/* <div className={styles.retweetFrame} /> */}

              
            </div>
            
            <div className={styles.likeFrame}>

              <div className={styles.shareFrame}>
                <Link to={"/profile/" + usernameLocal} className={stylesAnimation.ProfileLink}>
              {usernameLocal && (
                  <div className={styles.usernameContainer}>
                    <div className={styles.aGazizova}>{usernameLocal}</div>
                  </div>
                ) || (
                  <div className={styles.usernameContainer}>
                    {/* <div className={styles.aGazizova}>{usernameLocal}</div> */}
                  </div>
                )}
                  </Link>
                {/* <div className={styles.aGazizova}>A. Gazizova</div> */}
                <div className={styles.you}>YOU</div>
              </div>
            </div>
            
          </div>
        </div>
        <div className={styles.ayaGazizovaText}>
          <div className={styles.other}>
            <div className={styles.headerGroup} />
            <div className={styles.fastaccessQuestionshelpcircle} />
            <div className={styles.postFrame}>
              <div className={styles.postIcon}>
                <img
                  className={styles.moreHorizontalIcon}
                  alt=""
                  src="/morehorizontal.svg"
                />
                <Link to="/MyProfile" className={stylesAnimation.ProfileLink}><div className={styles.other1}>other</div></Link>
              </div>
            </div>
            <div className={styles.fastaccessQuestionshelpcircle1} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation1;
