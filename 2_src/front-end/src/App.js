
import './App.css';

import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import styled from 'styled-components';
import BoardList from './components/BoardMain/BoardList';



const Container=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: cetner;
  align-items:center;
`


function App() {
  return (
    <Container>

    
      <Navbar/>
      <BoardList/>
      <br></br>
      <Footer/>

    </Container>
  );
}

export default App;
