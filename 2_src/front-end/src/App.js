
import './App.css';
import AccountHeader from './components/common/AccountHeader';
import EduHeader from './components/common/EduHeader';
import AccountFindHeader from  './components/common/AccountFindHeader';
import EduSearchHeader from './components/EduList/EduSearchHeader';
import EduList from './components/EduList/EduList';
import EduListTitle from './components/EduList/EduListTitle';
import Navbar from './components/common/Navbar';
import Sidebar from './components/common/Sidebar';
import MyPageHomeHeader from './components/MyPageHome/MyPageHomeHeader';
import MypageHome from './components/MyPageHome/MypageHome';

function App() {
  return (
   <div>
{/* 
    <Sidebar/>
    <Navbar/>
    <MyPageHomeHeader />
    <MypageHome /> */}
    <EduList/>
   </div>
  );
}

export default App;
