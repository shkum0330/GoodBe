
<<<<<<< HEAD
=======
import './App.css';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import JobList from './components/JobMain/JobList';
import JobTab from './components/JobMain/JobTab';
import EduList from './components/EduList/EduList';
import SearchJob from './components/JobMain/SearchJob';

const Container=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
function App() {
  return (
    <div>
    <Navbar/>
    <SearchJob/>
    {/* <JobTab/> */}
    <JobList/>
    <Footer/>
    </div>
  );
}

export default App;
