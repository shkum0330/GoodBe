import React from 'react';
import Navbar from './components/common/Navbar';
import Sidebar from './components/common/Sidebar';
import Footer from './components/common/Footer';
import JobList from './components/JobMain/JobList';
import MyConsultingReservation from './components/MyConsulting/MyConsultingReservation'
import MyEduConsultingHeader from './components/MyConsulting/MyEduConsultingHeader'
import MyBoardHeader from './components/MyBoard/MyBoardHeader'
import MyBoardContainer from './components/MyBoard/MyBoardContainer'


export default function App() {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <MyBoardHeader />
      <MyBoardContainer />
      {/* <Footer /> */}
    </div>
  );
  }