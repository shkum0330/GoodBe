
<<<<<<< HEAD
=======
import './App.css';
import Navbar from './components/common/Navbar';
import Sidebar from './components/common/Sidebar';
import Footer from './components/common/Footer';
import JobList from './components/JobMain/JobList';
import JobTab from './components/JobMain/JobTab';
import EduList from './components/EduList/EduList';
import SearchJob from './components/JobMain/SearchJob';
<<<<<<< HEAD
import EduList from './components/EduList/EduList';
import EduRecommendRelatedJob from './components/JobDetail/EduRecommendRelatedJob';
import JobDetailContent from './components/JobDetail/JobDetailContent';
import JobHeader from './components/JobDetail/JobHeader';
import MyPageHomeHeader from './components/MyPageHome/MyPageHomeHeader';
import MypageHome from './components/MyPageHome/MypageHome';



=======
import EduSearchHeader from './components/EduList/EduSearchHeader'
import MyLikeEduHeader from './components/MyEduLike/MyLikeEduHeader';
import MyLikeEduList from './components/MyEduLike/MyLikeEduList'

const Container=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
function App() {
  return (
<<<<<<< HEAD
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
=======
   <div>
    <Sidebar />
    <Navbar />
    <MyLikeEduHeader />
    <MyLikeEduList />


    {/* <EduList /> */}
   </div>
>>>>>>> 40d54734e44c22e7b866605ba1f9cafd36526801
  );
}

export default App;
