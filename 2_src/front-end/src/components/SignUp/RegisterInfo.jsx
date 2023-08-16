import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/Logo/Logo.jpg';

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 670px;
  // max-height: 1000px;
  background: #FFFFFF;
  border: 1px solid #AACDFF;
  box-shadow: 7px 7px 39px rgba(0, 104, 255, 0.25);
  border-radius: 20px;
  padding: 60px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  margin-top : 150px;
  margin-bottom: 150px;

`;
const Title = styled.p`
  width: 450px;
  height: 50px;
  flex-shrink: 0;
  background: #E7F4FD;
  text-align: center;
  color: #0097FF;
  text-align: center;
  font-family: Istok Web;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
  padding: 10px 20px;
  margin-left : 55px;
  margin-bottom: 30px;
`
const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 16px;
  color: grey; /* 변경된 항목명 색상 */
  margin-bottom: 5px;
  font-weight: bold; /* 항목명 bold체 지정 */
  // margin-top : 30px;
`;

const Input = styled.input`
  height: 30px;
  padding: 5px;
  border: 1px solid #CFCFCF;
  border-radius: 10px;
  flex: 1; 
`;

const Select = styled.select`
  height: 30px;
  padding: 5px;
  border: 1px solid #CFCFCF;
  border-radius: 5px;
  flex: 1; /* 입력창들의 크기를 동일하게 조절 */
`;

const SignUpButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: royalblue;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 250px;
  height: 50px;
  background-color: #FFFFFF;
  color: royalblue;
  border-radius: 8px;
  border: #0068FF solid 1px;
  box-shadow: #0068FF;
  margin-left : 155px;
`;

const LogoImage = styled.img`
  max-width: 500px;
  height: auto;
  display: block;
  margin: 0 auto;
  margin-bottom : 20px;
`;

const InputNickname = styled.input`
  width: 400px;
  height: 30px;
  padding: 5px;
  border: 1px solid #CFCFCF;
  border-radius: 10px;
  flex: 1; 
`
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SignUpForm = () => {
  return (
    <Container>
      <LogoImage alt="logo_01" src={logo} />
      <Title>굿비에서 여러분의 미래를 그려보세요!</Title>
      <FormItem>
        <Label>* 이름</Label>
        <Input type="text" placeholder="이름을 입력해주세요" />
      </FormItem>
      <FormItem>
        <Label>* 이메일</Label>
        <Input type="email" placeholder="이메일을 입력해주세요" />
      </FormItem>
      <FormItem>
        <Label>* 생년월일</Label>
        <Input type="date" />
      </FormItem>
      <FormItem>
        <Label>* 거주지역</Label>
        <Input type="text" placeholder="거주지역을 입력해주세요" />
      </FormItem>
      <FormItem>
          <Label>* 닉네임</Label>
        <InputWrapper>
          <InputNickname type="text" placeholder="닉네임을 입력해주세요" />
          <SignUpButton>중복확인</SignUpButton>
        </InputWrapper>
      </FormItem>
      <FormItem>
        <Label>* 관심회사</Label>
          <Input type="text" placeholder="관심회사를 입력해주세요" />
      </FormItem>
      <FormItem>
        <Label>* 관심직무</Label>
          <Input type="text" placeholder="관심직무를 입력해주세요" />
      </FormItem>
  
      <Button>가입하기</Button>
    </Container>
  );
};

export default SignUpForm;
