
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
  


<<<<<<< HEAD
=======

=======
import EduSearchHeader from './components/EduList/EduSearchHeader'
import MyLikeEduHeader from './components/MyEduLike/MyLikeEduHeader';
import MyLikeEduList from './components/MyEduLike/MyLikeEduList'

const Container=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
>>>>>>> fd4d93b1e2a9fcb4eb45347a158e95b996b78856
function App() {
  return (
    <div>
       <Sidebar/>
      <Navbar/>
     
      <MyPageInformationHeader/>
      {/* <MyPageHomeHeader/> */}
      {/* <MypageHome/> */}
      <Footer/>

    </div>
<<<<<<< HEAD

=======
=======
   <div>
    <Sidebar />
    <Navbar />
    <MyLikeEduHeader />
    <MyLikeEduList />


    {/* <EduList /> */}
   </div>
>>>>>>> 40d54734e44c22e7b866605ba1f9cafd36526801
>>>>>>> fd4d93b1e2a9fcb4eb45347a158e95b996b78856
  );
}

export default App;
