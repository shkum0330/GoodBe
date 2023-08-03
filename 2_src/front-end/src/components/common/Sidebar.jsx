import React from 'react';
import styled from 'styled-components';
import { CgProfile } from "react-icons/cg";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { AiFillCheckSquare } from "react-icons/ai";
import { FaBookOpen } from "react-icons/fa";
import { GiRoyalLove } from "react-icons/gi";
import { BsPencilSquare } from "react-icons/bs";
import { AiFillInfoCircle } from "react-icons/ai";

const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 왼쪽 정렬로 변경 */
  padding-top: 100px;
`;


const SidebarItemWrapper = styled.div`
  color: #333;
  font-size: 19px;
  text-decoration: none;
  padding: 10px 20px;
  cursor: pointer;

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


export default function Sidebar() {

  return (
    <div>
 
        <SidebarContainer>
        <SidebarItemWrapper>
            <CgProfile />
            <SidebarItemText href="#">홈</SidebarItemText>
        </SidebarItemWrapper>

        <SidebarItemWrapper>
          <BsFillPersonVcardFill />
          <SidebarItemText href="#">개인정보 수정</SidebarItemText>
        </SidebarItemWrapper>

        <SidebarItemWrapper>
          <AiFillCheckSquare />
          <SidebarItemText href="#">교육 상담 내역</SidebarItemText>
        </SidebarItemWrapper>

        <SidebarItemWrapper>
          <FaBookOpen/>
          <SidebarItemText href="#">관심 교육</SidebarItemText>
        </SidebarItemWrapper>

        <SidebarItemWrapper>
          <GiRoyalLove/>
          <SidebarItemText href="#">관심 채용공고</SidebarItemText>
        </SidebarItemWrapper>

        <SidebarItemWrapper>
          <BsPencilSquare />
          <SidebarItemText href="#">내가 쓴 글</SidebarItemText>
        </SidebarItemWrapper>

        <SidebarItemWrapper>
          <AiFillInfoCircle />
          <SidebarItemText href="#">정보</SidebarItemText>
        </SidebarItemWrapper>
     
        </SidebarContainer>
   

    </div>
  );
}