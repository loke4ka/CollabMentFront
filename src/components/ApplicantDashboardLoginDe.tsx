import { FunctionComponent, useEffect, useState } from "react";
import styles from "./ApplicantDashboardLoginDe.module.css";

const API_URL = 'http://127.0.0.1:8000/api/user/profile';

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

const ApplicantDashboardLoginDe: FunctionComponent = () => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const username = localStorage.getItem('username');
    getUserData(username).then((userData) => {
      if (userData) {
        setEmail(userData.email);
      }
    });
  }, []);

  return (
    <form className={styles.applicantDashboardLoginDe}>
      <div className={styles.basicInformation}>
        <div className={styles.basicInformation1}>Basic Information</div>
        <div className={styles.thisIsLogin}>
          This is login information that you can update anytime.
        </div>
      </div>
      <div className={styles.basicInfoFrame} />
      <div className={styles.profilePhoto}>
        <div className={styles.profilePhoto1}>
          <div className={styles.updateEmail}>Update Email</div>
          <div className={styles.updateYourEmail}>
            Update your email address to make sure it is safe
          </div>
        </div>
        <div className={styles.updateEmail1}>
          <div className={styles.textfieldPassword}>
            <div className={styles.updateEmailForm}>
              <div className={styles.jakegyllemailcom}>{email}</div>
              <img className={styles.icon} alt="" src="/icon-53.svg" />
            </div>
            <div className={styles.yourEmailAddress}>
              Your email address is verified.
            </div>
          </div>
          <div className={styles.textfield}>
            <div className={styles.label}>Update Email</div>
            <div className={styles.input}>
              <input
                className={styles.thisIsPlaceholder}
                placeholder="Enter your new email"
                type="text"
              />
            </div>
          </div>
          <button className={styles.button}>
            <b className={styles.caption}>Update Email</b>
          </button>
        </div>
      </div>
      <div className={styles.basicInfoFrame1} />
      <div className={styles.personalDetails}>
        <div className={styles.profilePhoto2}>
          <div className={styles.newPassword}>New Password</div>
          <div className={styles.manageYourPassword}>
            Manage your password to make sure it is safe
          </div>
        </div>
        <div className={styles.forms}>
          <div className={styles.textfield1}>
            <div className={styles.label1}>Old Password</div>
            <div className={styles.input1}>
              <input
                className={styles.thisIsPlaceholder1}
                placeholder="Enter your old password"
                type="text"
              />
            </div>
            <div className={styles.thisIsHelper}>Minimum 8 characters</div>
          </div>
          <div className={styles.textfield2}>
            <div className={styles.label2}>New Password</div>
            <div className={styles.input2}>
              <input
                className={styles.thisIsPlaceholder2}
                placeholder="Enter your new password"
                type="text"
              />
            </div>
            <div className={styles.thisIsHelper1}>Minimum 8 characters</div>
          </div>
          <button className={styles.button1}>
            <b className={styles.caption1}>Change Password</b>
          </button>
        </div>
      </div>
      <div className={styles.basicInfoFrame2} />
      <div className={styles.closeAccount}>
        <div className={styles.closeAccount1}>Close Account</div>
        <img className={styles.icon1} alt="" src="/icon1.svg" />
      </div>
    </form>
  );
};

export default ApplicantDashboardLoginDe;
