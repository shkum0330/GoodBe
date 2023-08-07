import React from 'react';
import styled from 'styled-components';

const GoToLogin = styled.a`
    color: #000;
    text-align: left;
    font-family: Istok Web;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
    text-decoration: none;
    
`
const Container = styled.div`
    margin-left : 250px;
    margin-top: 40px;
`

const RecommendHeader = styled.p`
    color: #000;
    text-align: left;
    font-family: Istok Web;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
    margin-top : 20px;
`
const NaverBackend = styled.p`
    color: #595959;
    font-family: Istok Web;
    font-size: 23px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
`

const NaverBackendBox = styled.div`
    width: 1000px;
    flex-shrink: 0;
    border-radius: 15px;
    background: #FFD1D1;
    padding: 20px;
    display: flex;
    align-items: right;
    justify-content: space-between;
`;

const MoreInfo = styled.a`
    color: #5F5F5F;
    font-family: Istok Web;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
    text-decoration: none;
    cursor: pointer;
`;
const EduExampleRecommend = () => {

    return (
        <Container>
            <GoToLogin>😊 로그인 하고, 맞춤 교육정보를 확인하세요</GoToLogin>
            <RecommendHeader>👾 굿비 추천 교육</RecommendHeader>
            <NaverBackendBox>
                <NaverBackend>네이버 백엔드 <br />지원자들이 관심있는</NaverBackend>
                <MoreInfo>더보기></MoreInfo>
            </NaverBackendBox>
        </Container>
    );
};

export default EduExampleRecommend;