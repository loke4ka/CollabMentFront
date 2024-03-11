import { FunctionComponent } from "react";
import styles from "./FrameComponent4.module.css";

const FrameComponent4: FunctionComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.frameC}>
        <div className={styles.fRAMEB}>
          <div className={styles.frameParent}>
            <div className={styles.groupAParent}>
              <div className={styles.groupA} />
              <div className={styles.div}>1</div>
            </div>
            <div className={styles.rectangleWrapper}>
              <div className={styles.frameItem} />
            </div>
            <div className={styles.ellipseParent}>
              <div className={styles.frameInner} />
              <div className={styles.div1}>2</div>
            </div>
            <div className={styles.rectangleContainer}>
              <div className={styles.rectangleDiv} />
            </div>
            <div className={styles.ellipseGroup}>
              <div className={styles.ellipseDiv} />
              <div className={styles.div2}>3</div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.rectangleGroup}>
                <div className={styles.frameChild1} />
                <div className={styles.frameChild2} />
              </div>
            </div>
            <div className={styles.ellipseContainer}>
              <div className={styles.frameChild3} />
              <div className={styles.div3}>4</div>
            </div>
          </div>
        </div>
        <div className={styles.lineSeparator} />
      </div>
      <div className={styles.frameD}>
        <div className={styles.frameE}>
          <h3 className={styles.whatsYourProject}>
            What’s your project budget?
          </h3>
          <div className={styles.pleaseSelectThe}>
            Please select the project budget range you have in mind.
          </div>
        </div>
      </div>
      <div className={styles.frameF}>
        <div className={styles.fRAMEC}>
          <div className={styles.frameG}>
            <div className={styles.frameGChild} />
            <img
              className={styles.frameGItem}
              loading="eager"
              alt=""
              src="/group-37243.svg"
            />
            <div className={styles.emptyFrame}>$5.000 - $10.000</div>
          </div>
          <div className={styles.frameG1}>
            <div className={styles.frameGInner} />
            <div className={styles.frameGChild1} />
            <div className={styles.div4}>$10.000 - $20.000</div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <textarea
            className={styles.frameTextarea}
            placeholder="$20.000 - $50.000"
            rows={6}
            cols={14}
          />
          <textarea
            className={styles.frameChild4}
            placeholder="$50.000 +"
            rows={6}
            cols={14}
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
