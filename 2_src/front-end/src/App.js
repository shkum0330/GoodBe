
import './App.css';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import JobList from './components/JobMain/JobList';
import JobTab from './components/JobMain/JobTab';
import SearchJob from './components/JobMain/SearchJob';

function App() {
  return (
   <div>

    <Sidebar/>
    <Navbar/>
    <MyPageHomeHeader />
    <MypageHome />
   </div>
  );
}

export default App;
