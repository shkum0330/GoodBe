import Navbar from './components/common/Navbar';
import Sidebar from './components/common/Sidebar';
import Footer from './components/common/Footer';
import JobList from './components/JobMain/JobList';
import JobTab from './components/JobMain/JobTab';
import EduList from './components/EduList/EduList';
import SearchJob from './components/JobMain/SearchJob';
import EduSearchHeader from './components/EduList/EduSearchHeader';
import MypageHome from './components/MyPageHome/MypageHome';
import MyPageHomeHeader from './components/MyPageHome/MyPageHomeHeader';
import MyPageInformationHeader from './components/MyInfoChange/MyPageInformationHeader';
  

import React from 'react'

export default function App() {
  return (
    <div>
       <Sidebar/>
      <Navbar/>
      <JobList/>
      {/* <MyPageInformationHeader/> */}
      {/* <MyPageHomeHeader/> */}
      {/* <MypageHome/> */}
      <Footer/>

    </div>


  );


 
}
