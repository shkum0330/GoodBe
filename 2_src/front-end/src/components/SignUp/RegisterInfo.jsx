import {React, useState, useEffect} from 'react';
import styled from 'styled-components';
import logo from '../../assets/Logo/Logo.jpg';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

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
  const handleGoogleClick = () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const accessToken = urlSearchParams.get('accessToken');
    const refreshToken = urlSearchParams.get('refreshToken');

    if (accessToken && refreshToken) {
      console.log('Access token:', accessToken);
      console.log('Refresh token:', refreshToken);
      // alert('로그인 성공!');

      // 받아온 토큰을 로컬 스토리지에 저장
      sessionStorage.setItem('accessToken', accessToken);
      sessionStorage.setItem('refreshToken', refreshToken);
    } else {
      console.log('Tokens not found in local storage.');
    }

    window.location.href =
      // 'http://i9a801.p.ssafy.io:8089/auth/login/google'; // 구글 로그인 페이지로 이동
      'http://localhost:8089/auth/login/google'; // 구글 로그인 페이지로 이동
      
  };

  const [myemail, setmyemail] = useState([]); 
    
  const accessTokenAgain = sessionStorage.getItem('accessToken') || '';
  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/member/register`, {
        headers : {
          Authorization: `Bearer ${accessTokenAgain}`,
        }
      })
      .then(function (response) {
        console.log(response.data);
        setmyemail(response.data.email);
      })
      .catch(function (error) {
        console.error('Error fetching data:', error);
        console.log(accessTokenAgain)
      });
  }, [accessTokenAgain]); 

  const [formData, setFormData] = useState({
    name: '',
    birth: '',
    nickname: '',
    favorite_company: '',
    favorite_job: '',
    address: ''
  });

    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSignUp = () => {
      axios
        .post(`${API_BASE_URL}/api/member/register`, formData)
        .then((response) => {
          console.log('회원가입 성공:', response.data);
          alert('회원가입 성공!')
        })
        .catch((error) => {
          console.error('회원가입 실패:', error);
           alert('회원가입 실패: ' + error.message);
          console.log(formData)
        });
    };
    useEffect(() => {
      handleGoogleClick();
    }, []);
  return (
    <Container>
      <LogoImage alt="logo_01" src={logo}/>
      <Title>굿비에서 여러분의 미래를 그려보세요!</Title>
      <FormItem>
        <Label>* 이름</Label>
        <Input type="text" placeholder="이름을 입력해주세요" value={formData.name} name="name" onChange={handleInputChange}/>
      </FormItem>
      <FormItem>
        <Label>* 이메일</Label>
        <Input type="text" placeholder="이메일을 입력해주세요" value={myemail} name="myemail" readOnly/>
      </FormItem>
      <FormItem>
        <Label>* 생년월일</Label>
        <Input type="date" placeholder="생년월일을 입력해주세요" value={formData.birth} name="birth" onChange={handleInputChange}/>
      </FormItem>
      <FormItem>
          <Label>* 닉네임</Label>
        <InputWrapper>
          <InputNickname type="text" placeholder="닉네임을 입력해주세요" value={formData.nickname} name="nickname" onChange={handleInputChange}/>
        </InputWrapper>
      </FormItem>
      <FormItem>
        <Label>* 관심회사</Label>
          <Input type="text" placeholder="관심회사를 입력해주세요" value={formData.favorite_company} name="favorite_company" onChange={handleInputChange}/>
      </FormItem>
      <FormItem>
        <Label>* 관심직무</Label>
          <Input type="text" placeholder="관심직무를 입력해주세요" value={formData.favorite_job} name="favorite_job" onChange={handleInputChange}/>
      </FormItem>
      <FormItem>
        <Label>* 주소</Label>
          <Input type="text" placeholder="주소를 입력해주세요" value={formData.address} name="address" onChange={handleInputChange}/>
      </FormItem>
  
      <Button onClick={handleSignUp}>가입하기</Button>
    </Container>
  );
};


export default SignUpForm;
