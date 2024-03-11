import { FunctionComponent, SetStateAction, useEffect, useState } from "react";
import SideBarDashboardApplica from "../components/SideBarDashboardApplica";
import FrameComponent2 from "../components/FrameComponent2";
import styles from "./DashboardSettingsAccount.module.css";

const API_URL = 'https://loke4ka.pythonanywhere.com/api/user/profile';
const API_URL_PROFILE = 'https://loke4ka.pythonanywhere.com/api/profile/update/';

const Url = 'https://loke4ka.pythonanywhere.com/api/user/profile/update/';
const imgUrl = 'https://loke4ka.pythonanywhere.com/'

interface UserData {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  birthday: string;
  gender: string;
  user_type: string;
}

interface ProfileData {
  profile_photo: string;
}


const username = localStorage.getItem('username');

const DashboardSettingsAccount: FunctionComponent = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');
  const [user_type, setUser_type] = useState('');

  const [selectedImageName, setSelectedImageName] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const [userDataLocal, setUserData] = useState<UserData | null>(null);
  const [ProfileDataLocal, setProfileData] = useState<ProfileData | null>(null);

  const handleImageChange = (event : any) => {
    const file = event.target.files[0]; 
    setSelectedImageName(file.name); 
    setSelectedImage(file); 
  };

  const uploadImage = async () => {
    console.log('Selected image:', selectedImage);

    const formDataProfile = new FormData();

    if (selectedImage) {
      formDataProfile.append('profile_photo', selectedImage);
    }
    // 
    const response = await fetch(`${API_URL_PROFILE}${username}/`, {
      method: 'PATCH', 
      body: formDataProfile, 
    });

    if (response.ok) {
      console.log('Profile updated successfully');
    } else {
      console.error('Failed to update profile:', response.status);
    }
  };




  const updateUserProfile = async (userData: any) => {
    try {
      console.log(userData);
      const formData = new FormData();
      if (userData.first_name) {
        formData.append('first_name', userData.first_name);
      }
      if (userData.last_name) {
        formData.append('last_name', userData.last_name);
      }
      if (userData.phone_number) {
        formData.append('phone_number', userData.phone_number);
      }
      if (userData.email) {
        formData.append('email', userData.email);
      }
      if (userData.birthday) {
        formData.append('birthday', userData.birthday);
      }
      if (userData.gender) {
        formData.append('gender', userData.gender);
      }
      if (userData.user_type) {
        formData.append('user_type', userData.user_type);
      }

      console.log(formData);

      const response = await fetch(`${Url}${username}/`, {
        method: 'PATCH', 
        body: formData, 
      });
  
      if (response.ok) {
        console.log('Profile updated successfully');
      } else {
        console.error('Failed to update profile:', response.status);
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };
  
  

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fullName = event.target.value;
    const [first, last] = fullName.split(' ');
    setFirstName(first);
    setLastName(last || ''); // Если фамилия не указана, установить пустую строку
  };


  const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBirthday(event.target.value);
  };

  const handleGenderChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setGender(event.target.value);
  };

  const handleUserTypeChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setUser_type(event.target.value);
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


  useEffect(() => {
    const fetchData = async () => {
      const username = localStorage.getItem('username');
      if (username) {
        const data = await getUserData(username);
        const profileData = await getProfileData(username);
        if (profileData) {
          setProfileData(profileData);
          console.log(profileData);
        }
        if (data) {
          setUserData(data);
          console.log(data);
        }
      }
    };

    fetchData();
  }, []);
  

  const handleSaveProfile = () => {
    const updatedData = {
      first_name: firstName,
      last_name: lastName,
      phone_number: phoneNumber,
      email: email,
      birthday: birthday,
      gender: gender,
      user_type: user_type,
    };

    if (selectedImageName) {
      uploadImage();
    }
    
    updateUserProfile(updatedData).then(() => {
      window.location.reload();
    });
  };
  


  return (
    <div className={styles.dashboardSettingsAccount}>
      <SideBarDashboardApplica />
      <main className={styles.lineLayout}>
        <FrameComponent2 />
        <div className={styles.basicInformation}>
          <div className={styles.profilePhoto}>
            <div className={styles.basicInformation1}>Basic Information</div>
            <div className={styles.thisIsYour}>
              This is your personal information that you can update anytime.
            </div>
          </div>
        </div>
        <div className={styles.topNav} />
        {userDataLocal ? (
        <><section className={styles.personalInfoFrame}>
            <div className={styles.personalDetailsFrame}>
              <div className={styles.basicInformationText}>
                <div className={styles.profilePhoto1}>Profile Photo</div>
                <div className={styles.thisImageWill}>
                  This image will be shown publicly as your profile picture, it
                  will help recruiters recognize you!
                </div>
              </div>

              {ProfileDataLocal ? (
             
                <div className={styles.textfieldPhoneNumber}>
                <label htmlFor="profileImage" className={styles.inputDropdown}>
                  <img className={styles.profileImage} alt="Profile" src={imgUrl + ProfileDataLocal.profile_photo} />
                  <input
                    id="profileImage"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className={styles.fileInput}
                  />
                </label>
                <div className={styles.textfield}>
                  <div className={styles.textfieldRow}>
                    <img className={styles.icon} alt="" src="/icon-5.svg" />
                    <div className={styles.phoneNumberTextField}>
                      <div className={styles.clickToReplaceContainer}>
                        <span className={styles.clickToReplace}>Click to replace</span>
                        <span className={styles.orDragAndDrop}>
                          <span className={styles.span}>{` `}</span>
                          <span>or drag and drop</span>
                        </span>
                      </div>
                      <input
                        className={styles.textfieldForPhoto}
                        placeholder="SVG, PNG, JPG (max. 400 x 400px)"
                        type="text"
                        readOnly
                        value={selectedImageName}
                      />
                    </div>
                  </div>
                </div>
              </div>
              ) : (
                <div className={styles.textfieldPhoneNumber}>
                <div className={styles.inputDropdown} />
                <div className={styles.textfield}>
                  <div className={styles.textfieldRow}>
                    <img className={styles.icon} alt="" src="/icon-5.svg" />
                    <div className={styles.phoneNumberTextField}>
                      <div className={styles.clickToReplaceContainer}>
                        <span className={styles.clickToReplace}>
                          Click to replace
                        </span>
                        <span className={styles.orDragAndDrop}>
                          <span className={styles.span}>{` `}</span>
                          <span>or drag and drop</span>
                        </span>
                      </div>
                      <input
                        className={styles.svgPngJpg}
                        placeholder="SVG, PNG, JPG or GIF (max. 400 x 400px)"
                        type="text" />
                    </div>
                  </div>
                </div>
              </div>
              )}
            


            </div>
          </section><div className={styles.topNav1} /><section className={styles.personalDetails}>
              <div className={styles.personalDetails1}>Personal Details</div>
              <div className={styles.forms}>
                <div className={styles.textfield1}>
                  <div className={styles.fullNameContainer}>
                    <span>{`Full Name `}</span>
                    <span className={styles.span1}>*</span>
                  </div>
                  <div className={styles.input}>
                    <input
                      className={styles.ayaGazizova}
                      placeholder={userDataLocal.first_name + ' ' + userDataLocal.last_name}
                      // value={userData.firstName + ' ' + userData.lastName}
                      type="text" 
                      onChange={handleNameChange}
                      />
                  </div>
                </div>
                <div className={styles.row2}>
                  <div className={styles.textfield2}>
                    <div className={styles.phoneNumberContainer}>
                      <span>{`Phone Number `}</span>
                      <span className={styles.span2}>*</span>
                    </div>
                    <div className={styles.input1}>
                      <input
                        className={styles.thisIsPlaceholder}
                        placeholder={userDataLocal.phone_number}
                        type="text" 
                        onChange={handlePhoneNumberChange}
                        />
                    </div>
                  </div>
                  <div className={styles.textfield3}>
                    <div className={styles.email}>
                      <span>{`Email `}</span>
                      <span className={styles.span3}>*</span>
                    </div>
                    <div className={styles.input2}>
                      <input
                        className={styles.gazizovaemailcom}
                        placeholder={userDataLocal.email}
                        type="email" 
                        onChange={handleEmailChange}
                        />
                    </div>
                  </div>
                </div>
                <div className={styles.row3}>
                  <div className={styles.textfield4}>
                    <div className={styles.dateOfBirthContainer}>
                      <span>{`Date of Birth `}</span>
                      <span className={styles.span4}>*</span>
                    </div>
                    <div className={styles.dropdown}>
                      <input
                        className={styles.input3}
                        value={userDataLocal.birthday}
                        placeholder={userDataLocal.birthday}
                        type="date"
                        onChange={handleDateChange}
                         />
                      {/* <img className={styles.icon1} alt="" src="/icon-7.svg" /> */}
                    </div>
                  </div>
                  <div className={styles.textfield5}>
                    <div className={styles.gender}>
                      <span>{`Gender `}</span>
                      <span className={styles.span5}>*</span>
                    </div>
                    <div className={styles.dropdown1}>
                    <label>
                    <select name="gender" className={styles.input4} value={userDataLocal.gender} onChange={handleGenderChange}>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    </label>
                    </div>
                      {/* <div className={styles.female}>Female</div>
                      <img className={styles.icon2} alt="" src="/icon-52.svg" /> */}
                    
                  </div>
                </div>
              </div>
            </section><div className={styles.topNav2} /><section className={styles.accountTypeFrame}>
              <div className={styles.accountTypeLabel}>
                <div className={styles.jobSeekerRadio}>
                  <div className={styles.accountType}>Account Type</div>
                  <div className={styles.youCanUpdate}>
                    You can update your account type
                  </div>
                </div>
                <div className={styles.saveProfileButton}>

                <div className={styles.frameParent}>
                  <div className={styles.radioButtonParent}>
                    <input
                      className={styles.radioButton}
                      type="radio"
                      name="userType"
                      value="Job Seeker" 
                      checked={user_type === "Job Seeker"} 
                      onChange={handleUserTypeChange} 
                    />
                    <div className={styles.jobSeeker}>Job Seeker</div>
                  </div>
                  <div className={styles.lookingForAJobWrapper}>
                    <div className={styles.lookingForA}>Looking for a job</div>
                  </div>
                </div>
                <div className={styles.frameGroup}>
                  <div className={styles.radioButtonGroup}>
                    <input
                      className={styles.radioButton1}
                      type="radio"
                      name="userType" 
                      value="Employer" 
                      checked={user_type === "Employer"} 
                      onChange={handleUserTypeChange} 
                    />
                    <div className={styles.employer}>Employer</div>
                  </div>
                  <div className={styles.hiringSourcingCandidatesOWrapper}>
                    <div className={styles.hiringSourcingCandidates}>
                      Hiring, sourcing candidates, or posting a jobs
                    </div>
                  </div>
                </div>

                </div>
              </div>
            </section><div className={styles.topNav3} /><div className={styles.topNavFrame}>
              <button className={styles.button} onClick={handleSaveProfile}>
                <b className={styles.saveProfile}>Save Profile</b>
              </button>
            </div></>
        ) : (
          <div>Loading...</div>
        )}
      </main>
    </div>
  );
};

export default DashboardSettingsAccount;
