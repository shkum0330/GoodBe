import React from 'react';
import styled from 'styled-components';

const EduButton = styled.button`
  border-radius: 10px;
  border: 1px solid #c0d9ff;
  background: #c0d9ff;
  color: #4a2dff;
  font-family: Istok Web;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-right: 100px;
  padding: 5px;
`;

const EduName = styled.p`
  font-family: Istok Web;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
`;

const EduDetail = styled.p`
  font-family: Istok Web;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
  color: #64686c;
`;

const MyLikeEduList = () => {
  const dummyData = [
    { id: 1, EduName: '구름', Edutitle: '풀스택 개발자 양성 과정 2기' },
    { id: 2, EduName: 'SSAFY', Edutitle: '백엔드 웹 개발 트랙 8기' },
    { id: 3, EduName: '항해99', Edutitle: '프론트엔드 웹 개발 트랙 8기' },
    { id: 4, EduName: '구름', Edutitle: 'AI 웹 개발 트랙 9기' },
    { id: 5, EduName: 'SSAFY', Edutitle: '백엔드 웹 개발 트랙 8기' },
    { id: 6, EduName: 'SSAFY', Edutitle: 'AI 웹 개발 트랙 10기' },
    { id: 7, EduName: '항해99', Edutitle: '프론트엔드 웹 개발 트랙 8기' },
  ];

  return (
    <div>
      <EduButton>교육과정 둘러보기</EduButton>
      {dummyData.map((item) => (
        <div key={item.id}>
          <EduName>{item.EduName}</EduName>
          <EduDetail>{item.Edutitle}</EduDetail>
        </div>
      ))}
    </div>
  );
};

export default MyLikeEduList;
