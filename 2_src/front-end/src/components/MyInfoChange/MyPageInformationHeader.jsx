import React from 'react';
// import myprofile from '../../assets/MyPageHome/myprofile.svg';
import styled from 'styled-components'
import Cyber_security_emoji from '../../assets/MyInfoChange/Cyber_security_emoji.svg'
import CatProfile_Circle from '../../assets/MyInfoChange/CatProfile_Circle.svg'

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

const TitleSmall = styled.p`
    color: #000;
    text-align: center;
    font-family: Istok Web;
    font-size: 40px;
    font-style: normal;
    line-height: normal;
    text-transform: capitalize;
    width: auto;
`
const DetailSmall = styled.p`
    color: #202020d4;
    text-align: center;
    font-family: Istok Web;
    font-size: 18px;
    font-style: normal;
    line-height: normal;
    text-transform: capitalize;
    text-align: left;
   
`

const FirstBox = styled.div`
    display: flex;
    align-items: center;
    background: #FFF;
    padding: 10px;
    margin-bottom: 10px;
    width: 1000px; 
    /* border: 1px solid #64686C; */
    background: #FFF;
    height : 350px;
    
`
const SecondBox = styled.div`
    display: flex;
    background: #FFF;
    width: 100%; 
    margin: auto;
    /* border: 1px solid #64686C; */
    padding-top: 20px;
    padding-left: 20px;
    background: #FFF;
    flex-direction: column;
    height : 100%;
`   
const ThirdBox = styled.div`
    display: flex;
    background: #FFF;
    width: 100%; 
    /* border: 1px solid #64686C; */
    background: #FFF;
    height : auto;
`
const FourthBox = styled.div`
    display: flex;
    background: #FFF;
    width: 90%; 
    /* border: 1px solid #64686C; */
    background: #FFF;
    height : auto;
    flex-direction: column;
`

const ContentBox = styled.div`
    display: flex;
    background: #FFF;
    padding: 10px;
    /* margin : auto; */
    /* margin-bottom: 10px; */
    width: 1000px; 
    border-radius: 10px;
    border: 1px solid #64686C;
    background: #FFF;
    height : auto;
`
const ContentBoxDetail = styled.div`
    display: flex;
    background: #FFF;
    padding: 10px;
    /* margin-top: 20px; */
    /* margin-bottom: 10px; */
    width: 100%; 
    border: 1px solid #64686C;
    background: #FFF;
    height : 350px;
`

const ContentBoxDetailUnderlined = styled.div`
    display: flex;
    background: #FFF;
    /* padding: 10px; */
    /* padding-top : auto; */
    padding-bottom: 0%;
    width: 95%; 
    background: #FFF;
    height : 5rem;
    border-bottom : 1px solid #64686C;
`
const SeparatedContentBox1 = styled.div`
    display: flex;
    background: #FFF;
    padding-top: 30px;
    margin-bottom: 10px;
    width: 15%; 
    background: #FFF;
    height : 20px;
`
const SeparatedContentBox2 = styled.div`
    display: flex;
    background: #FFF;
    padding-top: 30px;
    /* margin-bottom: 10px; */
    width: 60%; 
    background: #FFF;
    height : 15px;
`
const SeparatedContentBox3 = styled.div`
    display: flex;
    background: #FFF;
    padding-top: 30px;
    width: 20%; 
    background: #FFF;
    height : auto;
`
const SelectStyled = styled.select`
  padding: 12px;
  font-size: 16px;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  width: 30%; /* 원하는 너비 값으로 조정해주세요 */
  height: 10%;
`;

