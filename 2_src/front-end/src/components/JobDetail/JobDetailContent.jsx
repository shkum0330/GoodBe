import React from 'react';
import styled from 'styled-components';
import NaverInc from '../../assets/JobDetail/NaverInc.svg';

const CustomDiv = styled.div`
  margin-left: 17rem;
`;

const CustomH3 = styled.h3`
  margin-left: 5rem;
  font-size: 20px;
  color: grey;
`;

const CustomH2 = styled.h2`
  font-style: normal;
  margin-left: 5rem;
  font-size: 30px;
  font-weight: bold;
`;

const CustomHr = styled.hr`
  align: right;
  width: 80%;
  color: black;
  margin-left: 5rem;
`;

const CustomBox = styled.div`
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 10rem;
  background-color: '';
  border-color: grey;
  border: 1px solid grey;
  padding: 1rem;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 5rem;
  padding-right: 10rem;
`;

const Image = styled.img`
  width: 60rem; /* 원하는 이미지 가로 크기로 수정 */
  height: auto; /* 높이 자동 조정 */
  
  
`;
export default function JobDetailContent() {
  return (
    <CustomDiv>
      <div style={{ fontStyle: '', fontSize: '12px', fontWeight: 'bold' }}>Naver I&S</div>
      <h3 style={{ fontStyle: '', fontSize: '15px' }}>
        Naver I&S(주) 및 자회사 각 부문 신입/경력 수시 채용
      </h3>
      <br />
      <CustomBox>
        <ContentContainer>
          <div>
            <strong>지원자격</strong>
            <p>경력: 신입/경력(2년 이하)</p>
            <p>학력: 학력무관</p>
          </div>
          <div>
            <strong>근무조건</strong>
            <p>고용형태: 정규직 수습 3개월</p>
            <p>급여: 회사내규에 따름</p>
          </div>
        </ContentContainer>
      </CustomBox>
      <Image src={NaverInc} alt="NaverInc"  />
    </CustomDiv>
  );
}
