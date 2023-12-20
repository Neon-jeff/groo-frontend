import React, { useState } from "react";
import SideNav from "../../components/dashboardComponents/SideNav";
import MainContent from "../../components/dashboardComponents/mainContent";
import Aside from "../../components/dashboardComponents/aside";
import SideNavMobile from "../../components/dashboardComponents/SideNavMobile";
import AsideMobile from "../../components/dashboardComponents/AsideMobile";
import InvestmentHistory from "./investmentContent";

export default function Investments () {
//   let [showAside, setShowAside] = useState(false);
  return (
    <div className="h-full bg-dash flex overflow-x-hidden">
      <SideNavMobile />
      <SideNav />
      <InvestmentHistory />
      {/* <Aside />
      <AsideMobile show={showAside} setShow={setShowAside} /> */}
    </div>
  );
}
