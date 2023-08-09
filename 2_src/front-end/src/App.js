
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
import BoardList from './components/BoardMain/BoardList';
import AboutAccount from './components/Login/AboutAccount';
import GoLogin from './components/Login/GoLogin';
import InsertLoginInfo from './components/Login/InsertLoginInfo';
import SocialLogin from './components/Login/SocialLogin';
import {React, Routes, Route} from 'react'
import Advertise from './components/Main/Advertise';
import SearchMain from './components/Main/SearchMain';
import EduExampleRecommend from './components/Main/EduExampleRecommend';
import EduTop6 from './components/Main/EduTop6';
import EduNear from './components/Main/EduNear';
import MyBoardContainer from './components/MyBoard/MyBoardContainer';
import MyBoardHeader from './components/MyBoard/MyBoardContainer';


export default function App() {
  
  return (

    <Routes>
      <Route path = "/" element={<Main />} />
      <Route path = "/MyBoard" element={<MyBoard/>} />
      <Route path = "/BoardDetail" element={<BoardDetail/>} />
      <Route path = "/BoardEdit" element={<BoardEdit/>} />
      <Route path = "/BoardMain" element={<BoardMain/>} />
      <Route path = "/BoardWrite" element={<BoardWrite/>} />
      <Route path = "/CamChat" element={<CamChat/>} />
      <Route path = "/CamChatReview" element={<CamChatReview/>} />
      <Route path = "/Chatroom" element={<Chatroom/>} />
      <Route path = "/Curriculumn" element={<Curriculumn/>} />
      <Route path = "/EduList" element={<EduList/>} />
      <Route path = "/EduReview" element={<EduReview/>} />
      <Route path = "/EduDetail" element={<EduDetail/>} />
      <Route path = "/EmailFind" element={<EmailFind/>} />
      <Route path = "/InstitutionSignUp" element={<InstitutionSignUp/>} />
      <Route path = "/JobAnalyze" element={<JobAnalyze/>} />
      <Route path = "/JobDetail" element={<JobDetail/>} />
      <Route path = "/JobMain" element={<JobMain/>} />
      <Route path = "/Login" element={<Login/>} />
      <Route path = "/MyBoard" element={<MyBoard/>} />
      <Route path = "/MyConsulting" element={<MyConsulting/>} />
      <Route path = "/MyEduLike" element={<MyEduLIke/>} />
      <Route path = "/MyInfoChange" element={<MyInfoChange/>} />
      <Route path = "/MyJobLike" element={<MyJobLike/>} />
      <Route path = "/MyEduLike" element={<MyEduLike/>} />
      <Route path = "/MyEduLike" element={<MyEduLike/>} />
      <Route path = "/MyEduLike" element={<MyEduLike/>} />
      <Route path="/MyPageHome" element={<MyPageHome/>} />
      <Route path = "/PasswordFind" element={<PasswordFind/>} />
      <Route path = "/PasswordResult" element={<PasswordResult/>} />
      <Route path = "/PasswordSearch" element={<PasswordSearch/>} />
      <Route path = "/Reservation" element={<Reservation/>} />
      <Route path = "/SignUp" element={<SignUp/>} />
      <Route path = "/TeamInfo" element={<TeamInfo/>} />
      <Route path = "/UserWithdraw" element={<UserWithdraw/>} />
      <Route path = "/BoardDetail" element={<BoardDetail/>} />



    </Routes>
  );
};

 
  
