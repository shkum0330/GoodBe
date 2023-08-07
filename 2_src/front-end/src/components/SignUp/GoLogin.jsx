import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/Logo/Logo.jpg';

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 670px;
  height: 790px;
  background: #FFFFFF;
  border: 1px solid #AACDFF;
  box-shadow: 7px 7px 39px rgba(0, 104, 255, 0.25);
  border-radius: 20px;
  margin: 0px;
  padding: 100px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

const LogoImage = styled.img`
  max-width: 500px;
  height: auto;
  display: block;
  margin: 0 auto;
`;

const Title = styled.h3`
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 47px;
  color: #0068FF;
  justify-content: space-evenly;
`;

const Label = styled.label`
  color: lightgrey;
`;

const Input = styled.input`
  padding: 0px;
  border: none;
  border-bottom: 1px solid #CFCFCF;
  width: 300px;
  height: 30px;
`;

const Button = styled.button`
  width: 400px;
  height: 50px;
  background-color: #FFFFFF;
  color: royalblue;
  border-radius: 8px;
  border: #0068FF solid 1px;
  box-shadow: #0068FF;
`;


const GoLogin = () => {
  return (
    <Container>
      <LogoImage alt="logo_01" src={logo} />
      <Title>굿비에서 여러분의 미래를 그려보세요!</Title>

      <Label htmlFor="email">* 이메일<br />
        <Input type="text" id="email" /><br /><br />
      </Label>

      <Label htmlFor="password1">* 비밀번호<br />
        <Input className="pw" id="password1" type="password" /><br /><br />
      </Label>

      <form>
        <Input type="checkbox" className="remember" />&nbsp;아이디를 기억합니다.
      </form>

      <br />
      <Button>접속하기!</Button><br />
      <a href="다음페이지 주소 넣어주셈">혹시 기업회원이신가요?</a><br />
      <a href="PersonalRegisterComponent">회원가입하러 가기</a>
    </Container>
  );
}

export default GoLogin;
