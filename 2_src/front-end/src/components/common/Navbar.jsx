import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
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
    marginRight: '6px', 
    
  }

  return (
    <Navbbar className="App">
      
      <Navbar bg="light" variant="light">
          <Navbar.Brand href="/">
            <img
              src={goodbelogo}
              alt='Logo'
              height='45'
              width='135'
              style={{ marginLeft: '10px' }}
            />

          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/JobMain" style={{ fontSize: '17px' }}>채용공고</Nav.Link>
            <Nav.Link href="/EduList" style={{ fontSize: '17px' }}>국비교육</Nav.Link>
            <Nav.Link href="/BoardMain" style={{ fontSize: '17px' }}>게시판</Nav.Link>
          </Nav>

          <div style={navbarIconStyle}>
            <Nav.Link href="/MyPageHome">
              <img src={profile} alt="profile" width="40px" height="40px"  />
            </Nav.Link>
          </div>

          {/* <div style={navbarIconStyle}>
            <Nav.Link href="#">
              <img src={bell} alt="bell" width="40px" height="34px" />
            </Nav.Link>
          </div> */}

          <div style={navbarIconStyle}>
            <Nav.Link href="#">
              <img src={messagetext} alt="profile" width="40px" height="40px" />
            </Nav.Link>
          </div>
      </Navbar>

    </Navbbar>
  );
}
