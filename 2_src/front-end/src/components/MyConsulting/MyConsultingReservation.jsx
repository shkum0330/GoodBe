import React from 'react';
import styled from 'styled-components';
import myconsulting from '../../assets/MyConsulting/myconsulting.svg'

const AllButton = styled.button`
    width: 50px;
    height: 41px;
    flex-shrink: 0;
    color: #60A0EF;
    font-family: Istok Web;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
    border-radius: 10px;
    background: #E7F4FD;
    font-size: 15px;
    margin-left: 350px;
    margin-top: 100px;
    margin-right: 10px;
    border :#E7F4FD;
`

const DateButton = styled.button`
    width: 110px;
    height: 41px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #E8E8E8;
    color: #818181;
    font-family: Istok Web;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
    border : #E8E8E8;
`
const EduTite = styled.p`
    color: #000;
    font-family: Istok Web;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;

`
const EduInstitution = styled.p`
    color: #7D7D7D;
    font-family: Istok Web;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;

`

const LinkStyle = styled.a`
    color: #60A0EF;
    text-align: right;
    font-family: Istok Web;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
    margin-top: 10px;
    margin-right: 10px;
    cursor: pointer;
    text-decoration: none;
`

const ConsultImg = styled.img`
    width: 170px;
    height: 100px;
    flex-shrink: 0;
    margin-top: 50px;

    
`
const ConsultItemContainer = styled.div`
    display: flex;
    border-radius: 10px;
    border: 1px solid #858585;
    background: #FFF;
    width: 850px;
    margin-left: 350px;
    margin-top: 30px;
    height: 200px;
    margin-bottom : 50px;

`
const EduDetailsContainer = styled.div`
    flex: 1; 
    display: flex;
    align-items: left;
    flex-direction: column;
`;

const EduDate = styled.p`
    color: #2400FF;
    font-family: Istok Web;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
    display: flex;
    width: 240px;
    height: 40px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    margin-left : 15px;
`

const DateBox = styled.div`
    width: 480px;
    height: 35px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #E7F4FD;
`
const ReservaionButton = styled.button`
    width: 132px;
    height: 150px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #E7F4FD99;
    border: #E7F4FD99;
    color: #4B93C5;
    text-align: center;
    font-family: Istok Web;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
    margin-left : auto;
    margin-right : 25px;
    margin-top :-120px;

`

const Container = styled.div`
    margin-bottom : 100px;
`

const MyConsultingReservation = () => {
    const dummyData = [
        { id: 1, Edutitle: '자바/스프링 개발자 양성과정', EduInstitution: '이젠아카데미컴퓨터학원', reservationDate: '2023-07-26 15:30', image:myconsulting},
        { id: 2, Edutitle: '자바/스프링 개발자 양성과정', EduInstitution: '이젠아카데미컴퓨터학원', reservationDate: '2023-07-26 15:30', image:myconsulting},
        { id: 3, Edutitle: '자바/스프링 개발자 양성과정', EduInstitution: '이젠아카데미컴퓨터학원', reservationDate: '2023-07-26 15:30', image:myconsulting },
        { id: 4, Edutitle: '자바/스프링 개발자 양성과정', EduInstitution: '이젠아카데미컴퓨터학원', reservationDate: '2023-07-26 15:30', image:myconsulting},
       

      ];
    return (
        <div>
            <AllButton>전체</AllButton>
            <DateButton>예약일 빠른순</DateButton>
            <Container>

            {dummyData.map((item) => (
                <ConsultItemContainer key={item.id}>
                    <ConsultImg src={item.image} />
                    <EduDetailsContainer>
                        <LinkStyle>교육과정 상세 확인하기 ></LinkStyle>
                        <EduTite>{item.Edutitle}</EduTite>
                        <EduInstitution>{item.EduInstitution}</EduInstitution>
                    <DateBox>
                        <EduDate>예약시간 {item.reservationDate}</EduDate>

                    </DateBox>
  
                        <ReservaionButton>입장하기</ReservaionButton>
                    </EduDetailsContainer>
                </ConsultItemContainer>
            ))}
            </Container>
     

        </div>
    );
};

export default MyConsultingReservation;