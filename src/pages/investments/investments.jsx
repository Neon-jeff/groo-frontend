import React, { useState } from "react";
import SideNav from "../../components/dashboardComponents/SideNav";
import MainContent from "../../components/dashboardComponents/mainContent";
import Aside from "../../components/dashboardComponents/aside";
import SideNavMobile from "../../components/dashboardComponents/SideNavMobile";
import AsideMobile from "../../components/dashboardComponents/AsideMobile";
import InvestmentHistory from "./investmentContent";
import ProfileCard from "../../components/dashboardComponents/profileCard";
import InvestmentPerformance from "./perfomance";
import Loader from '../../components/Modal/modalLoader'

export default function Investments () {
//   let [showAside, setShowAside] = useState(false);
  return (
    <div className="h-full bg-dash flex overflow-x-hidden">
      <Loader/>
      <SideNavMobile />
      <SideNav />
      <div className="w-full md:ml-52 p-10 max-sm:p-2 max-sm:mt-36 flex flex-col gap-5">
        <div className="w-1/4 self-end max-sm:hidden">
          <ProfileCard />
        </div>
        <h1 className="text-2xl font-semibold">My Investments</h1>
        <div className="bg-gray-100 p-10 max-sm:p-5 w-full gap-5 max-sm:gap-5 flex flex-col items-center rounded-xl mx-auto">
          <InvestmentPerformance />
          <InvestmentHistory />
        </div>
      </div>
      {/* <Aside />
      <AsideMobile show={showAside} setShow={setShowAside} /> */}
    </div>
  );
}
