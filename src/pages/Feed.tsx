import { FunctionComponent, useEffect, useState } from "react";
import ITUniversityLogo from "../components/ITUniversityLogo";
import NewArticle from "../components/NewArticle";
import Footer3 from "../components/Footer3";
import styles from "./Feed.module.css";
import Navigation1 from "../components/Navigation1";

const API_URL = 'http://127.0.0.1:8000/api/user/profile';

const Url = 'http://127.0.0.1:8000/';
const UrlToPost = 'http://127.0.0.1:8000/api/posts/user/';
const UrlToGetPosts = 'http://127.0.0.1:8000/api/posts/all/';


interface profileData {
  profile_photo?: string;
}

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

const Feed: FunctionComponent = () => {

  const [profileData, setProfileData] = useState<profileData | null>(null);
  const [userData, setUserData] = useState<userData | null>(null);

  const [content, setContent] = useState('');
  const [posts, setPosts] = useState([]);


  const fetchPosts = async () => {
    fetch(UrlToGetPosts)
    .then(response => response.json())
    .then(data => {
      // Проверяем, есть ли результаты постов
      if (Array.isArray(data.results)) {
        setPosts(data.results);
      } else {
        setPosts([]);
      }
    })
    .catch(error => {
      console.error('Error fetching posts:', error);
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Submitted content:', content);
    
    fetch(`${UrlToPost}${username}/create/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      }).finally(() => {
        window.location.reload();
      });
    
};


  useEffect(() => {
    const username = localStorage.getItem('username');
    getProfileData(username).then((data) => {
      setProfileData(data);
    });
    getUserData(username).then((data) => {
      setUserData(data);
    });

    fetchPosts();
  }, []);

  return (
    <div>
      <Navigation1/> 
   
    <div className={styles.feed}>
  
      <div className={styles.columns}>
        <div className={styles.main} />
        <div className={styles.sidebar} />
      </div>

      <section className={styles.textContainer}>
        <div className={styles.frameParent}>
          <div className={styles.thumbsUpButtonParent}>
            <div className={styles.thumbsUpButton}>


            <div className={styles.about}>
                <div className={styles.aboutChild} />
                <div className={styles.frameProfile}>
                  <div className={styles.newPost}>new post</div>
                  <div className={styles.lineSeparator} />
                </div>
                <div className={styles.groupFrame1}>
              
              <div className={styles.ittechnologiesUniversity}>
                <textarea
                  cols={80}
                  className={styles.postContent}
                  style={{ width: '100%' , color: 'black' , border: 'none' }}
                  placeholder="Write your post here..."
                  value={content}
                  onChange={handleChange}
                  required
                />
                <button type="submit" className={styles.hashtagFrameIcon} style={{ border: 'none' }} onClick={handleSubmit}>
                  <img
                    className={styles.hashtagIcon}
                    alt=""
                    src="/hashtag-frame.svg"
                  />
                </button>
              </div>
            </div>
            </div>



              
              <div className={styles.frameNewArticle}>
                <div className={styles.profileFrame1}>
                  <div className={styles.thumbsUpLine} />
                </div>
                <div className={styles.messageCircleLine}>
                  <div className={styles.sortByTrendingWrapper}>
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
                <div className={styles.profileFrame2}>
                  <div className={styles.line} />
                </div>
              </div>
            </div>

            <PostList posts={posts} />

            {/* <div className={styles.div}> */}


              {/* <div className={styles.frameGroup}>
                  <div className={styles.photoParent}>
                    <img
                      className={styles.photoIcon}
                      loading="eager"
                      alt=""
                      src={Url + profileData?.profile_photo}
                    />
                    <div className={styles.productDesignerFrameWrapper}>
                      <div className={styles.productDesignerFrame}>
                        <b className={styles.kyleFisher}>{userData?.first_name} {userData?.last_name}</b>
                        <div className={styles.productDesignerAt}>
                          {userData?.user_type}
                        </div>
                      </div>
                      <div>{`Здесь текст поста`}</div>
                    </div>
                  </div>           
              </div> */}
                
              {/* <div className={styles.child} />
              <div className={styles.audreyAlexanderCommentThisParent}>
                <div className={styles.audreyAlexanderCommentContainer}>
                  <span>Audrey Alexander</span>
                  <span className={styles.commentThis}> comment this</span>
                </div>
                <img
                  className={styles.moreHorizontalIcon1}
                  alt=""
                  src="/morehorizontal.svg"
                />
              </div>
              <div className={styles.line1} />
              <div className={styles.ellipseShape}>
                
                <div className={styles.frameContainer}>
                  <div className={styles.frameLine}>
                    <div className={styles.frameFrame1}>
                      <div className={styles.thumbsupLine}>
                        <img
                          className={styles.thumbsUpIcon}
                          loading="eager"
                          alt=""
                          src="/thumbsup.svg"
                        />
                      </div>
                      <div className={styles.separator}>12</div>
                    </div>
                    <div className={styles.frameFrame2} />
                    <div className={styles.frameFrame3}>
                      <div className={styles.messageCircleWrapper}>
                        <img
                          className={styles.messageCircleIcon}
                          loading="eager"
                          alt=""
                          src="/messagecircle.svg"
                        />
                      </div>
                      <div className={styles.div1}>3</div>
                    </div>
                    <div className={styles.frameFrame4} />
                  </div>
                  <div className={styles.lineParent}>
                    <div className={styles.line2} />
                    <div className={styles.shareFrameParent}>
                      <div className={styles.shareFrame}>
                        <img
                          className={styles.share2Icon}
                          loading="eager"
                          alt=""
                          src="/share2.svg"
                        />
                      </div>
                      <div className={styles.share}>share</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.line3} /> */}
              
            {/* </div>  */}
          </div>
          <NewArticle />
        </div>
      </section>
      <Footer3 />
    </div>
    </div>
  );
};

export default Feed;


interface Post {
  author: any;
  profile: any
  id: number;
  title: string;
  content: string;
}

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  console.log(posts);
  if (!Array.isArray(posts)) {
    return <p>No posts available</p>;
  }

  return (
    <div style={{width: "100%"}}>
      {posts.map(post => (
        <div className={styles.div} style={{marginBottom: "20px" , paddingBottom: "20px"}}>
        <div className={styles.frameGroup} key={post.id} style={{width: "100%"}}>
          <div className={styles.photoParent} style={{width: "100%", marginLeft: "15px"}}>
            
            <img
              className={styles.photoIcon}
              style={{width: "50px" , height: "50px"}}
              loading="eager"
              alt=""
              src={Url + post.profile.profile_photo}
            />
            <div className={styles.productDesignerFrameWrapper}>
              <a href={`/profile/${post.author.username}`}>
              <div className={styles.productDesignerFrame}>
                
                <b className={styles.kyleFisher}>{post.author.first_name} {post.author.last_name}</b>
                <div className={styles.productDesignerAt}>
                  {post.author.user_type}
                </div>
              </div>
              </a>
              
            </div>
            
          </div>
          <div style={{width: "96%", marginLeft: "15px", color: "black"}}>{post.content}</div>
        </div>
        </div>

      ))}
    </div>
  );
};