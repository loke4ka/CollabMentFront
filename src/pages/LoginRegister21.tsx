import { FunctionComponent } from "react";
import styles from "./LoginRegister21.module.css";

const LoginRegister21: FunctionComponent = () => {
  return (
    <div className={styles.loginRegister}>
      <div className={styles.registerFrame}>
        <h2 className={styles.getAProject}>Get a project quote</h2>
        <div className={styles.pleaseFillThe}>
          Please fill the form below to receive a quote for your project. Feel
          free to add as much detail as needed.
        </div>
      </div>
      <div className={styles.innerFrame}>
        <div className={styles.formFrame}>
          <div className={styles.formFrameChild} />
          <div className={styles.labelFrameA}>
            <div className={styles.labelFrameB}>
              <div className={styles.dividerParent}>
                <div className={styles.divider}>
                  <div className={styles.ellipseGroupA} />
                  <div className={styles.rectangleGroup}>1</div>
                </div>
                <div className={styles.mainButtonFrame}>
                  <div className={styles.contactInfoFrame}>
                    <div className={styles.contactInfoFrameChild} />
                    <div className={styles.backgroundFrame} />
                  </div>
                </div>
                <div className={styles.divider1}>
                  <div className={styles.dividerChild} />
                  <div className={styles.div}>2</div>
                </div>
                <div className={styles.divider2}>
                  <div className={styles.dividerItem} />
                </div>
                <div className={styles.divider3}>
                  <div className={styles.dividerInner} />
                  <div className={styles.div1}>3</div>
                </div>
                <div className={styles.divider4}>
                  <div className={styles.rectangleDiv} />
                </div>
                <div className={styles.divider5}>
                  <div className={styles.ellipseDiv} />
                  <div className={styles.div2}>4</div>
                </div>
              </div>
            </div>
            <div className={styles.textFrameA} />
          </div>
          <div className={styles.placeholderTextFrame}>
            <b className={styles.contactDetails}>Contact details</b>
            <div className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet consectetur adipisc.
            </div>
          </div>
          <div className={styles.inputGroupFrame}>
            <div className={styles.primaryButton}>
              <div className={styles.formInput}>
                <div className={styles.name}>Name</div>
                <div className={styles.johnCarter}>
                  <div className={styles.johnCarterChild} />
                  <input
                    className={styles.johnCarter1}
                    placeholder="John Carter"
                    type="text"
                  />
                  <img
                    className={styles.johnCarterItem}
                    alt=""
                    src="/group-41.svg"
                  />
                </div>
              </div>
              <div className={styles.phoneNumberCompany}>
                <div className={styles.phoneNumber}>Phone Number</div>
                <div className={styles.companyName}>
                  <div className={styles.companyNameChild} />
                  <input
                    className={styles.group}
                    placeholder="+7 (123) - 456 - 7890"
                    type="text"
                  />
                  <img className={styles.groupIcon} alt="" src="/group3.svg" />
                </div>
              </div>
            </div>
            <div className={styles.primaryButton1}>
              <div className={styles.emailParent}>
                <div className={styles.email}>{`Email `}</div>
                <div className={styles.rectangleParent}>
                  <div className={styles.frameChild} />
                  <input
                    className={styles.emailAddress}
                    placeholder="Email address"
                    type="text"
                  />
                  <img
                    className={styles.groupIcon1}
                    alt=""
                    src="/group-12.svg"
                  />
                </div>
              </div>
              <div className={styles.companyParent}>
                <div className={styles.company}>Company</div>
                <div className={styles.rectangleContainer}>
                  <div className={styles.frameItem} />
                  <input
                    className={styles.companyName1}
                    placeholder="Company name"
                    type="text"
                  />
                  <img
                    className={styles.frameInner}
                    alt=""
                    src="/group-3984.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.primaryBtn}>
          <button className={styles.primaryBtn1}>
            <div className={styles.buttonText}>Next step</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister21;
