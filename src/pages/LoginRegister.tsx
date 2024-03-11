import { FunctionComponent, useState } from "react";
import styles from "./LoginRegister.module.css";
import stylesAnimation from "../components/globalAnimations.module.css";
import axios from "axios";

const API_URL = 'http://127.0.0.1:8000/api/login';

const LoginRegister: FunctionComponent = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        API_URL,
        { username, password },
        { headers: { 'Content-Type': 'application/json' } }
      );
  
      console.log('Response from server:', response.data); // Выводим содержимое ответа сервера в консоль
  
      if (response.status === 200) {
        console.log('Authentication successful');
        const { user_id, token } = response.data;
        localStorage.setItem('userId', user_id);
        localStorage.setItem('userToken', token);
        localStorage.setItem('username', username);

        console.log('Data saved to localStorage:', localStorage.getItem('username'), localStorage.getItem('userToken'));

        window.location.href = '/profile' + `/${username}`;
      } else {
        console.log('Authentication failed');
      }
    } catch (error) {
      console.error('Authentication failed', error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className={styles.loginRegister}>
      <div className={styles.registerFrame}>
      <a href="/" className={stylesAnimation.logoLink}>
        <div className={styles.logoColl}>
          
          <img
            className={styles.tablersteamIcon}
            loading="eager"
            alt=""
            src="/tablersteam-1.svg"
          />
          <b className={styles.collabment}> COLLABMENT</b>

        </div>
        </a>
        <div className={styles.collaborationText}>
          <form className={styles.fRAME}>
            <div className={styles.inputFrame}>
              <div className={styles.emailOrUsername}>
                <div className={styles.welcomeToCollabment}>
                  Welcome to Collabment
                </div>
                <h1 className={styles.signIn}>Sign in</h1>
              </div>
              <div className={styles.noAccountText}>
                <a href="/signup">
                <div className={styles.noAccountContainer}>
                  <p className={styles.noAccount}>No Account ?</p>
                  <p className={styles.signUp}>Sign up</p>
                </div>
                </a>
              </div>
            </div>
            <div className={styles.googleSignIn}>
              <div className={styles.inputGroup}>
                <button className={styles.rectangleParent}>
                  <div className={styles.frameChild} />
                  <img className={styles.googleIcon} alt="" src="/google.svg" />
                  <div className={styles.signInWith}>Sign in with Google</div>
                </button>
                <div className={styles.passwordInputLabel}>
                  <img
                    className={styles.passwordInputLabelChild}
                    loading="eager"
                    alt=""
                    src="/group-52.svg"
                  />
                  <img
                    className={styles.passwordInputLabelItem}
                    loading="eager"
                    alt=""
                    src="/group-51.svg"
                  />
                </div>
              </div>
              <div className={styles.enterYourUsernameOrEmailAParent}>
                <div className={styles.enterYourUsername}>
                  Enter your username or email address
                </div>
                <input className={styles.textInputRectangle} type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                {/* <div className={styles.usernameOrEmail}>
                </div> */}
              </div>
            </div>
            <div className={styles.loginFrame}>
              <div className={styles.passwordInputFrame}>
                <div className={styles.enterYourPasswordParent}>
                  <div className={styles.enterYourPassword}>
                    Enter your Password
                  </div>
                  <input className={styles.rectangleShape} type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                  {/* <div className={styles.password}></div> */}
                </div>
              </div>
              <div className={styles.forgotPassword}>Forgot Password</div>
            </div>
            <div className={styles.largeButton}>
              <button className={styles.buttonsoliddefaultlargemai} onClick={handleLogin}>
              {loading ? <div className={styles.loader}></div> : <div className={styles.large}>Sign in</div>}
                {/* <div className={styles.large}></div> */}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className={styles.loginRegisterChild} />
      <div className={styles.imgParent}>
        <div className={styles.img} />
        <div className={styles.texte} />
        <h1 className={styles.findAJobContainer}>
          <span>{`Find a job through `}</span>
          <span className={styles.yourCommunity}>your community</span>
        </h1>
        <img
          className={styles.icon}
          loading="eager"
          alt=""
          src="/02092401-1@2x.png"
        />
      </div>
    </div>
  );
};

export default LoginRegister;
