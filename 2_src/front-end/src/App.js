import React from 'react';
import Navbar from './components/common/Navbar';
import Sidebar from './components/common/Sidebar';
import Footer from './components/common/Footer';
import JobList from './components/JobMain/JobList';
import MyConsultingReservation from './components/MyConsulting/MyConsultingReservation'
import MyEduConsultingHeader from './components/MyConsulting/MyEduConsultingHeader'

export default function App() {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <MyEduConsultingHeader />
      <MyConsultingReservation />
      {/* <Footer /> */}
    </div>
  );
  }