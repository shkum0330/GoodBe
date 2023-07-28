import React from 'react';
import styled from 'styled-components';
import profilecircle from '../../assets/MyInfoChange/profilecircle.svg';
import book from '../../assets/MyInfoChange/book.svg';
import edit from '../../assets/MyInfoChange/edit.svg';
import happy from '../../assets/MyInfoChange/happy.svg';
import infocircle from '../../assets/MyInfoChange/infocircle.svg';
import personalcard from '../../assets/MyInfoChange/personalcard.svg';
import ticksquare from '../../assets/MyInfoChange/ticksquare.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarAndCrescent } from '@fortawesome/free-solid-svg-icons';

const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 왼쪽 정렬로 변경 */
  padding-top: 50px;
`;

const SidebarItemWrapper = styled.div`
  display: flex;
  align-items: center;


  &:hover {
    border: 1px groove #007bff;
    border-radius: 0 30px 30px 0;
    color: #007bff;
    background-color: #e6f2ff;
  }

`;

const SidebarItemText = styled.a`
  color: #333;
  font-size: 18px;
  text-decoration: none;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    color: #007bff;
  }
  

`;

const SidebarItemImage = styled.img`
  width: 20px;
  height: 20px;
  margin-left : 10px;
`;



export default function Sidebar() {

  return (
    <div>
 
        <SidebarContainer>
        <SidebarItemWrapper>
            <FontAwesomeIcon icon="fa-regular fa-user" />
          {/* <SidebarItemImage src={profilecircle} alt="Profile" /> */}
          <SidebarItemText href="#">홈</SidebarItemText>
        </SidebarItemWrapper>

        <SidebarItemWrapper>
          <SidebarItemImage src={personalcard} alt="Profile" />
          <SidebarItemText href="#">개인정보 수정</SidebarItemText>
        </SidebarItemWrapper>

        <SidebarItemWrapper>
          <SidebarItemImage src={ticksquare} alt="Profile" />
          <SidebarItemText href="#">교육 상담 내역</SidebarItemText>
        </SidebarItemWrapper>

        <SidebarItemWrapper>
          <SidebarItemImage src={book} alt="Profile" />
          <SidebarItemText href="#">관심 교육 관리</SidebarItemText>
        </SidebarItemWrapper>

        <SidebarItemWrapper>
          <SidebarItemImage src={happy} alt="Profile" />
          <SidebarItemText href="#">관심 채용공고 관리</SidebarItemText>
        </SidebarItemWrapper>

        <SidebarItemWrapper>
          <SidebarItemImage src={edit} alt="Profile" />
          <SidebarItemText href="#">내가 쓴 글</SidebarItemText>
        </SidebarItemWrapper>

        <SidebarItemWrapper>
          <SidebarItemImage src={infocircle} alt="Profile" />
          <SidebarItemText href="#">정보</SidebarItemText>
        </SidebarItemWrapper>
     
        </SidebarContainer>
   

    </div>
  );
}