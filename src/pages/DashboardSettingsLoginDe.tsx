import { FunctionComponent } from "react";
import SideBarDashboardApplica from "../components/SideBarDashboardApplica";
import FrameComponent2 from "../components/FrameComponent2";
import ApplicantDashboardLoginDe from "../components/ApplicantDashboardLoginDe";
import styles from "./DashboardSettingsLoginDe.module.css";

const DashboardSettingsLoginDe: FunctionComponent = () => {
  return (
    <div className={styles.dashboardSettingsLoginDe}>
      <SideBarDashboardApplica />
      <main className={styles.frameTopNav}>
        <FrameComponent2 />
        <ApplicantDashboardLoginDe />
      </main>
    </div>
  );
};

export default DashboardSettingsLoginDe;
