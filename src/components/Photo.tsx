import { FunctionComponent, useState, useEffect } from "react";
import styles from "./Photo.module.css";
import axios from 'axios';

const API_URL = 'https://loke4ka.pythonanywhere.com/api';

interface User {
  id: number;
  username: string;

}

const Photo: FunctionComponent = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    const viewerUsername = localStorage.getItem('username');

    useEffect(() => {
    const fetchUsers = async () => {
        try {
            const response = await axios.get(API_URL + '/users');
            setUsers(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    fetchUsers();
}, []);

const addFriend = async (friendUsername: string) => {
  if (!viewerUsername) {
      console.error('Viewer username not found in localStorage.');
      return;
  }

  console.log('Friend username:', friendUsername);
  console.log('Viewer username:', viewerUsername);
  
  try {
      await axios.post(API_URL + `/friend/add/`, { friend_username: friendUsername , username: viewerUsername });
      alert('User added to friends!');
  } catch (error) {
      console.error('Error adding friend:', error);
  }
};

  return (
    <section className={styles.photo}>
      <div className={styles.lineSeparator}>
        {/* <div className={styles.navigation}>
          <div className={styles.navigationChild} />
          <div className={styles.frameHeyISawYourWorks}>
            <div className={styles.acceptDecline}>
              <img className={styles.linkIcon} alt="" src="/link.svg" />
              <div className={styles.connections}>Connections</div>
            </div>
            <b className={styles.rectangleNavbarFooter}>1,038</b>
          </div>
          {/* <div className={styles.frameConnections} /> */}
          {/* <div className={styles.lineSep}>
            <div className={styles.navigationCommunityGuideline}>
              <div className={styles.connectionFrame}>
                <div className={styles.rootFrame}>
                  <img className={styles.discIcon} alt="" src="/disc.svg" />
                </div>
                <div className={styles.invitations}>Invitations</div>
              </div>
              <div className={styles.gradient}>
                <b className={styles.rectangle}>2</b>
                <div className={styles.text} />
              </div>
            </div>
          </div> */}
          {/* <div className={styles.frameConnections1} />
          <div className={styles.line} /> */}
          {/* <div className={styles.frameConnections2}>
            <div className={styles.lineLineLineParent}>
              <div className={styles.lineLineLine}>
                <img
                  className={styles.archiveIcon}
                  loading="eager"
                  alt=""
                  src="/archive.svg"
                />
              </div>
              <div className={styles.teammates}>Teammates</div>
            </div>
          </div> */}
          {/* <div className={styles.frameConnections3} />
          <div className={styles.frameConnections4}>
            <div className={styles.frameParent}>
              <div className={styles.usersWrapper}>
                <img className={styles.usersIcon} alt="" src="/users-2.svg" />
              </div>
              <div className={styles.groupsWrapper}>
                <div className={styles.groups}>groups</div>
              </div>
              <b className={styles.text1}>6</b>
            </div>
          </div> */}
          {/* <div className={styles.frameConnections5} />
          <div className={styles.frameConnections6}>
            <div className={styles.frameGroup}>
              <div className={styles.layersWrapper}>
                <img
                  className={styles.layersIcon}
                  loading="eager"
                  alt=""
                  src="/layers.svg"
                />
              </div>
              <div className={styles.pagesWrapper}>
                <div className={styles.pages}>pages</div>
              </div>
              <b className={styles.b}>28</b>
            </div>
          </div> */}
          {/* <div className={styles.frameConnections7} />
          <div className={styles.frameConnections8}>
            <div className={styles.frameContainer}>
              <div className={styles.hashWrapper}>
                <img
                  className={styles.hashIcon}
                  loading="eager"
                  alt=""
                  src="/hash.svg"
                />
              </div>
              <div className={styles.hashtagsWrapper}>
                <div className={styles.hashtags}>hashtags</div>
              </div>
              <b className={styles.b1}>8</b>
            </div>
          </div> 
        </div> */}
        <div className={styles.frameDiv}>
          <div className={styles.frameParent1}>
            {/* <div className={styles.frameParent2}>
              <button className={styles.frame}>
                <div className={styles.frameChild} />
                <div className={styles.received}>Received</div>
              </button>
              <button className={styles.frame1}>
                <div className={styles.frameItem} />
                <div className={styles.sent}>sent</div>
              </button> 
            </div> */}
            <div className={styles.comma}>
              <div className={styles.youHave2NewConnectionsParent}>
                <div className={styles.youHave2Container}>
                  <span>{`you have `}</span>
                  <span className={styles.newConnections}>
                    2 connections
                  </span>
                </div>
                <div className={styles.youhavenewconnections}>
                  <div className={styles.lineLineLine1} />
                  <div className={styles.lineLineLine2} />
                  <div className={styles.lineLineLine3} />
                  <div className={styles.gradient1} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.div}>
          {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            <span>{user.username}</span>
                            <button onClick={() => addFriend(user.username)} className={styles.button}>Add to Friends</button>
                        </li>
                    ))}
                </ul>
            )}
          </div>
          {/* <div className={styles.div}>
            <div className={styles.child} />
            <div className={styles.footer}>
              <div className={styles.connectionFrame1}>
                <img
                  className={styles.photoIcon}
                  loading="eager"
                  alt=""
                  src="/photo@2x.png"
                />
              </div>
              <div className={styles.brandonConnections}>
                <b className={styles.brandonWilson}>Brandon Wilson</b>
                <div className={styles.seniorUxDesigner}>
                  Senior UX designer
                </div>
                <div className={styles.connections1}>623 connections</div>
              </div>
            </div>
            <div className={styles.acceptDeclineFrame}>
              <div className={styles.newMessageFrame}>
                <div className={styles.heyISawYourWorks} />
                <div className={styles.heyISaw}>
                  Hey, I saw your works. I like it! Can we do something
                  together? Or maybe you have project for UX at the moment?
                </div>
              </div>
            </div>
            <div className={styles.parent}>
              <button className={styles.button}>
                <div className={styles.item} />
                <div className={styles.accept}>Accept</div>
              </button>
              <button className={styles.button1}>
                <div className={styles.inner} />
                <div className={styles.decline}>Decline</div>
              </button>
            </div>
          </div> */}
        </div>
      </div>
      {/* <div className={styles.footer1}>
        <div className={styles.frameFrameParent}>
          <div className={styles.frameFrame}>
            <div className={styles.lineAndFrame} />
          </div>
          <div className={styles.frameWithLines}>
            <div className={styles.recentConnections}>recent connections</div>
          </div>
          <div className={styles.frameFrame1}>
            <div className={styles.line1} />
          </div>
        </div>
        <div className={styles.fastaccess}>
          <div className={styles.audreyAlexanderTeamleadAtG}>
            <div className={styles.connectionsHeader}>
              <div className={styles.connectionsHeaderChild} />
              <div className={styles.acceptDecline1}>
                <div className={styles.audreyAlexander}>
                  <img
                    className={styles.photoIcon1}
                    alt=""
                    src="/photo-1@2x.png"
                  />
                  <div className={styles.audreyAlexanderConnection}>
                    <div className={styles.yesterday}>
                      <b className={styles.audreyAlexander1}>
                        Audrey Alexander
                      </b>
                      <div className={styles.teamLeadAt}>
                        Team lead at Google
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.yesterday1430}>Yesterday, 14:30</div>
            </div>
            <div className={styles.separator}>
              <div className={styles.separatorChild} />
            </div>
          </div>
          <div className={styles.audreyAlexanderTeamleadAtG1}>
            <div className={styles.div1}>
              <div className={styles.rectangleDiv} />
            </div>
            <div className={styles.div2}>
              <div className={styles.child1} />
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Photo;
