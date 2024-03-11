import { FunctionComponent, useEffect, useState } from "react";
import styles from "./NewArticle.module.css";


const username = localStorage.getItem('username');
const Url = 'http://127.0.0.1:8000/';

const API_URL = 'http://127.0.0.1:8000/api/user/profile';

interface userData{
  username: string;
  profile_photo?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  phone_number?: string;
  birthday?: string;
  gender?: string;
  user_type?: string;
}


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

const NewArticle: FunctionComponent = () => {

  const [userData, setUserData] = useState<userData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUserData(username);
      setUserData(userData);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.newArticle}>
      <div className={styles.profile}>
        <div className={styles.profileChild} />
        <div className={styles.rectangle}>
          <img
            className={styles.ellipseIcon}
            alt=""
            src="/rectangle-3-1@2x.png"
          />
          <img
            className={styles.groupIcon}
            style={{marginLeft: "0px"}}
            loading="eager"
            alt=""
            src={Url + localStorage.getItem('profile_photo')}
          />
        </div>
        <div className={styles.editList}>
          <div className={styles.group}>
            <div className={styles.ayaGaziziova}>
              <b className={styles.ayaGaziziova1}>{userData?.first_name} {userData?.last_name}</b>
            </div>
            <div className={styles.freelanceUxuiDesignerContainer}>
              <p
                className={styles.freelanceUxuiDesigner}
              >{`Freelance UX/UI designer, 80+ projects `}</p>
              <p
                className={styles.inWebDesign}
              >{`in web design, mobile apps (iOS & android) and creative projects. Open to offers.`}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.newArticle1}>
        <div className={styles.newArticleChild} />
        <button className={styles.button}>
          <div className={styles.child} />
          <div className={styles.writeNewArticle}>write new article</div>
        </button>
      </div>
      <div className={styles.myGroups}>
        <div className={styles.myGroupsChild} />
        <div className={styles.myGroupsFrame}>
          <div className={styles.editListFrame}>
            <div className={styles.myGroups1}>my groups</div>
            <div className={styles.editList1}>Edit list</div>
          </div>
          <div className={styles.digitalfreelancersgroup}>
            <div className={styles.interactiondesignassociation} />
            <div className={styles.iTTechnologiesUniversity}>
              <button className={styles.itTechnologiesUniversityParent}>
                <b className={styles.itTechnologiesUniversity}>
                  IT Technologies University
                </b>
                <div className={styles.extParent}>
                  <div className={styles.ext} />
                  <img
                    className={styles.groupIcon1}
                    alt=""
                    src="/group1@2x.png"
                  />
                </div>
              </button>
              <div className={styles.extGroup}>
                <div className={styles.ext1} />
                <img
                  className={styles.groupIcon2}
                  loading="eager"
                  alt=""
                  src="/group-1@2x.png"
                />
                <b className={styles.digitalFreelancersGroupContainer}>
                  <p className={styles.digitalFreelancers}>
                    Digital freelancers
                  </p>
                  <p className={styles.group1}>group</p>
                </b>
              </div>
              <div className={styles.extContainer}>
                <div className={styles.ext2} />
                <img
                  className={styles.groupIcon3}
                  loading="eager"
                  alt=""
                  src="/group-2@2x.png"
                />
                <b className={styles.interactionDesignAssociationContainer}>
                  <p className={styles.interaction}>Interaction</p>
                  <p className={styles.design}>design</p>
                  <p className={styles.association}>association</p>
                </b>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.showAll8}>Show all (8)</div>
      </div>
      <div className={styles.hashtags}>
        <div className={styles.hashtagsChild} />
        <div className={styles.hashtagCloud}>
          <div className={styles.followedHashtags}>Followed hashtags</div>
        </div>
        <div className={styles.line} />
        <div className={styles.teamCollaboration}>
          <div className={styles.inspiringDesignersCorner}>
            <div className={styles.groupParent}>
              <button className={styles.group2}>
                <div className={styles.groupChild} />
                <div className={styles.work}>#work</div>
              </button>
              <button className={styles.group3}>
                <div className={styles.groupItem} />
                <div className={styles.business}>#business</div>
              </button>
              <button className={styles.group4}>
                <div className={styles.groupInner} />
                <div className={styles.hr}>#hr</div>
              </button>
            </div>
            <div className={styles.groupOfGroups}>
              <button className={styles.group5}>
                <div className={styles.rectangleDiv} />
                <div className={styles.userinterface}>#userinterface</div>
              </button>
              <button className={styles.group6}>
                <div className={styles.groupChild1} />
                <div className={styles.digital}>#digital</div>
              </button>
            </div>
            <div className={styles.groupOfGroups1}>
              <button className={styles.group7}>
                <div className={styles.groupChild2} />
                <div className={styles.userexperience}>#userexperience</div>
              </button>
              <button className={styles.group8}>
                <div className={styles.groupChild3} />
                <div className={styles.ux}>#ux</div>
              </button>
            </div>
            <div className={styles.groupOfGroups2}>
              <button className={styles.group9}>
                <div className={styles.groupChild4} />
                <div className={styles.ui}>#ui</div>
              </button>
              <button className={styles.group10}>
                <div className={styles.groupChild5} />
                <div className={styles.freelance}>#freelance</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.articles}>
        <div className={styles.articlesChild} />
        <div className={styles.trendingArticlesWrapper}>
          <div className={styles.trendingArticles}>Trending articles</div>
        </div>
        <div className={styles.line1} />
        <div className={styles.creativeInspiration}>
          <div className={styles.group11}>
            <div className={styles.groupGroup}>
              <img
                className={styles.groupIcon4}
                loading="eager"
                alt=""
                src="/group-3@2x.png"
              />
              <div className={styles.groupAdvice}>
                <b className={styles.howIMakeContainer}>
                  <p className={styles.howIMake}>How I make</p>
                  <p className={styles.coolDesigns}>cool designs?</p>
                </b>
                <div className={styles.viewers}>6,340 viewers</div>
              </div>
            </div>
            <div className={styles.groupContainer}>
              <img
                className={styles.groupIcon5}
                loading="eager"
                alt=""
                src="/group-4@2x.png"
              />
              <div className={styles.advicesForYoungHrManageParent}>
                <b className={styles.advicesForYoungContainer}>
                  <p className={styles.advicesFor}>Advices for</p>
                  <p className={styles.youngHrManage}>young HR-manage</p>
                </b>
                <div className={styles.viewers1}>8,123 viewers</div>
              </div>
            </div>
            <div className={styles.groupDiv}>
              <img
                className={styles.groupIcon6}
                loading="eager"
                alt=""
                src="/group-5@2x.png"
              />
              <div className={styles.aLittleAboutUsabilityTestiParent}>
                <b className={styles.aLittleAboutContainer}>
                  <p className={styles.aLittleAbout}>A little about</p>
                  <p className={styles.usabilityTesting}>usability testing</p>
                </b>
                <div className={styles.viewers2}>3,912 viewers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArticle;
