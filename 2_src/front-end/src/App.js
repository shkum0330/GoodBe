
import './App.css';
import Navbar from './components/common/Navbar';
import Sidebar from './components/common/Sidebar';
import Footer from './components/common/Footer';
import JobList from './components/JobMain/JobList';
import JobTab from './components/JobMain/JobTab';
import EduList from './components/EduList/EduList';
import SearchJob from './components/JobMain/SearchJob';
import EduSearchHeader from './components/EduList/EduSearchHeader'
import MyLikeEduHeader from './components/MyEduLike/MyLikeEduHeader';
import MyLikeEduList from './components/MyEduLike/MyLikeEduList'

function App() {
  return (
   <div>
    <Sidebar />
    <Navbar />
    <MyLikeEduHeader />
    <MyLikeEduList />


    {/* <EduList /> */}
   </div>
  );
}

export default App;
