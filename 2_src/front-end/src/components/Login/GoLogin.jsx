import { React, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../../assets/Logo/Logo.jpg';
import Google from '../../assets/Login/Google.svg';
import InstitutionSignUp from '../../pages/InstitutionSignUp';
import { GrClose } from "react-icons/gr";

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, -80%);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
`;

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 570px;
  height: 500px; 
  background: #FFFFFF;
  border: 1px solid #AACDFF;
  box-shadow: 10px 10px 50px rgba(0, 104, 255, 0.4);
  border-radius: 20px;
  margin: 0px;
  padding: 60px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  z-index: 1000;
  animation: ${slideIn} 0.6s ease-in-out forwards;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: #1B73E8;

  &:hover {
    color: #FF0000;
  }
`;

const LogoImage = styled.img`
  height: 100px;
  margin-bottom : 20px;
`;

const Title = styled.h3`
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 47px;
  color: #1B73E8;
  text-align : center;
`;


const Detail = styled.p`
    color: #60A0EF;
    font-family: Istok Web;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
    text-align: center;
`
const GoogleImg = styled.img`
    width: 80px;
    height: 80px;
    flex-shrink: 0;

`

const SignUp = styled.a`
    color: #676767;
    text-align: center;
    font-family: Istok Web;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
    text-decoration: none;
    margin-top: 5px;

    &:hover {
        color: #1B73E8; 
    }
`

const InstitutionLogin = styled.a`
    margin-top: 20px;
    text-decoration: none;
    color: #676767;
    text-align: center;
    font-family: Istok Web;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
    
    &:hover {
        color: #1B73E8;
    }
`


const BackgroundOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); 
  z-index: 999; 
  display: ${(props) => (props.modalOpen ? 'block' : 'none')};
`;


const GoLogin = ({ closeModal }) => {

  return (
    <>
    <BackgroundOverlay modalOpen={true} onClick={closeModal} />
    <Container>
      <CloseButton onClick={closeModal}>
        <GrClose/>
      </CloseButton>
      <LogoImage alt="logo_01" src={logo} />
      <Title>굿비에서 여러분의 미래를 그려보세요!</Title>
      <Detail>구글 로그인 하러 가기</Detail>
      <GoogleImg alt="Google" src={Google} />


      <InstitutionLogin href="다음페이지 주소 넣어주셈">혹시 기업회원이신가요?</InstitutionLogin>
      <SignUp href="../SignUp">회원가입</SignUp>


    </Container>
    
    </>
  );
}

export default GoLogin;
