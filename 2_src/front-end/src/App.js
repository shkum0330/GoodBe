
import './App.css';
import AccountHeader from './components/common/AccountHeader';
import EduHeader from './components/common/EduHeader';
import AccountFindHeader from  './components/common/AccountFindHeader';
import BoardDetailContent from './components/BoardDetail/BoardDetailContent';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import styled from 'styled-components';


const Container=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
function App() {
  return (
    <Container>
      <Navbar/>
        <BoardDetailContent/>
      <Footer/>
    </Container>
  );
}

export default App;
