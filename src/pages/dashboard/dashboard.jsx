import React from 'react'
import SideNav from '../../components/dashboardComponents/SideNav'
import MainContent from '../../components/dashboardComponents/mainContent'
import Aside from '../../components/dashboardComponents/aside'
import SideNavMobile from '../../components/dashboardComponents/SideNavMobile'

export default function () {
  return (
    <div className='h-full flex overflow-x-hidden'>
        <SideNavMobile/>
        <SideNav/>
        <MainContent/>
        <Aside/>
    </div>
  )
}

