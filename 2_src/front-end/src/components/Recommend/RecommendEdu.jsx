import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { BsFillHeartFill } from "react-icons/bs";
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


const API_BASE_URL = 'https://i9a801.p.ssafy.io';

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
    margin-right: 20px;
    margin-top : 50px;
`;

const EduDetailButton = styled.button`
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
    margin-right: 20px;
    margin-top : 50px;
`;
const HeartEmoji = styled(BsFillHeartFill)`
    margin-left: 20px;
    font-size: 30px;
    margin-top: 130px;
    color: #FF5A79; 
`;


const RecommendEdu = () => {
    const [eduList, setEduList] = useState([]);
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const Keyword = query.get('searchKeyword');

    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const Keyword = query.get('searchKeyword');
        if (Keyword) {
            console.log('검색어 있음');
            axios
                .get(`${API_BASE_URL}/analysis/${Keyword}`)
                .then(function (response) {
                    console.log(response.data);
                    console.log('데이터 받아옴');
                    setEduList(response.data);
                })
                .catch(function (error) {
                  console.log(Keyword)
                    console.error('데이터 불러오기 오류:', error);
                });
        } else {
            console.log('검색어 없음');
            axios
                .get(`${API_BASE_URL}/search/edu/all`)
                .then(function (response) {
                    console.log(response.data);
                    // setEduList(response.data);
                    console.log('전체 데이터 받아옴');
                })
                .catch(function (error) {
                    console.error('데이터 불러오기 오류:', error);
                });
        }
    }, [Keyword]);

    
    const container = {
        width: '60%',
        margin: '0 auto',
        justifyContent: 'center',
        marginTop: '50px',
    
      };
      const lineStyle = {
        borderRight: '1px solid #ccc',
        marginRight: '100px',
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
        marginTop: '-35px',
        
      };

      const buttonContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: '10px',
      };

      const eduInfoStyle = {
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'left',
        gap: '10px',
    };

    const eduDurationStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100%'
    };

         // 상세보기로 이동

    
    return (
        <div style={container}>
          {eduList.map((item) => (
            <div key={item.id} style={itemStyle}>
              <div style={lineStyle}>
                <EduInstitution>{item.company}</EduInstitution>
                <Edutitle>{item.title}</Edutitle>
                <div>

                <EduInfo style={eduInfoStyle}>
                  <p>{item.address}</p>
                  <p>{item.expense}</p>
                  <p>{item.onoff}</p>
                </EduInfo>
                </div>
              </div>
              <div style={durationStyle}>
                <div style={eduDurationStyle}>
                  <EduDurationHeader>교육기간</EduDurationHeader>
                  <EduDuration>{item.period}</EduDuration>
                </div>
                <div style={buttonContainerStyle}>
                  <ReserveButton>상담예약</ReserveButton>
                  <EduDetailButton>상세보기</EduDetailButton>
                  <HeartEmoji  />

                </div>
              </div>

            </div>
          ))}

        </div>
    );
};

export default RecommendEdu;