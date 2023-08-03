
import './App.css';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import JobList from './components/JobMain/JobList';
import JobTab from './components/JobMain/JobTab';
import EduList from './components/EduList/EduList';
import SearchJob from './components/JobMain/SearchJob';
import EduSearchHeader from './components/EduList/EduSearchHeader'

function App() {
  return (
   <div>
    {/* <JobList /> */}
    <EduSearchHeader />
    <EduList />
   </div>
  );
}

export default App;
