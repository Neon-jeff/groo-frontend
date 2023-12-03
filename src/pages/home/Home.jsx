import React from 'react'
import Header from '../../components/homeComponents/header'
import Nav from '../../components/navigation/Nav';
import Video from '../../components/homeComponents/video';
import Problems from '../../components/homeComponents/problems';

export default function Home() {
  return (
    <>
      <Nav/>
      <Header />
      <Video/>
      <Problems/>
    </>
  );
}

