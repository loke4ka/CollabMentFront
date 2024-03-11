import { FunctionComponent } from "react";
import styles from "./LoginRegister1.module.css";
import stylesAnimation from "../components/globalAnimations.module.css";


import { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';


const registerUser = async (username: any, email: any, password: any, phoneNumber: any, setLoading: any, setRegistrationStatus: any) => {
  try {
    setLoading(true);
    const response = await axios.post(
      `${API_URL}/register`,
      {
        username,
        email,
        password,
        phone_number: phoneNumber, 
      },
      { headers: { 'Content-Type': 'application/json' } }
    );

    if (response.status === 201) {
      console.log('Registration successful');
      // Сохраняем токен в локальное хранилище
      localStorage.setItem('userToken', response.data.token);
      localStorage.setItem('username', username);
      // Дополнительно можно сохранить другие данные пользователя, если нужно
      // localStorage.setItem('userId', response.data.id);
      setRegistrationStatus(true);
      window.location.href = '/profile' + `/${username}`;
    } else {
      console.log('Registration failed');
      setRegistrationStatus(false);
    }
  } catch (error) {
    console.error('Registration failed', error);
    setRegistrationStatus(false);
  } finally {
    setLoading(false);
  }
};


const LoginRegister1: FunctionComponent = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [registrationStatus, setRegistrationStatus] = useState<boolean | null>(null);

  const handleRegister = async (e:any) => {
    e.preventDefault();
    await registerUser(
      username,
      email,
      password,
      phoneNumber,
      setLoading,
      setRegistrationStatus
    );
  
    if (registrationStatus === true) {
      console.log('User registered');
      
    } else {
      console.log('Registration failed');
    }
  };

  return (
    <div className={styles.loginRegister}>
      <div className={styles.registerFrame}>
        <div className={styles.emptyFrame}>

          <a className={stylesAnimation.logoLink} href="/">
          <div className={styles.logoColl}>
            <img
              className={styles.tablersteamIcon}
              loading="eager"
              alt=""
              src="/tablersteam-1.svg"
            />
            <b className={styles.collabment}>COLLABMENT</b>
          </div>
          </a>

          <div className={styles.parentFrame}>
            <form className={styles.childFrame}>
              <div className={styles.welcomeText}>
                <div className={styles.signupText}>
                  <div className={styles.welcomeToCollabment}>
                    Welcome to Collabment
                  </div>
                  <h1 className={styles.signUp}>Sign up</h1>
                </div>
                <div className={styles.communityText}>
                  <a href="/login-register">
                  <div className={styles.haveAnAccountContainer}>
                    <p className={styles.haveAnAccount}>Have an Account ?</p>
                    <p className={styles.signIn}>Sign in</p>
                  </div>
                  </a>
                </div>
              </div>
              <div className={styles.instanceParent}>
                <div className={styles.enterYourUsernameOrEmailAParent}>
                  <div className={styles.enterYourUsername}>
                    Enter your username or email address
                  </div>
                  <input className={styles.inputRectangle} type="text" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)}/>
                  {/* <div className={styles.usernameOrEmail}>
                  </div> */}
                </div>
                <div className={styles.buttonInstance}>
                  <div className={styles.userNameParent}>
                    <div className={styles.userName}>User name</div>
                    <input className={styles.communityFrame} type="text" placeholder="User name" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    {/* <div className={styles.userName1}></div> */}
                  </div>
                  <div className={styles.contactNumberParent}>
                    <div className={styles.contactNumber}>Contact Number</div>
                    <input className={styles.instanceChild} type="text" placeholder="8 777 777 7777" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                    {/* <div className={styles.contactNumber1}></div> */}
                  </div>
                </div>
                <div className={styles.enterYourPasswordParent}>
                  <div className={styles.enterYourPassword}>
                    Enter your Password
                  </div>
                  <input className={styles.instanceItem} type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                  {/* <div className={styles.password}></div> */}
                </div>
              </div>
              <button className={styles.buttonsoliddefaultlargemai} onClick={handleRegister}>
              {loading ? <div className={styles.loader}></div> : <div className={styles.large}>Sign up</div>}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.loginRegisterChild} />
      <div className={styles.jobSearchFrame}>
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
          src="/104092401-1@2x.png"
        />
      </div>
    </div>
  );
};

export default LoginRegister1;
