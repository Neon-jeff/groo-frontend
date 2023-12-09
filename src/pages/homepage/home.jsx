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
      <Faq/>
      <Stats/>
    </div>
  );
}

