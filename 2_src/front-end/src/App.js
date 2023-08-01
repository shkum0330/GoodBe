
import './App.css';
import AccountHeader from './components/common/AccountHeader';
import EduHeader from './components/common/EduHeader';
import AccountFindHeader from  './components/common/AccountFindHeader';
import Footer from './components/common/Footer';
import Navbar from './components/common/Navbar';

import InputForm from './components//PasswordFind/InputForm';
import EduHead from './components//EduDetail/EduHead';

import EduTab from './components/EduDetail/EduTab';
import EduDetailContent from './components/EduDetail/EduDetailContent';
import CurriculumContent from './components/Curriculum/CurriculumContent';
import EduReviewContent from './components/EduReview/EduReviewContent';

function App() {
  return (
    <div className="App">
      <Navbar />
      <EduHead />
      <EduTab />
      <EduReviewContent />
    </div>
  );
}

export default App;
