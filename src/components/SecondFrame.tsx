import { FunctionComponent } from "react";
import styles from "./SecondFrame.module.css";

const SecondFrame: FunctionComponent = () => {
  return (
    <div className={styles.secondFrame}>
      <div className={styles.secondFrameChild} />
      <div className={styles.thirdFrame}>
        <div className={styles.fourthFrame}>
          <div className={styles.fifthFrame}>
            <div className={styles.ellipseParent}>
              <div className={styles.frameChild} />
              <div className={styles.lineSection}>1</div>
            </div>
            <div className={styles.fifthFrameInner}>
              <div className={styles.frameItem} />
            </div>
            <div className={styles.ellipseGroup}>
              <div className={styles.frameInner} />
              <div className={styles.div}>2</div>
            </div>
            <div className={styles.fifthFrameChild}>
              <div className={styles.rectangleDiv} />
            </div>
            <div className={styles.ellipseContainer}>
              <div className={styles.ellipseDiv} />
              <div className={styles.div1}>3</div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.frameChild1} />
            </div>
            <div className={styles.ellipseParent1}>
              <div className={styles.frameChild2} />
              <div className={styles.div2}>4</div>
            </div>
          </div>
        </div>
        <div className={styles.sixthFrame} />
      </div>
      <div className={styles.groupedFrame}>
        <div className={styles.submitButtonFrame}>
          <img
            className={styles.submitButtonFrameChild}
            loading="eager"
            alt=""
            src="/group-37301.svg"
          />
          <div className={styles.secondaryBtn}>
            <h3 className={styles.submitYourQuote}>
              Submit your quote request
            </h3>
            <div className={styles.pleaseReviewAll}>
              Please review all the information you previously typed in the past
              steps, and if all is okay, submit your message to receive a
              project quote in 24 - 48 hours.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.primaryBTN}>
        <button className={styles.primaryBtn}>
          <div className={styles.buttonText}>Submit</div>
        </button>
      </div>
    </div>
  );
};

export default SecondFrame;
