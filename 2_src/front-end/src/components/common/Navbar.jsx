import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
// 이미지의 경로 설정
import goodbelogo from '../../assets/navbar/goodbelogo.svg';
import bell from '../../assets/navbar/bell.svg';
import messagetext from '../../assets/navbar/messagetext.svg';
import profile from '../../assets/navbar/profile.svg';
import styled from 'styled-components';


const Navbbar=styled.div`
  width: 100%;
`
export default function CustomNavbar() {

  const navbarIconStyle = {
    marginRight: '3px', 
    // zIndex: 999,
  }

  return (
    <Navbbar className="App">
      
      <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">
            <img 
              src={goodbelogo}
              alt='Logo'
              height='30'
              className='d-inline-block align-top'
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">채용공고</Nav.Link>
            <Nav.Link href="#features">국비교육</Nav.Link>
            <Nav.Link href="#pricing">게시판</Nav.Link>
          </Nav>
          <div style={navbarIconStyle}>
            <Nav.Link href="#">
              <img src={profile} alt="profile" width="40" height="30" />
            </Nav.Link>
          </div>

          <div style={navbarIconStyle}>
            <Nav.Link href="#">
              <img src={bell} alt="bell" width="40" height="30" />
            </Nav.Link>
          </div>

          <div style={navbarIconStyle}>
            <Nav.Link href="#">
              <img src={messagetext} alt="profile" width="40" height="30" />
            </Nav.Link>
          </div>
      </Navbar>
      
    </Navbbar>
  );
}
