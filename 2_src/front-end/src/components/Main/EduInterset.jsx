import React from 'react';
import styled from 'styled-components';


const Container1 = styled.div`
    position: absolute;
    width: 85%;
    flex-direction : column;
    /* display : flex; */
    height : 350px;
    margin-left : 8%;
    /* align-items: center; */
    background: #FFFFFF;
    /* border: 1px solid #0c0d0d; */
    padding : auto;
    /* margin:auto; */

`

const Container2 = styled.div`
    width: 95%;
    padding-left : 10px;
    flex-direction: row; /* 가로로 나열하도록 설정 */
    justify-content: space-between; /* 컨테이너들을 가로 방향으로 공간을 벌리며 나열 */
    align-items: center;
    background: #F7F7F7;
    /* border: 1px solid #0c0d0d; */
    margin: auto;
`;


const Container2_1 = styled.div`
    width: 95%;
    display: flex;
    flex-direction: row; /* 가로로 나열하도록 설정 */
    background: #F7F7F7;
    /* border: 1px solid #0c0d0d; */
    margin: auto;
    
`;

const Container3 = styled.div`
    width: 30%;
    flex-direction: column;
    display: flex;
    height: 150px;
    background: #FFFFFF;
    border: 1px solid #e6e2e2;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    position: relative; /* 버튼 위치를 조정하기 위해 상대적인 위치 설정 */
`;

const AddButton = styled.button`
    width: 80%;
    padding: 15px 15px;
    background-color: transparent;
    border: 0px;
    font-family: 'Istok Web';
    font-size: 20px;
    font-weight: bold;
    color: #C1BDBD;
    display: flex; /* 버튼 내부의 글자를 가운데로 정렬하기 위해 */
    align-items: center; /* 버튼 내부의 글자를 가운데로 정렬하기 위해 */
    justify-content: center; /* 버튼 내부의 글자를 가운데로 정렬하기 위해 */
    margin: auto; /* 가운데 정렬을 위해 */
    margin-top: auto; /* 하단 여백을 자동 조절하여 버튼을 가운데에 위치시킴 */
`;


const LogoImage1 = styled.img`
  max-width: 300px;
  height: auto;
  display: block;
  margin: 0 auto;
  z-index: 1;
`;
const LogoImage2 = styled.img`
  max-width: 150px;
  height: auto;
  /* display: flex; */
  margin: auto;
  z-index: 2;
  position : absolute;
  margin-top : 100px;
  margin-left: -250px;

`;
const Title = styled.h3`
  font-family: 'Istok Web';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 47px;
  color: #070707;
  justify-content: space-evenly;
`;

const Fonts = styled.span`
font-family: 'Istok Web';
  font-style: normal;
  font-size: 15px;
  line-height: 47px;
  font-weight: bold;
  color: #C1BDBD;
  justify-content: space-evenly; 
  position: absolute;
  margin-left : 5px;
`;



export default function EduInterest() {
    return (
      <div>
        <Container1>
          <Title>
            ✈ 로그인 후 관심 교육을 관리하세요
          </Title>
          <Container2>
            <Title>
              관심 있는 교육 리스트
            </Title>
            <Container2_1>
              <Container3>
                <AddButton>+ 관심있는 교육 추가</AddButton>
              </Container3>
              <Container3>
                <AddButton>+ 관심있는 교육 추가</AddButton>
              </Container3>
              <Container3>
                <AddButton>+ 관심있는 교육 추가</AddButton>
              </Container3>
            </Container2_1>
          </Container2>
        </Container1>
      </div>
    );
  }