
import Navbar from './components/common/Navbar';
// import Sidebar from './components/common/Sidebar';
// import Footer from './components/common/Footer';
// import JobList from './components/JobMain/JobList';
// import JobTab from './components/JobMain/JobTab';
// import EduList from './components/EduList/EduList';
// import SearchJob from './components/JobMain/SearchJob';
// import EduSearchHeader from './components/EduList/EduSearchHeader';
// import MypageHome from './components/MyPageHome/MypageHome';
// import MyPageHomeHeader from './components/MyPageHome/MyPageHomeHeader';
// import MyPageInformationHeader from './components/MyInfoChange/MyPageInformationHeader';
// import BoardList from './components/BoardMain/BoardList';
// import AboutAccount from './components/Login/AboutAccount';
// import GoLogin from './components/Login/GoLogin';
// import InsertLoginInfo from './components/Login/InsertLoginInfo';
// import SocialLogin from './components/Login/SocialLogin';
import React from 'react'
import GoLogin from './components/SignUp/GoLogin';
import AboutAccount from './components/Login/AboutAccount';
import Advertise from './components/Main/Advertise';
import SearchMain from './components/Main/SearchMain';
import EduExampleRecommend from './components/Main/EduExampleRecommend';
import EduTop6 from './components/Main/EduTop6';
import EduNear from './components/Main/EduNear';




export default function App() {
  return (
    <div>
      <Navbar/>
      <Advertise/>
      <SearchMain/>
      <EduExampleRecommend/>
      <EduTop6/>
      <EduNear/>
    </div>
  );

  }