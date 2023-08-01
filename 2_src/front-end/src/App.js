
import './App.css';
import AccountHeader from './components/common/AccountHeader';
import EduHeader from './components/common/EduHeader';
import AccountFindHeader from  './components/common/AccountFindHeader';
import Footer from './components/common/Footer';
import JobList from './components/JobMain/JobList';
import JobTab from './components/JobMain/JobTab';
import SearchJob from './components/JobMain/SearchJob';
import Navbar from './components/common/Navbar';

function App() {
  return (
    <div className="App">
     <Navbar/>
      <SearchJob />
      <JobList />
      <JobTab />
    <Footer/>
    </div>
  );
}

export default App;
