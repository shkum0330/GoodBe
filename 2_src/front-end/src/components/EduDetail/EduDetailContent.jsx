import React from 'react';
import calendarpad from '../../assets/EduDetail/calendarpad.svg';
import creditcard from '../../assets/EduDetail/creditcard.svg';
import notepad from '../../assets/EduDetail/notepad.svg';
import books from '../../assets/EduDetail/books.svg';
import styled from 'styled-components';


const InfoHeader = styled.p`
    color: #000;
    text-align: left;
    font-family: Istok Web;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
`
const Container = styled.div`
    border-radius: 10px;
    border: 1px solid #838383;
    background: #FFF;
    display: flex;
    flex-direction: column;
    align-items: left;
    text-align: left;
    margin-left: 50vh;
    padding: 20px;
    width: 800px;
    margin: auto;
`


const EduDetailContent = () => {


    const imgStyle = {
        width: '40px',
        height: '40px',
        marginRight: '10px'
    }

    return (
        <Container>
        
        <InfoHeader><img src={calendarpad} 
        alt="calenderpad" style={imgStyle}/>일정 및 수업</InfoHeader>

        <InfoHeader><img src={creditcard} alt="creditcard" style={imgStyle}/>수강료 및 지원금</InfoHeader>
          <div>
            <p >
              <span>{`수강료 `}</span>
              <span>무료</span>
              <span> kDT</span>
            </p>
            <p>내배카 내일배움카드가 필요해요.</p>
            <p>
              <span>지원금</span>
              <span> 훈련장려금 월 11만 6천원</span>
            </p>
            <p> 특별훈련수당 월 20만원</p>
            </div>


        <InfoHeader><img src={notepad} alt="notepad" style={imgStyle}/>지원절차</InfoHeader>
          <div>
            <span>{`신청서(서류) `}</span>
            <span>{`-> `}</span>
            <span>{`인터뷰(비대면) `}</span>
            <span>{`->`}</span>
            <span>{` hRD-Net 수강신청 `}</span>
            <span>{`->`}</span>
            <span> 합격 여부 설정</span>
            </div>
        <InfoHeader><img src={books} alt="books" style={imgStyle}/>사전지식</InfoHeader>
          <div>
            <p>필수</p>
            <p>
              본 과정 시작 전, 사전 캠프에서 강의 수강과 팀과제를 통해 aI 개발
              기초를 다집니다
            </p>
          </div>
          </Container>

    );
};

export default EduDetailContent;