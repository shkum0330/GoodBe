import React from 'react';
import styled from 'styled-components';
import hyundai from '../../assets/MyJobLike/hyundai.svg';
import samsung from '../../assets/MyJobLike/samsung.svg';
import sinhan from '../../assets/MyJobLike/sinhan.svg';
import sk from '../../assets/MyJobLike/sk.svg';


const JobButton = styled.button`
    border-radius: 10px;
    border: 1px solid #c0d9ff;
    background: #c0d9ff;
    color: #4a2dff;
    font-family: Istok Web;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-right: 100px;
    padding: 5px;
    margin-left: 965px;
    margin-bottom: 20px;
`;

const JobName = styled.p`
  font-family: Istok Web;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
  text-align: center;

`;

const JobDetail = styled.p`
  font-family: Istok Web;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
  color: #64686c;
  text-align: left;
  margin-left: 10px;

`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px; 
  align-items: center;
  justify-content: center;
  margin-left: 400px;
  width: 700px;
  height: 100%;
  margin-bottom : 100px;
`;

const JobItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  border-radius: 10px;
  border: 1px solid #A7A7A7;
  background: rgba(255, 255, 255, 0.45);
  text-align: left;
  padding: 10px;
  height: 100%;
`;

const JobImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Line = styled.hr`
  width: 100%;
  border: 1px solid #A7A7A7;
`;

const LinkStyle = styled.a`
    color: #000;
    font-family: Yuji Syuku;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: underline;
    margin-left: 10px;
    margin-bottom: 10px;
    /* hover 상태일 때 커서 모양을 변경 */
    &:hover {
      cursor: pointer;
    }
`
 
const MyLikeEduList = () => {
  const dummyData = [
    { id: 1, JobName: '삼성', Jobtitle: '풀스택 개발자 양성 과정 2기', image: samsung, alt: 'a', url: '#'},
    { id: 2, JobName: '신한은행', Jobtitle: '백엔드 웹 개발 트랙 8기', image: sinhan, alt: 'a',url: '#'},
    { id: 3, JobName: '현대자동차', Jobtitle: '프론트엔드 웹 개발 트랙 8기', image: hyundai, alt: 'a',url: '#' },
    { id: 4, JobName: 'sk텔레콤', Jobtitle: 'AI 웹 개발 트랙 9기', image: sk, alt: 'a',url: '#' },
    { id: 5, JobName: '신한은행', Jobtitle: '백엔드 웹 개발 트랙 8기', image: sinhan, alt: 'a',url: '#' },
    { id: 6, JobName: '현대자동차', Jobtitle: 'AI 웹 개발 트랙 10기', image: hyundai, alt: 'a',url: '#' },
    { id: 7, JobName: '삼성', Jobtitle: '프론트엔드 웹 개발 트랙 8기', image: samsung, alt: 'a',url: '#' },
  ];

  return (
    <div>
      <JobButton>채용공고 둘러보기</JobButton>
      <Container>
        {dummyData.map((item) => (
          <JobItemContainer key={item.id}>
            <JobImage src={item.image} />
            <Line />
            <JobName>{item.JobName}</JobName>
            <JobDetail>{item.Jobtitle}</JobDetail>
            <LinkStyle>이동하기></LinkStyle>
          </JobItemContainer>
        ))}
      </Container> 
    </div>
  );
};

export default MyLikeEduList;