const MyPageInformationHeader = () => {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '90vh'
    };
    const imgStyle = {
        width: '350px',
        height: 'auto',
        marginBottom: '10px' 
    };

    const imgStyle2= {
        width: '70px',
        height: 'auto',
        alignItems : 'auto',
        // marginBottom: '10px'
    }

    return (
        <div style={containerStyle}>
            {/* <img src={myprofile} alt="myprofile" style={imgStyle} /> */}
            <Title>개인 정보</Title>
            <TitleDetail>맞춤 교육 및 채용공고정보를 제공하기 위해 사용되는 나와 내 환경설정에 관한 정보입니다.</TitleDetail>
            <br/>
            <br/>
            <FirstBox>
              

                    <SecondBox>
                   
                        <ThirdBox>
                        <TitleSmall>
                        GoodBe에 표시되는 프로필 정보
                        </TitleSmall>
                        </ThirdBox>

                        <FourthBox>
                            <DetailSmall>
                        개인 정보 및 이를 관리하기 위한 옵션입니다. 타인에게 보이는 닉네임, 프로필 사진을 설정할 수 있습니다. 
                        </DetailSmall>
                        <DetailSmall>
                        프로필 정보도 한눈에 확인할 수도 있습니다.
                        </DetailSmall>
                        </FourthBox>
                    
                    </SecondBox>

             <img src={Cyber_security_emoji} alt="myprofile" style={imgStyle} /> 
            </FirstBox>

        <ContentBox>

            <SecondBox>
                   
                   <ThirdBox>

                   <TitleSmall>
                   기본 정보
                   </TitleSmall>

                   </ThirdBox>

                   <FourthBox>

                       <DetailSmall>
                       일부 정보가 GoodBe 서비스를 사용하는 다른 사람에게 표시될 수 있습니다
                   </DetailSmall>
                   
                   </FourthBox>
                   <ContentBoxDetailUnderlined >
                    <SeparatedContentBox1>
                    프로필 사진
                    </SeparatedContentBox1>
                     <SeparatedContentBox2>
                     사진을 추가하면 다른 사람이 나를 알아보기 쉬워지며 내가 계정에 로그인되어 있는지 확인할 수 있습니다.
                    </SeparatedContentBox2>
                    <SeparatedContentBox3>
                    <img src={CatProfile_Circle} alt="myprofile" style={imgStyle2} /> 
                    </SeparatedContentBox3>
                   </ContentBoxDetailUnderlined>
               
                   <ContentBoxDetailUnderlined >
                    <SeparatedContentBox1>
                    닉네임
                    </SeparatedContentBox1>
                     <SeparatedContentBox2>
                     지르나르냥
                    </SeparatedContentBox2>
                  
                   </ContentBoxDetailUnderlined>

                   <ContentBoxDetailUnderlined >
                    <SeparatedContentBox1>
                    생년월일
                    </SeparatedContentBox1>
                     <SeparatedContentBox2>
                     1999.11.28
                    </SeparatedContentBox2>
                  
                   </ContentBoxDetailUnderlined>               
                   
                   
                   
                    <ContentBoxDetailUnderlined >
                    <SeparatedContentBox1>
                    성별
                    </SeparatedContentBox1>
                     <SeparatedContentBox2>
                     여성
                    </SeparatedContentBox2>
                  
                   </ContentBoxDetailUnderlined>



            </SecondBox>

        </ContentBox>


        <br/>







        <ContentBox>

            <SecondBox>
                   
                   <ThirdBox>

                   <TitleSmall>
                   관심 취업 정보
                   </TitleSmall>

                   </ThirdBox>

                   <FourthBox>

                       <DetailSmall>
                       관심 취업 정보는  GoodBe 서비스를 사용하는 과정에서 이용될 수 있습니다
                   </DetailSmall>
                   
                   </FourthBox>
                   
               
                   <ContentBoxDetailUnderlined >
                    <SeparatedContentBox1>
                    관심 회사
                    </SeparatedContentBox1>
                     <SeparatedContentBox2>
                     현대자동차
                    </SeparatedContentBox2>
                  
                   </ContentBoxDetailUnderlined>

                   
                   
                   
                    <ContentBoxDetailUnderlined >
                    <SeparatedContentBox1>
                    관심 직무
                    </SeparatedContentBox1>
                     <SeparatedContentBox2>
                     경로탐색 sW개발
                    </SeparatedContentBox2>
                  
                   </ContentBoxDetailUnderlined>



            </SecondBox>

        </ContentBox>



<ContentBox>

            <SecondBox>
                   
                   <ThirdBox>

                   <TitleSmall>
                   개인 정보
                   </TitleSmall>

                   </ThirdBox>

                   <FourthBox>

                       <DetailSmall>
                       일부 정보가 GoodBe 서비스를 사용하는데 사용될 수 있습니다.
                   </DetailSmall>
                   
                   </FourthBox>
                   <ContentBoxDetailUnderlined >
                    <SeparatedContentBox1>
                    이름
                    </SeparatedContentBox1>
                     <SeparatedContentBox2>
                     유지나
                    </SeparatedContentBox2>

                   </ContentBoxDetailUnderlined>
               
                   <ContentBoxDetailUnderlined >
                    <SeparatedContentBox1>
                    이메일
                    </SeparatedContentBox1>
                     <SeparatedContentBox2>
                     wlskb@naver.com
                    </SeparatedContentBox2>
                  
                   </ContentBoxDetailUnderlined>

                   <ContentBoxDetailUnderlined >
                    <SeparatedContentBox1>
                    비밀번호
                    </SeparatedContentBox1>
                     <SeparatedContentBox2>
                     **********
                    </SeparatedContentBox2>
                  
                   </ContentBoxDetailUnderlined>               
                   
                   
                   
                    <ContentBoxDetailUnderlined >
                    <SeparatedContentBox1>
                    거주지역    
                    </SeparatedContentBox1>
                    <SeparatedContentBox2>
                            {/* 여기에 option 태그를 넣어주세요 */}
                            <SelectStyled>
                                <option value="Seoul, South Korea">Seoul, South Korea</option>
                                <option value="New York, USA">New York, USA</option>
                                <option value="Tokyo, Japan">Tokyo, Japan</option>
                                {/* 다른 옵션들도 추가할 수 있습니다 */}
                            </SelectStyled>
                        </SeparatedContentBox2>
                  
                   </ContentBoxDetailUnderlined>



            </SecondBox>

        </ContentBox>


        <br/>
        










        </div>
    );
};

export default MyPageInformationHeader;