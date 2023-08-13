import {React, useState} from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import goodbelogo from '../../assets/navbar/goodbelogo.svg';
import bell from '../../assets/navbar/bell.svg';
import messagetext from '../../assets/navbar/messagetext.svg';
import profile from '../../assets/navbar/profile.svg';
import styled from 'styled-components';
import GoLogin from '../Login/GoLogin';
import { CgProfile } from "react-icons/cg";
import { BiMessageDetail } from "react-icons/bi";

const Navbbar=styled.div`
  width: 100%;
`

const NavbarLink = styled(Nav.Link)`
  font-size: 17px;
  color: #919191;

  &:hover {
    color: #1B73E8;
  }
`;


const ProfileIcon = styled(CgProfile)`
  color: #c0c0c0;
  width: 40px;
  height: 40px;
  margin: 5px;

  &:hover {
    color: #00a2e8;
  }
`;
const MessageIcon = styled(BiMessageDetail)`
  color: #c0c0c0;
  width: 40px;
  height: 40px;
  margin: 5px;

  &:hover {
    color: #00a2e8;
  }
`;

export default function CustomNavbar() {

  const navbarIconStyle = {
    marginRight: '6px', 
  }

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Navbbar className="App">
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="/">
          <img
            src={goodbelogo}
            alt="Logo"
            height="45"
            width="135"
            style={{ marginLeft: '10px' }}
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavbarLink href="/JobMain">채용공고</NavbarLink>
          <NavbarLink href="/EduList">국비교육</NavbarLink>
          <NavbarLink href="/BoardMain">게시판</NavbarLink>
        </Nav>

        <div style={navbarIconStyle}>
          <button onClick={openModal}>로그인</button>
        </div>

        <NavbarLink href="/MyPageHome">
          <ProfileIcon />
        </NavbarLink>

        <div style={navbarIconStyle}>
          <NavbarLink href="#">
            <MessageIcon />
          </NavbarLink>
        </div>
      </Navbar>
      {modalOpen && (
 
          <GoLogin closeModal={closeModal} />

      )}
    </Navbbar>
  );
}
