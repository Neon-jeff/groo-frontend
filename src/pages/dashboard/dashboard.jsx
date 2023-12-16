import React from 'react'
import SideNav from '../../components/dashboardComponents/SideNav'
import MainContent from '../../components/dashboardComponents/mainContent'
import Aside from '../../components/dashboardComponents/aside'

export default function () {
  return (
    <div className='h-full flex overflow-x-hidden'>
        <SideNav/>
        <MainContent/>
        <Aside/>
    </div>
  )
}

