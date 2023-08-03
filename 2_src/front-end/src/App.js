
<<<<<<< HEAD
=======
import './App.css';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import JobList from './components/JobMain/JobList';
import JobTab from './components/JobMain/JobTab';
import SearchJob from './components/JobMain/SearchJob';
>>>>>>> ba4426c26a0713650580424c9677695166bb3186

const Container=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
function App() {
  return (
<<<<<<< HEAD
    <></>
=======
    <div>
    <Navbar/>
    <SearchJob/>
    {/* <JobTab/> */}
    <JobList/>
    <Footer/>
    </div>
>>>>>>> ba4426c26a0713650580424c9677695166bb3186
  );
}

export default App;
