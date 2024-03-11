import { FunctionComponent } from "react";
import styles from "./LikeFrame.module.css";

const LikeFrame: FunctionComponent = () => {
  return (
    <div className={styles.likeFrame}>
      <div className={styles.shareFrame}>
        <div className={styles.about}>
          <div className={styles.aboutChild} />
          <div className={styles.commentGroup}>
            <div className={styles.newPost}>new post</div>
          </div>
          <div className={styles.profileNavigator}>
            <div className={styles.vectorFrame} />
            <div className={styles.frameProjects}>
              <div className={styles.brandFrame}>
                <h3 className={styles.whatsOnYour}>What’s on your mind?</h3>
              </div>
              <div className={styles.communityGuideFrame}>
                <img
                  className={styles.paperclipIcon}
                  alt=""
                  src="/paperclip.svg"
                />
                <img className={styles.imageIcon} alt="" src="/image.svg" />
                <div className={styles.settingsFrame}>
                  <img className={styles.filmIcon} alt="" src="/film.svg" />
                </div>
                <img
                  className={styles.languageSelectorIcon}
                  loading="eager"
                  alt=""
                  src="/hashtag-frame.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.headerFrame}>
          <div className={styles.framecommentretweetlikeshare}>
            <div className={styles.profile}>
              <div className={styles.rectangle} />
            </div>
            <div className={styles.ellipse}>
              <div className={styles.vector}>
                <div className={styles.sortByTrendingContainer}>
                  <span>{`Sort by: `}</span>
                  <span className={styles.trending}>trending</span>
                </div>
              </div>
              <img
                className={styles.chevronDownIcon}
                alt=""
                src="/chevrondown.svg"
              />
            </div>
            <div className={styles.profile1}>
              <div className={styles.line} />
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.frameimage} />
            <div className={styles.line1}>
              <img
                className={styles.navigationIcon}
                alt=""
                src="/vector3.svg"
              />
              <div className={styles.rectangleQuestionshelpcircle}>
                <div className={styles.textQuestions}>
                  <div className={styles.frameTalentSolutionsMarketi}>
                    <h2 className={styles.ayaGazizova}>Aya Gazizova</h2>
                    <div className={styles.m}>· 20m</div>
                  </div>
                  <h3
                    className={styles.excitingNews}
                  >{`Exciting news! 🚀 Just reached a major milestone at Project ! 🎉 Grateful for the incredible team and their hard work. Together, we're making big strides towards mission. Thank you to everyone who's been part of this journey! 👏 `}</h3>
                </div>
                <div className={styles.instanceParent}>
                  <div className={styles.commentParent}>
                    <img
                      className={styles.commentIcon}
                      loading="eager"
                      alt=""
                      src="/comment.svg"
                    />
                    <div className={styles.projectItems}>10</div>
                  </div>
                  <div className={styles.retweetParent}>
                    <img
                      className={styles.retweetIcon}
                      loading="eager"
                      alt=""
                      src="/retweet.svg"
                    />
                    <div className={styles.div}>1</div>
                  </div>
                  <div className={styles.likeParent}>
                    <img
                      className={styles.likeIcon}
                      loading="eager"
                      alt=""
                      src="/like.svg"
                    />
                    <div className={styles.div1}>8</div>
                  </div>
                  <div className={styles.shareParent}>
                    <img
                      className={styles.shareIcon}
                      loading="eager"
                      alt=""
                      src="/share.svg"
                    />
                    <div className={styles.div2}>10</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameItem} />
          </div>
        </div>
      </div>
      <div className={styles.newArticle}>
        <div className={styles.profile2}>
          <div className={styles.profileChild} />
          <div className={styles.rectangleContainer}>
            <img
              className={styles.innerProfilePic}
              loading="eager"
              alt=""
              src="/rectangle-3-1@2x.png"
            />
            <div className={styles.ellipseShape} />
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.commentFrame}>
              <div className={styles.authorName}>
                <b className={styles.ayaGaziziova}>Aya Gaziziova</b>
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
            <div className={styles.writeNewPost}>write new Post</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LikeFrame;
