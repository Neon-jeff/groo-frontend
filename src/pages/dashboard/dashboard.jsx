import React, { useEffect, useState } from 'react'
import SideNav from '../../components/dashboardComponents/SideNav'
import MainContent from '../../components/dashboardComponents/mainContent'
import Aside from '../../components/dashboardComponents/aside'
import SideNavMobile from '../../components/dashboardComponents/SideNavMobile'
import AsideMobile from '../../components/dashboardComponents/AsideMobile'

export default function () {
  let [showAside,setShowAside] =useState(false)
  return (
    <div className='h-full bg-dash flex overflow-x-hidden'>
        <SideNavMobile/>
        <SideNav/>
        <MainContent showMobile={setShowAside} mobile={showAside}/>
        <Aside/>
        <AsideMobile show={showAside} setShow={setShowAside}/>
    </div>
  )
}

