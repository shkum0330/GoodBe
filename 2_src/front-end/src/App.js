
import './App.css';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import JobList from './components/JobMain/JobList';
import JobTab from './components/JobMain/JobTab';
import SearchJob from './components/JobMain/SearchJob';
import EduList from './components/EduList/EduList';
import EduRecommendRelatedJob from './components/JobDetail/EduRecommendRelatedJob';
import JobDetailContent from './components/JobDetail/JobDetailContent';
import JobHeader from './components/JobDetail/JobHeader';
import MyPageHomeHeader from './components/MyPageHome/MyPageHomeHeader';
import MypageHome from './components/MyPageHome/MypageHome';




function App() {
  return (
    <div>
    <Navbar/>
    {/* JobDetail */}
    {/* <JobHeader/>
    <JobDetailContent/>
    <EduRecommendRelatedJob/> */}


    {/* JobMain */}
    {/* <SearchJob/>
    <JobTab/>
    <JobList/>
    <Footer/> */}

    {/* MyPageHome  */}
    <MyPageHomeHeader/>
    <MypageHome/>



    {/* <EduList/> */}
    </div>
  );
}

export default App;
