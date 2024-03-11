import { FunctionComponent, SetStateAction, useEffect, useState } from "react";
import SideBarDashboardApplica1 from "../components/SideBarDashboardApplica1";
import TopNav from "../components/TopNav";
import styles from "./DashboardSettingsAccount1.module.css";
import stylesAnimation from "../components/globalAnimations.module.css";

const username = localStorage.getItem('username');

const API_URLUpdate = 'http://127.0.0.1:8000/api/profile/update/';
const API_URL = 'http://127.0.0.1:8000/api/user/profile';

interface ProfileData {
  professional_field: string;
  education: string;
  current_job: string;
  experience: string;
  location: string;
  personal_qualities: string;
  certificates: string;
  resume : string;
  profile_photo: string;
  education_date : string;
  name_institution : string;
  desired_position : string;
  type_of_work : string;
  operating_mode : string;
  name_organization : string;
  position : string;
  passage_time : string;
  experience_name : string;
  citizenship : string;
  city : string;
}

const DashboardSettingsAccount1: FunctionComponent = () => {

  const [professional_field, setProfessional_field] = useState<string>("");
  const [education, setEducation] = useState<string>("");
  const [education_date, setEducation_date] = useState<string>("");
  const [name_institution, setName_institution] = useState<string>("");
  const [current_job, setCurrent_job] = useState<string>("");
  const [experience, setExperience] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [personal_qualities, setPersonal_qualities] = useState<string>("");
  const [certificates, setCertificates] = useState(null);
  const [resume, setResume] = useState<string>("");
  const [profile_photo, setProfile_photo] = useState<string>("");
  const [desired_position, setDesired_position] = useState<string>("");
  const [type_of_work, setType_of_work] = useState<string>("");
  const [operating_mode, setOperating_mode] = useState<string>("");
  const [name_organization, setName_organization] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const [passage_time, setPassage_time] = useState<string>("");
  const [experience_name, setExperience_name] = useState<string>("");
  const [citizenship, setCitizenship] = useState<string>("");
  const [city, setCity] = useState<string>("");

  const [certificates_name, setCertificates_name] = useState<string>("");

  const [ProfileDataLocal, setProfileData] = useState<ProfileData | null>(null);

  const [selectedImageName, setSelectedImageName] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  

  const handleFileChange = (event:any) => {
    setCertificates(event.target.files[0]);
  };

  const handleFileRemove = () => {
    setCertificates(null);
  };

  const handleProfessional_fieldChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setProfessional_field(event.target.value);
  };
  const handleEducationChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setEducation(event.target.value);
  };
  const handleCurrent_jobChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setCurrent_job(event.target.value);
  };
  const handleExperienceChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setExperience(event.target.value);
  };
  const handleLocationChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setLocation(event.target.value);
  };
  const handlePersonal_qualitiesChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setPersonal_qualities(event.target.value);
  };
  const handleCertificatesChange = (event: any) => {
    setCertificates(event.target.value);
  };
  const handleResumeChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setResume(event.target.value);
  };
  const handleProfile_photoChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setProfile_photo(event.target.value);
  };
  const handleEducation_dateChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setEducation_date(event.target.value);
  };
  const handleName_institutionChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setName_institution(event.target.value);
  };
  const handleDesired_positionChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setDesired_position(event.target.value);
  };
  const handleType_of_workChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setType_of_work(event.target.value);
  };
  const handleOperating_modeChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setOperating_mode(event.target.value);
  };
  const handleName_organizationChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setName_organization(event.target.value);
  };
  const handlePositionChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setPosition(event.target.value);
  };
  const handlePassage_timeChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setPassage_time(event.target.value);
  };
  const handleExperience_nameChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setExperience_name(event.target.value);
  };
  const handleCitizenshipChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setCitizenship(event.target.value);
  };
  const handleCityChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setCity(event.target.value);
  }

  const handleSave = async () => {
    const formData = new FormData();
    if (profile_photo) {
      formData.append('profile_photo', profile_photo);
    }
    if (resume) {
      formData.append('resume', resume);
    }
    if (certificates) {
      formData.append('certificates', certificates);
      console.log(certificates);
    }
    if (desired_position) {
      formData.append('desired_position', desired_position);
    }
    if (type_of_work) {
      formData.append('type_of_work', type_of_work);
    }
    if (operating_mode) {
      formData.append('operating_mode', operating_mode);
    }
    if (name_organization) {
      formData.append('name_organization', name_organization);
    }
    if (position) {
      formData.append('position', position);
    }
    if (passage_time) {
      formData.append('passage_time', passage_time);
    }
    if (experience_name) {
      formData.append('experience_name', experience_name);
    }
    if (citizenship) {
      formData.append('citizenship', citizenship);
    }
    if (city) {
      formData.append('city', city);
    }
    if (professional_field) {
      formData.append('professional_field', professional_field);
    }
    if (education) {
      formData.append('education', education);
    }
    if (current_job) {
      formData.append('current_job', current_job);
    }
    if (experience) {
      formData.append('experience', experience);
    }
    if (location) {
      formData.append('location', location);
    }
    if (personal_qualities) {
      formData.append('personal_qualities', personal_qualities);
    }
    if (education_date) {
      formData.append('education_date', education_date);
    }
    if (name_institution) {
      formData.append('name_institution', name_institution);
    }


    const response = await fetch(`${API_URLUpdate}${username}/`, {
      method: 'PATCH',
      body: formData,
    });

    if (response.ok) {
      console.log('Profile updated successfully');
    } else {
      console.error('Failed to update profile:', response.status);
    }
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

  useEffect(() => {
    const fetchData = async () => {
      
      if (username) {
        const profileData = await getProfileData(username);
        if (profileData) {
          setProfileData(profileData);
          console.log(profileData);
        }
        
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.dashPersonal}>
      <SideBarDashboardApplica1 />
      <main className={styles.saveProfileButton}>
        <section className={styles.topNavParent}>
          <TopNav />
          <div className={styles.textfieldDesiredposition}>
            <div className={styles.tabs}>
              <a className={stylesAnimation.NavLinkSettings} href="/MyProfile">

              <div className={styles.tabMenu}>
                <div className={styles.caption}>My Profile</div>
              </div>
              </a>
              <a className={stylesAnimation.NavLinkSettings} href="/dash-personal">

                <div className={styles.personalInformation}>
                  Personal information
                
              </div>
              </a>
              <a className={stylesAnimation.NavLinkSettings} href="/login-details">

              <div className={styles.loginDetails}>Login Details</div>
              </a>
              <div className={styles.tabMenu2}>
                <div className={styles.caption1}>Notifications</div>
              </div>
              <div className={styles.tabMenu3}>
                <div className={styles.caption2}>Notifications</div>
              </div>
              <div className={styles.tabMenu4}>
                <div className={styles.caption3}>Notifications</div>
              </div>
            </div>
          </div>
        </section>

        {ProfileDataLocal ? (
          
        <section className={styles.textFieldPositionWorkexperi}>
          <div className={styles.textFieldLocation}>
            <div className={styles.personalInformation1}>
              Personal Information
            </div>
          </div>
          <div className={styles.addanotherworkexperience}>
            <div className={styles.thisIsYour}>
              This is your personal information that you can update anytime.
            </div>
          </div>
          <form className={styles.groupCertificatesandachieveme}>
            <div className={styles.workDetailsBox}>
              <div className={styles.personTextbox}>
                <div className={styles.separatorMark} />
                <div className={styles.personalDetails}>
                  <div className={styles.personalDetails1}>
                    Personal Details
                  </div>
                  <div className={styles.forms}>
                    <div className={styles.textfield}>
                      <div className={styles.professionalFieldContainer}>
                        <span
                          className={styles.professionalField}
                        >{`Professional field `}</span>
                        <span className={styles.span}>*</span>
                      </div>
                      <div className={styles.input}>
                        <input className={styles.select} 
                          style={{width: '100%' , border: "none"}}
                          placeholder={ProfileDataLocal.professional_field}
                          onChange={handleProfessional_fieldChange}

                          />
                        {/* <div className={styles.select}>Select...</div>
                        <img
                          className={styles.icon}
                          alt=""
                          src="/icon-52.svg"
                        /> */}
                      </div>
                    </div>
                    <div className={styles.row2}>
                      <div className={styles.textfield1}>
                        <div className={styles.educationalLevel}>
                          <span className={styles.educationalLevel1}>
                            Educational level
                          </span>
                          <span className={styles.span1}>*</span>
                        </div>
                        <div className={styles.input1}>
                          <input className={styles.select1}
                            style={{width: '100%' , border: "none"}}
                            placeholder={ProfileDataLocal.education}
                            onChange={handleEducationChange}
                            />
                          {/* <div className={styles.select1}>Select...</div>
                          <img
                            className={styles.icon1}
                            alt=""
                            src="/icon-52.svg"
                          /> */}
                        </div>
                      </div>
                      {/* <div className={styles.textfield2}>
                        <div className={styles.education}>
                          <span className={styles.education1}>
                            <b className={styles.education2}>Education</b>
                            <span className={styles.span2}>{` `}</span>
                          </span>
                          <span className={styles.span3}>
                            <span className={styles.span4}>*</span>
                          </span>
                        </div>
                        <input className={styles.input2} type="text" placeholder={ProfileDataLocal.education} onChange={handleEducationChange} />
                      </div> */}
                    </div>
                    <div className={styles.row3}>
                      <div className={styles.textfield3}>
                        <div className={styles.dateOfStudy}>Date of study</div>
                        <div className={styles.dropdown}>
                          <input
                            className={styles.input3}
                            placeholder={ProfileDataLocal.education_date || "09/08/2020 - 05/06/2024"}
                            type="text"
                            onChange={handleEducation_dateChange}
                          />
                          <img
                            className={styles.icon2}
                            alt=""
                            src="/icon-7.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.textfield4}>
                        <div className={styles.namesOfTheContainer}>
                          <span
                            className={styles.namesOfThe}
                          >{`Names of the institution `}</span>
                          <span className={styles.span5}>*</span>
                        </div>
                        <div className={styles.dropdown1}>
                          <input
                            className={styles.select2}
                            style={{width: '100%' , border: "none"}}
                            placeholder={ProfileDataLocal.name_institution}
                            type="text"
                            onChange={handleName_institutionChange}
                          />
                          {/* <div className={styles.select2}>Select...</div>
                          <img
                            className={styles.icon3}
                            alt=""
                            src="/icon-52.svg"
                          /> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.inputArea}>
              <div className={styles.separatorMark1}>
                <div className={styles.historyBox} />
              </div>
              <div className={styles.expDataRow}>
                <div className={styles.personalDetails2}>
                  <div className={styles.jobInformation}>Job Information</div>
                  <div className={styles.forms1}>
                    <div className={styles.textfield5}>
                      <div className={styles.desiredPositionContainer}>
                        <span
                          className={styles.desiredPosition}
                        >{`Desired position `}</span>
                        <span className={styles.span6}>*</span>
                      </div>
                      <div className={styles.input4}>
                        <input
                          className={styles.select3}
                          style={{width: '100%' , border: "none"}}
                          placeholder={ProfileDataLocal.desired_position}
                          type="text"
                          onChange={handleDesired_positionChange}
                        />
                        {/* <div className={styles.select3}>Select...</div>
                        <img
                          className={styles.icon4}
                          alt=""
                          src="/icon-52.svg"
                        /> */}
                      </div>
                    </div>
                    <div className={styles.row31}>
                      <div className={styles.textfield6}>
                        <div className={styles.typeOfWork}>Type of work</div>
                        <div className={styles.dropdown2}>
                          <input
                            className={styles.select4}
                            style={{width: '100%' , border: "none"}}
                            placeholder={ProfileDataLocal.type_of_work}
                            type="text"
                            onChange={handleType_of_workChange}
                          />
                          {/* <div className={styles.select4}>Select...</div>
                          <img
                            className={styles.icon5}
                            alt=""
                            src="/icon-52.svg"
                          /> */}
                        </div>
                      </div>
                      <div className={styles.textfield7}>
                        <div className={styles.operatingModeContainer}>
                          <span
                            className={styles.operatingMode}
                          >{`Operating mode `}</span>
                          <span className={styles.span7}>*</span>
                        </div>
                        <div className={styles.dropdown3}>
                          <input
                            className={styles.select5}
                            style={{width: '100%' , border: "none"}}
                            placeholder={ProfileDataLocal.operating_mode}
                            type="text"
                            onChange={handleOperating_modeChange}
                          />
                          {/* <div className={styles.select5}>Select...</div>
                          <img
                            className={styles.icon6}
                            alt=""
                            src="/icon-52.svg"
                          /> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.contactInput}>
                <div className={styles.areaTextbox}>
                  <div className={styles.separatorMark2} />
                </div>
                <div className={styles.personalDetails3}>
                  <div className={styles.workExperience}>Work Experience</div>
                  <div className={styles.forms2}>
                    <div className={styles.textfield8}>
                      <div className={styles.nameOfTheContainer}>
                         <span
                          className={styles.nameOfThe}
                        >{`Name of the organization `}</span>
                        <span className={styles.span8}>*</span>
                        <div className={styles.dropdown3}>
                          
                          <input
                            className={styles.select5}
                            style={{width: '100%' , border: "none"}}
                            placeholder={ProfileDataLocal.name_organization}
                            type="text"
                            onChange={handleName_organizationChange}
                          />
                          {/* <div className={styles.select6}>Select...</div>
                          <img
                            className={styles.icon7}
                            alt=""
                            src="/icon-52.svg"
                          /> */}
                        </div>
                        
                       
                      
                      {/* <input className={styles.input5} type="text" /> */}
                      </div>
                    </div>
                    <div className={styles.row21}>
                      <div className={styles.textfield9}>
                        <div className={styles.workExperience1}>
                          <b className={styles.workExperience2}>
                            Work experience
                          </b>
                          <span className={styles.span9}>*</span>
                        </div>
                        <div className={styles.input6}>
                          <input
                            className={styles.select6}
                            style={{width: '100%' , border: "none"}}
                            placeholder={ProfileDataLocal.experience_name}
                            type="text"
                            onChange={handleExperience_nameChange}
                          />
                          {/* <div className={styles.select6}>Select...</div>
                          <img
                            className={styles.icon7}
                            alt=""
                            src="/icon-52.svg"
                          /> */}
                        </div>
                      </div>
                      <div className={styles.textfield10}>
                        <div className={styles.position}>
                          <span
                            className={styles.position1}
                          >{`Position `}</span>
                          <span className={styles.span10}>*</span>
                        </div>
                        <div className={styles.dropdown3}>
                        <input className={styles.select5} type="text" 
                        style={{width: '100%' , border: "none"}}
                        placeholder={ProfileDataLocal.position}
                        onChange={handlePositionChange}
                        />
                        </div>
                      </div>
                    </div>
                    <div className={styles.row32}>
                      <div className={styles.textfield11}>
                        <div className={styles.passageTime}>Passage time</div>
                        <div className={styles.dropdown4}>
                          <input
                            className={styles.input8}
                            placeholder={ ProfileDataLocal.passage_time || "09/08/2021 - 05/06/2022"}
                            type="text"
                            onChange={handlePassage_timeChange}
                            style={{width: '100%' , border: "none"}}
                          />
                          <img
                            className={styles.icon8}
                            alt=""
                            src="/icon-7.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.textfield12}>
                        <div className={styles.namesOfTheContainer1}>
                          <span
                            className={styles.namesOfThe1}
                          >{`Names of the institution `}</span>
                          <span className={styles.span11}>*</span>
                        </div>
                        <div className={styles.dropdown5}>
                          <input
                            className={styles.select7}
                            style={{width: '100%' , border: "none"}}
                            placeholder={ProfileDataLocal.name_institution}
                            type="text"
                            onChange={handleName_institutionChange}
                          />
                          {/* <div className={styles.select7}>Select...</div>
                          <img
                            className={styles.icon9}
                            alt=""
                            src="/icon-52.svg"
                          /> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.viewButtonFrame}>
                  <textarea
                    className={styles.personalDetailsFrame}
                    placeholder={ ProfileDataLocal.experience || "Write about your work experience"}
                    rows={9}
                    cols={36}
                    onChange={handleExperienceChange}
                    style={{width: '100%' , border: "none"}}
                  />
                </div>
                <div className={styles.saveProfileButton1}>
                  <button className={styles.buttonView}>
                    <div className={styles.addAnotherWork}>
                      Add another work experience
                    </div>
                  </button>
                </div>
              </div>
              <div className={styles.experienceFrame}>
                <div className={styles.personalDetailsFrame1} />
              </div>
            </div>
            <div className={styles.line}>
              <div className={styles.personalDetails4}>
                <div className={styles.contacts}>Contacts</div>
                <div className={styles.forms3}>
                  <div className={styles.textfield13}>
                    <div className={styles.location}>
                      <span className={styles.location1}>{`Location `}</span>
                      <span className={styles.span12}>*</span>
                    </div>
                    <div className={styles.input9}>
                      <input
                        className={styles.select8}
                        style={{width: '100%' , border: "none"}}
                        placeholder={ProfileDataLocal.location}
                        type="text"
                        onChange={handleLocationChange}
                      />
                      {/* <div className={styles.select8}>Select...</div>
                      <img
                        className={styles.icon10}
                        alt=""
                        src="/icon-52.svg"
                      /> */}
                    </div>
                  </div>
                  <div className={styles.row22}>
                    <div className={styles.textfield14}>
                      <b className={styles.citizenship}>
                        <span
                          className={styles.citizenship1}
                        >{`Citizenship  `}</span>
                        <span className={styles.span13}>*</span>
                      </b>
                      <div className={styles.input10}>
                        <input
                          className={styles.select8}
                          style={{width: '100%' , border: "none"}}
                          placeholder={ProfileDataLocal.citizenship}
                          type="text"
                          onChange={handleCitizenshipChange}
                        />
                        {/* <div className={styles.kazakhstan}>Kazakhstan</div>
                        <img
                          className={styles.icon11}
                          alt=""
                          src="/icon-52.svg"
                        /> */}
                      </div>
                    </div>
                    <div className={styles.textfield15}>
                      <div className={styles.cityOrDistrictContainer}>
                        <span
                          className={styles.cityOrDistrict}
                        >{`City or district `}</span>
                        <span className={styles.span14}>*</span>
                      </div>
                      <div className={styles.dropdown5}>
                      <input className={styles.select8} type="text"
                      style={{width: '100%' , border: "none"}} placeholder={ProfileDataLocal.city} onChange={handleCityChange} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.lineWrapper}>
              <div className={styles.line1}>
                <div className={styles.personalDetails5} />
                <div className={styles.lineParent}>
                  <div className={styles.line2}>
                    <b className={styles.personalQualities}>
                      Personal qualities
                    </b>
                    <textarea
                      className={styles.skillsSummary}
                      placeholder={"Write your Bio here e.g your hobbies, interests ETC" || ProfileDataLocal.personal_qualities}
                      rows={10}
                      cols={36}
                      onChange={handlePersonal_qualitiesChange}
                    />
                  </div>
                  <div className={styles.textfieldRow}>
                    <div className={styles.workExperiencePassage} />
                    <div className={styles.positionInput}>
                      <b className={styles.certificatesAndAchievements}>
                        Certificates and achievements
                      </b>


                      <div className={styles.rectangleParent} style={{marginLeft: '65px'}}>
                        <div className={styles.frameChild}></div>
                        <label className={styles.addAnotherWorkExperienceBt} htmlFor="fileInput">
                          <img
                            className={styles.featherIconsPlusCircle}
                            loading="eager"
                            alt=""
                            src="/feather-icons--pluscircle.svg"
                          />
                        </label>
                        <input
                          id="fileInput"
                          type="file"
                          accept=".pdf"
                          onChange={handleFileChange}
                          className={styles.fileInput}
                        />
                          {ProfileDataLocal.certificates && (
                            <div className={styles.certificatesAndAchievements1}>
                              <div className={styles.addCertificatesFrame}>
                                <div className={styles.addCertificates}>{`File`}</div>
                                <img
                                  className={styles.deleteIcon}
                                  style={{width: '25px' , height: '25px'}}
                                  alt="Delete"
                                  src="/delete.svg"
                                  onClick={handleFileRemove}
                                />
                              </div>
                            </div>
                          )}
                        {!ProfileDataLocal.certificates && (
                          <div className={styles.certificatesAndAchievements1}>
                            <div className={styles.addCertificatesFrame}>
                              <div className={styles.addCertificates} style={{marginLeft: '-200px'}}>Add certificates</div>
                            </div>
                            <div className={styles.browseFileOr} style={{marginLeft: '-200px'}}>
                              Browse file or drop here, only pdf
                            </div>
                          </div>
                        )}
                      </div>
                    

                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.browseFileOrDropHerePdfParent}>
              <div className={styles.browseFileOrDropHerePdf} />
              <div className={styles.addCertificates1}>
                <div className={styles.featherIconsPluscircle}>
                  <b className={styles.yourResumecv}>Your Resume/CV</b>
                  <div className={styles.rectangleGroup}>
                    <div className={styles.frameItem} />
                    <div className={styles.personalQualitiesText}>
                      <img
                        className={styles.featherIconsPlusCircle1}
                        loading="eager"
                        alt=""
                        src="/feather-icons--pluscircle.svg"
                      />
                    </div>
                    <div className={styles.cVUpload}>
                      <div className={styles.personalInfo}>
                        <div className={styles.addResumecv}>Add Resume/CV</div>
                      </div>
                      <div className={styles.browseFileOr1}>
                        Browse file or drop here, only pdf
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className={styles.viewButton}>
            <button className={styles.buttonView1} onClick={handleSave}>
              <div className={styles.saveProfile}>Save Profile</div>
            </button>
          </div>
        </section>
        ) : (
          <div>Loading...</div>
        )
      }
      </main>
    </div>
  );
};

export default DashboardSettingsAccount1;
