
// import './App.css';
// import AccountHeader from './components/common/AccountHeader';
// import EduHeader from './components/common/EduHeader';
// import AccountFindHeader from  './components/common/AccountFindHeader';
import Footer from './components/common/Footer';
import Navbar from './components/common/Navbar';
import JobHeader from './components/JobDetail/JobHeader';
import JobDetailContent from './components/JobDetail/JobDetailContent';
import EduRecommendRelatedJob from './components/JobDetail/EduRecommendRelatedJob';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <JobHeader/>
      <JobDetailContent/>
      <EduRecommendRelatedJob/>
      <Footer/>
    </div>
  );
}

export default App;
