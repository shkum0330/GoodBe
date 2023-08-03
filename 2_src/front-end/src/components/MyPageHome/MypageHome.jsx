import React from 'react';
import styled from 'styled-components'
import myedulike from '../../assets/MyPageHome/myedulike.svg';
import myinfochange from '../../assets/MyPageHome/myinfochange.svg';
import myjoblike from '../../assets/MyPageHome/myjoblike.svg';
import myreservation from '../../assets/MyPageHome/myreservation.svg';
import mywrite from '../../assets/MyPageHome/mywrite.svg';
import team from '../../assets/MyPageHome/team.svg';


const Box = styled.div`
    display: flex;
    align-items: flex-start;
    border-radius: 10px;
    border: 1px solid #64686C;
    background: #FFF;
    padding: 10px;
    margin-bottom: 10px;


`
const Image = styled.img`
    margin-left: 10px;
    width: 250px;
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const MypageHome = () => {
    const dummyData = [
        { id: 1, title :'개인정보수정 및 맞춤 회사, 직무 설정', detail: '희망 회사와 직무를 설정하면 맞춤 교육정보를 안내해드립니다.', image:myinfochange},
        { id: 2, title :'교육 상담 예약 내역 확인', detail: '교육 상담을 통해 궁금한 점들을 질문하고 답변받을 수 있습니다.', image:myreservation},
        { id: 3, title :'관심 교육과정 관리', detail: '관심을 표시한 교육과정 리스를 확인 할 수 있습니다.', image:myedulike},
        { id: 4, title :'관심 채용공고 관리', detail: '관심을 표시한 채용공고들을 확인하고 지원할 수 있습니다.', image:myjoblike},
        { id: 5, title :'내가 쓴 글 관리', detail: '작성한 글을 확인하고 수정 및 삭제 가능합니다.', image:mywrite},
        { id: 6, title :'문의 및 개발팀 보기', detail: '굿비를 만든 개발자들과 소통하고 문의 할 수 있습니다.', image:team},

      ];
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        minHeight: '80vh',
        marginLeft: '300px',
        marginTop: '20px',
    }
    return (
        <div style={containerStyle}>
            {dummyData.map((data) => (
            <Box key={data.id}>
                <Image src={data.image} alt="Image" />
                <TextContainer>
                    <h3>{data.title}</h3>
                    <p>{data.detail}</p>
                </TextContainer>
            </Box>
            ))}
        </div>
    );
};

export default MypageHome;