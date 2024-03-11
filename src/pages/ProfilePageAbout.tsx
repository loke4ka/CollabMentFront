import { FunctionComponent } from "react";
import Navigation1 from "../components/Navigation1";
import GroupExperience from "../components/GroupExperience";
import AdditionalDetails1 from "../components/AdditionalDetails1";
import Footer4 from "../components/Footer4";
import styles from "./ProfilePageAbout.module.css";

const ProfilePageAbout: FunctionComponent = () => {
  return (
    <div className={styles.profilePageAbout}>
      <div className={styles.columns}>
        <div className={styles.main} />
        <div className={styles.sidebar} />
      </div>
      <main className={styles.frameAboutPosts}>
        <Navigation1 />
        <section className={styles.rightSidebar}>
          <div className={styles.mainContent}>
            <div className={styles.cardList}>
              <div className={styles.card}>
                <div className={styles.cardChild} />
                <div className={styles.aboutPostsSection} />
                <button className={styles.aboutPost}>
                  <div className={styles.editProfileWrapper}>
                    <div className={styles.editProfile}>Edit profile</div>
                  </div>
                  <div className={styles.applicantDashboardParent}>
                    <img
                      className={styles.applicantDashboardIcon}
                      alt=""
                      src="/rectangle-13@2x.png"
                    />
                    <div className={styles.fastAccessSection} />
                  </div>
                </button>
                <div className={styles.settings}>
                  <div className={styles.questions}>
                    <div className={styles.languageSelection}>
                      <h1 className={styles.ayaGazizova}>Aya Gazizova</h1>
                      <div className={styles.ayaGazizova1}>@aya_gazizova</div>
                    </div>
                    <div className={styles.headerGroup}>
                      <h3
                        className={styles.uxuiDesigner}
                      >{`UX&UI designer `}</h3>
                      <div className={styles.about}>
                        <div className={styles.posts}>
                          <div className={styles.postsInner}>
                            <div className={styles.frameParent}>
                              <img
                                className={styles.frameIcon}
                                loading="eager"
                                alt=""
                                src="/frame-1.svg"
                              />
                              <h3 className={styles.almatyKazakhstan}>
                                Almaty, Kazakhstan
                              </h3>
                            </div>
                          </div>
                          <div className={styles.text}>
                            <img
                              className={styles.frameIcon1}
                              alt=""
                              src="/frame-11.svg"
                            />
                            <div className={styles.bornNovember24}>
                              Born November 24, 2000
                            </div>
                          </div>
                        </div>
                        <div className={styles.followingParent}>
                          <h3 className={styles.following}>
                            <span>
                              <b>67</b>
                            </span>
                            <span className={styles.following1}>
                              <span>{` `}</span>
                              <span>Following</span>
                            </span>
                          </h3>
                          <h3 className={styles.followers}>
                            <span>
                              <b>47</b>
                            </span>
                            <span className={styles.followers1}>
                              <span>{` `}</span>
                              <span>Followers</span>
                            </span>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className={styles.icon}>
                      <button className={styles.email}>
                        <div className={styles.emailChild} />
                        <div className={styles.toSetUp}>
                          To set up a contact
                        </div>
                      </button>
                      <button className={styles.email1}>
                        <div className={styles.emailItem} />
                        <div className={styles.sendAMessage}>
                          Send a message
                        </div>
                      </button>
                    </div>
                    <div className={styles.questionsWrapper}>
                      <div className={styles.questions1}>
                        <h3 className={styles.about1}>About</h3>
                        <h3 className={styles.posts1}>Posts</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.phone}>
                <div className={styles.about2}>
                  <div className={styles.aboutChild} />
                  <div className={styles.aboutExperience}>
                    <h3 className={styles.about3}>About</h3>
                    <div
                      className={styles.imMoreExperienced}
                    >{`I'm more experienced in eCommerce web projects and mobile banking apps, but also like to work with creative projects, such as landing pages or unusual corporate websites. `}</div>
                  </div>
                  <div className={styles.seeMoreButton}>
                    <div className={styles.seeMore}>See more</div>
                  </div>
                </div>
              </div>
              <div className={styles.mainFrame}>
                <div className={styles.experience}>
                  <div className={styles.experienceChild} />
                  <div className={styles.freelanceTimeline}>
                    <h3 className={styles.experience1}>Experience</h3>
                  </div>
                  <GroupExperience
                    group="/group2.svg"
                    freelanceUXUIDesigner="Freelance UX/UI designer"
                    selfEmployed="Self Employed"
                    aroundTheWorld="Around the world"
                    jun2020Present="Jun 2020 — Present"
                    yrs3Mos="3 yrs 3 mos"
                    workWithClientsAndWebStud="Work with clients and web studios as freelancer.  Work in next areas: eCommerce web projects; creative landing pages; iOs and Android apps; corporate web sites and corporate identity sometimes."
                  />
                  <div className={styles.additionalSkills} />
                  <GroupExperience
                    group="/group-11@2x.png"
                    freelanceUXUIDesigner="UX/UI designer"
                    selfEmployed="Upwork"
                    aroundTheWorld="International"
                    jun2020Present="Jun 2023 — Present"
                    yrs3Mos="3 mos"
                    workWithClientsAndWebStud="New experience with Upwork system. Work in next areas: UX/UI design, graphic design, interaction design, UX research."
                    propPadding="0px var(--padding-12xs) 0px 0px"
                  />
                </div>
              </div>
              <div className={styles.portfolioGallery}>
                <div className={styles.experience2}>
                  <div className={styles.experienceItem} />
                  <div className={styles.clinicallyClinic}>
                    <h3 className={styles.education}>Education</h3>
                  </div>
                  <div className={styles.plannaProjectManagement}>
                    <div className={styles.funiroLandingPage}>
                      <div className={styles.applicantNavbar}>
                        <img
                          className={styles.groupIcon}
                          alt=""
                          src="/group-21@2x.png"
                        />
                      </div>
                      <div className={styles.salesSolutions}>
                        <div className={styles.communityGuides}>
                          <div className={styles.internationalInformationTech}>
                            International Information Technologies University
                          </div>
                          <div className={styles.bachelorsDegreeField}>
                            Bachelor's degree Field Of StudyComputer and
                            Information Systems/ Business Analysis
                          </div>
                        </div>
                        <div className={styles.div}>2020 — 2024</div>
                      </div>
                    </div>
                    <div className={styles.tablersteamLogo}>
                      <div className={styles.additionalEnglishClasses}>
                        Additional English classes and UX profile courses​.
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.applicantDashboardPortfoli}>
                  <h3 className={styles.certificatesAndAchievements}>
                    Certificates and achievements
                  </h3>
                  <div className={styles.porrfolioSlider}>
                    <div className={styles.list}>
                      <div className={styles.porrfolio1}>
                        <img
                          className={styles.image3Icon}
                          loading="eager"
                          alt=""
                          src="/image-3@2x.png"
                        />
                        <div
                          className={styles.clinicallyClinic1}
                        >{`Clinically - clinic & health care website`}</div>
                      </div>
                      <div className={styles.porrfolio2}>
                        <img
                          className={styles.image3Icon1}
                          alt=""
                          src="/image-3-1@2x.png"
                        />
                        <div
                          className={styles.growthlySaas}
                        >{`Growthly - SaaS Analytics & Sales Website`}</div>
                      </div>
                      <div className={styles.porrfolio3}>
                        <img
                          className={styles.image3Icon2}
                          alt=""
                          src="/image-3-2@2x.png"
                        />
                        <div className={styles.plannaProject}>
                          Planna - Project Management App
                        </div>
                      </div>
                      <div className={styles.porrfolio4}>
                        <img
                          className={styles.image3Icon3}
                          alt=""
                          src="/image-3-3@2x.png"
                        />
                        <div className={styles.funiroLanding}>
                          Funiro - Landing Page for furniture shop
                        </div>
                      </div>
                    </div>
                    <div className={styles.slider}>
                      <div className={styles.sliderChild} />
                      <div className={styles.rectangleBackground} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.applicantDashboardContact}>
              <AdditionalDetails1
                additionalDetails="Additional Details"
                icon="/icon-11.svg"
                email="Email"
                gazizovaemailcom="gazizova@email.com"
                icon1="/icon-21.svg"
                phone="Phone"
                iconButton="+7 777 077 75 77"
                icon2="/icon-31.svg"
                languages="Languages"
                kazakhEnglishRussian="Kazakh, English, Russian "
              />
              <AdditionalDetails1
                additionalDetails="Social Links"
                icon="/icon-51.svg"
                email="Instagram"
                gazizovaemailcom="instagram.com/gazizova"
                icon1="/icon-6.svg"
                phone="Twitter"
                iconButton="twitter.com/gazizova"
                icon2="/icon-71.svg"
                languages="Website"
                kazakhEnglishRussian="_______________"
                propBorderRadius="unset"
                propColor="#4640de"
                propColor1="#4640de"
                propColor2="#4640de"
              />
            </div>
          </div>
        </section>
      </main>
      <div className={styles.profilePageAboutChild} />
      <Footer4 />
    </div>
  );
};

export default ProfilePageAbout;
