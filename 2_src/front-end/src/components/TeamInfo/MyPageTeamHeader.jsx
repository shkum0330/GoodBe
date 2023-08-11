import React from 'react';
import styled from 'styled-components'
import TeamInfo from '../../assets/TeamInfo/TeamInfo.svg';

const MyTeamHeader = styled.p`
    color: #000;
    text-align: center;
    font-family: Istok Web;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
    
`
const MyTeamDetail = styled.p`
    color: #64686C;
    text-align: center;
    font-family: Istok Web;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
`

const Teamimg = styled.img`
    width: 900px;
    height: 900px;
    flex-shrink: 0;
    margin-left : 310px;
    display: block;
    display: block; /* This removes any extra spacing around the image */
    margin: 0 auto;
`

const MyPageTeamHeader = () => {
    return (
        <div>

            <MyTeamHeader>팀 소개</MyTeamHeader>
            <MyTeamDetail>GoodBe를 개발한 개발자들을 소개합니다</MyTeamDetail>
            <Teamimg src={TeamInfo} alt="TeamInfo" />
        </div>
    );
};

export default MyPageTeamHeader;


