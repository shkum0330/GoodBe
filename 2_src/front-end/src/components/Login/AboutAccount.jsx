import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/Logo/Logo.jpg';

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 670px;
  height: 1000px; /* 조절한 세로 폭 */
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
`;

const Input = styled.input`
  height: 30px;
  padding: 5px;
  border: 1px solid #CFCFCF;
  border-radius: 5px;
  flex: 1; /* 입력창들의 크기를 동일하게 조절 */
`;

const Select = styled.select`
  height: 30px;
  padding: 5px;
  border: 1px solid #CFCFCF;
  border-radius: 5px;
  flex: 1; /* 입력창들의 크기를 동일하게 조절 */
`;

const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const CheckBoxLabel = styled.label`
  margin-left: 10px;
`;

const SignUpButton = styled.button`
  width: 70px;
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
`;

const LogoImage = styled.img`
  max-width: 500px;
  height: auto;
  display: block;
  margin: 0 auto;
`;

const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const HorizontalCheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
`;

const HorizontalCheckBoxLabel = styled.label`
  margin-right: 10px;
`;

const SignUpForm = () => {
  return (
    <Container>
      <LogoImage alt="logo_01" src={logo} />
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
        <Input type="text" placeholder="닉네임을 입력해주세요" />
        <SignUpButton>중복확인</SignUpButton>
      </FormItem>
      <FormItem>
        <Label>* 관심회사</Label>
        <Select>
          <option value="">선택하세요</option>
          <option value="스타트업">스타트업</option>
          <option value="대기업">대기업</option>
        </Select>
      </FormItem>
      <FormItem>
        <Label>* 관심직무</Label>
        <Select>
          <option value="">선택하세요</option>
          <option value="백엔드">백엔드</option>
          <option value="프론트엔드">프론트엔드</option>
          <option value="임베디드">임베디드</option>
          <option value="앱">앱</option>
        </Select>
      </FormItem>
      <FormItem>
        <Label>* 성별</Label>
        <HorizontalCheckBoxContainer>
          <input type="checkbox" id="male" />
          <HorizontalCheckBoxLabel htmlFor="male">남성</HorizontalCheckBoxLabel>
          <input type="checkbox" id="female" />
          <HorizontalCheckBoxLabel htmlFor="female">여성</HorizontalCheckBoxLabel>
        </HorizontalCheckBoxContainer>
      </FormItem>
      <Button>가입하기</Button>
    </Container>
  );
};

export default SignUpForm;
