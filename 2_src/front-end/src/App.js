import React from 'react';
import Navbar from './components/common/Navbar';
import Sidebar from './components/common/Sidebar';
import Footer from './components/common/Footer';
import JobList from './components/JobMain/JobList';
import MyConsultingReservation from './components/MyConsulting/MyConsultingReservation'
import MyEduConsultingHeader from './components/MyConsulting/MyEduConsultingHeader'
import MyBoardHeader from './components/MyBoard/MyBoardHeader'
import MyBoardContainer from './components/MyBoard/MyBoardContainer'
import Advertise from './components/Main/Advertise'
import SearchMain from './components/Main/SearchMain'
import EduExampleRecommend from './components/Main/EduExampleRecommend'

export default function App() {
  return (
    <div>
      <Navbar />
      <Advertise />
      <SearchMain />
      <EduExampleRecommend />
      {/* <Footer /> */}
    </div>
  );
  }