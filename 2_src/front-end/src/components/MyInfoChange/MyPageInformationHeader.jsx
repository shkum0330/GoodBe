import React from 'react';
// import myprofile from '../../assets/MyPageHome/myprofile.svg';
import styled from 'styled-components'
import Cyber_security_emoji from '../../assets/MyInfoChange/Cyber_security_emoji.svg'

const Title = styled.p`
    color: #000;
    text-align: center;
    font-family: Istok Web;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
`;
const TitleSmall = styled.p`
    color: #000;
    text-align: center;
    font-family: Istok Web;
    font-size: 35px;
    font-style: normal;
    /* font-weight: 700; */
    line-height: normal;
    text-transform: capitalize;
`
const FirstBox = styled.div`
    display: flex;
    align-items: 
    background: #FFF;
    padding: 10px;
    margin-bottom: 10px;
    width: 1000px; 
    /* border-radius: 10px; */
    border: 1px solid #64686C;
    background: #FFF;
    height : 350px;
`
const SecondBox = styled.div`
    display: flex;
    background: #FFF;
    /* padding: 10px; */
    /* margin-bottom: 10px; */
    width: 500%; 
    /* border-radius: 10px; */
    border: 1px solid #64686C;
    background: #FFF;
    height : 20%;
`

const TitleDetail = styled.p`
    color: #64686C;
    text-align: center;
    font-family: Istok Web;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
`
const MyPageInformationHeader = () => {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '90vh'
    };
    const imgStyle = {
        width: '400px',
        height: 'auto',
        marginBottom: '10px' // 여기에 원하는 마진값을 줄여줍니다.
    };

    return (
        <div style={containerStyle}>
            {/* <img src={myprofile} alt="myprofile" style={imgStyle} /> */}
            <Title>개인 정보</Title>
            <TitleDetail>맞춤 교육 및 채용공고정보를 제공하기 위해 사용되는 나와 내 환경설정에 관한 정보입니다.</TitleDetail>

            <FirstBox>
              

                    <SecondBox>
                    <TitleSmall>
                     GoodBe에 표시되는 프로필 정보
                    </TitleSmall>
                    </SecondBox>
                    <br/>
                    <SecondBox>
                    개인 정보 및 이를 관리하기 위한 옵션입니다. 타인에게 보이는 닉네임, 프로필 사진을 설정할 수 있습니다. 
            프로필 정보도 한눈에 확인할 수도 있습니다.
                    </SecondBox>


             <img src={Cyber_security_emoji} alt="myprofile" style={imgStyle} /> 
            </FirstBox>



        </div>
    );
};

export default MyPageInformationHeader;