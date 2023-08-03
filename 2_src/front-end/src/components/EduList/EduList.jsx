import React from 'react';
import styled from 'styled-components';
import { BsFillHeartFill } from "react-icons/bs";

const EduInstitution = styled.p`
    color: #919191;
    font-family: Istok Web;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
    margin-top: 30px;

`

const Edutitle = styled.p`
    color: #000;
    font-family: Istok Web;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;


`
const EduInfo = styled.p`
    color: #8899D6;
    font-family: Istok Web;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
    margin-bottom: 1px;
`
const EduDurationHeader = styled.p`
    color: #000;
    font-family: Istok Web;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
    margin-top: 60px;

`
const EduDuration = styled.p`
    color: #8899D6;
    font-family: Istok Web;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
    margin-top : 5px;

`
const ReserveButton = styled.button`
    background-color: #8899D6;
    color: white;
    font-family: Istok Web;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 60px;
`;
const HeartEmoji = styled(BsFillHeartFill)`
    font-size: 30px;
    margin-top: 20px;
    color: #FF5A79; 
`;


const EduList = () => {
    const dummyData = [
        { id: 1, EduInstitution :'내일배움캠프', Edutitle: 'AI 웹 개발 트랙 8기', EduAbout:'백엔드', fee: '무료', onoff: '온라인', Duration: '2023/08/07 ~ 2023/01/14'},
        { id: 2, EduInstitution :'내일배움캠프', Edutitle: '백엔드 웹 개발 트랙 8기', EduAbout:'백엔드', fee: '무료', onoff: '온라인', Duration: '2023/08/07 ~ 2023/01/14'},
        { id: 3, EduInstitution :'내일배움캠프', Edutitle: '프론트엔드 웹 개발 트랙 8기', EduAbout:'백엔드', fee: '무료', onoff: '온라인', Duration: '2023/08/07 ~ 2023/01/14'},
        { id: 4, EduInstitution :'내일배움캠프', Edutitle: 'AI 웹 개발 트랙 9기', EduAbout:'백엔드', fee: '무료', onoff: '온라인', Duration: '2023/08/07 ~ 2023/01/14' },
        { id: 5, EduInstitution :'내일배움캠프', Edutitle: 'AI 웹 개발 트랙 10기', EduAbout:'백엔드', fee: '무료', onoff: '온라인', Duration: '2023/08/07 ~ 2023/01/14' },
      ];
      const container = {
        width: '60%',
        margin: '0 auto',
        justifyContent: 'center',
    
      };
      const lineStyle = {
        borderRight: '1px solid #ccc',
        marginRight: '60px',
      }

      const itemStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '5px',
        border: '1px solid #ccc',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '20px',
      };
    
      const durationStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '5px',
      };

      const buttonContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      };

      const eduInfoStyle = {
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'center',
        gap: '10px',
    };

    const eduDurationStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100%'
    };

      return (
        <div style={container}>
          {dummyData.map((item) => (
            <div key={item.id} style={itemStyle}>
              <div style={lineStyle}>
                <EduInstitution>{item.EduInstitution}</EduInstitution>
                <Edutitle>{item.Edutitle}</Edutitle>
                <div>

                <EduInfo style={eduInfoStyle}>
                  <p>{item.EduAbout}</p>
                  <p>{item.fee}</p>
                  <p>{item.onoff}</p>
                </EduInfo>
                </div>
              </div>
              <div style={durationStyle}>
                <div style={eduDurationStyle}>
                  <EduDurationHeader>교육기간</EduDurationHeader>
                  <EduDuration>{item.Duration}</EduDuration>
                </div>
                <div style={buttonContainerStyle}>
                  <ReserveButton>상담예약</ReserveButton>
                  <HeartEmoji  />

                </div>
              </div>
              <hr />
            </div>
          ))}
        </div>
    );
};

export default EduList;