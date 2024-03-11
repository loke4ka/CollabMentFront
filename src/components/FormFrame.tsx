import { FunctionComponent } from "react";
import PrimaryButton from "./PrimaryButton";
import styles from "./FormFrame.module.css";

const FormFrame: FunctionComponent = () => {
  return (
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
        <PrimaryButton
          name1="Name"
          johnCarterPlaceholder="John Carter"
          group41="/group-41.svg"
          phoneNumber="Phone Number"
          groupPlaceholder="+7 (123) - 456 - 7890"
          group="/group.svg"
        />
        <PrimaryButton
          name1="Email "
          johnCarterPlaceholder="Email address"
          group41="/group-12.svg"
          phoneNumber="Company"
          groupPlaceholder="Company name"
          group="/group-3984.svg"
          propPadding="var(--padding-2xl) var(--padding-5xl) var(--padding-6xl) var(--padding-xl)"
          propWidth="119px"
          propHeight="16px"
          propPadding1="var(--padding-mid) var(--padding-5xl) var(--padding-2xl) var(--padding-2xl)"
          propWidth1="133px"
        />
      </div>
    </div>
  );
};

export default FormFrame;
