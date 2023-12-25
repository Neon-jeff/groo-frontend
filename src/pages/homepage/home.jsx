import React from 'react'
import Header from '../../components/homeComponents/header'
import Nav from '../../components/navigation/Nav';
import Video from '../../components/homeComponents/video';
import Problems from '../../components/homeComponents/problems';
import Features from '../../components/homeComponents/features';
import Steps from '../../components/homeComponents/steps';
import Benefits from '../../components/homeComponents/benefits';
import Reviews from '../../components/homeComponents/reviews';
import Faq from '../../components/homeComponents/faqs';
import Stats from '../../components/homeComponents/stats';
import Footer from '../../components/navigation/footer';
import Calculator from '../../components/dashboardComponents/Calculator';
import HomepageCal from '../../components/homeComponents/homeCal';

export default function Home() {
  return (
    <div className='w-screen overflow-x-hidden'>
      <Nav/>
      <Header />
      <Video/>
      <Problems/>
      <Features/>
      <Steps/>
      <Benefits/>
      <Reviews/>
      <HomepageCal/>
      <Faq/>
      <Stats/>
      <Footer/>
    </div>
  );
}

