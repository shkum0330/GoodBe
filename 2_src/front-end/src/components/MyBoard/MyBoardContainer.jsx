import React from 'react';
import styled from 'styled-components';
import { AiOutlineLike } from "react-icons/ai";
import { LiaCommentDotsSolid } from "react-icons/lia";
import { AiOutlineEye } from "react-icons/ai";

const BoardContainer = styled.div`
    border-radius: 10px;
    border: 1px solid #858585;
    background: #FFF;
    margin-left: 350px;
    margin-top: 30px;
    width: 1059px;

`
const BoardType = styled.p`
    color: #60A0EF;
    font-family: Istok Web;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
`
const BoardTitle = styled.p`

    color: #000;
    font-family: Istok Web;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
`

const EduDate = styled.p`
    color: #7D7D7D;
    font-family: Istok Web;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
`


const BoardBox = styled.div`
    padding: 20px;
`
const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: -50px;

`;
const LikeCount = styled.p`
    padding : 5px;
    color: #757575;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
    align-items: center;
`;

const CommentCount = styled.p`
    padding : 5px;
    color: #757575;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
    margin-left: 5px;
`;

const ViewCount = styled.div`
    // padding : 10px;
    margin-left: 5px;
    color: #757575;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
`

const MyBoardContainer = () => {
    const dummyData = [
        { id: 1, BoardType:'취업게시판', Boardtitle: '화이팅합시다다들모두!', BoardDate: '2023-07-26', like: '3', comments:'4', views: '10'},
        { id: 2, BoardType:'취업게시판', Boardtitle: '화이팅합시다다들모두!', BoardDate: '2023-07-26',like: '3',comments:'4', views: '10'},
        { id: 3, BoardType:'취업게시판', Boardtitle: '화이팅합시다다들모두!', BoardDate: '2023-07-26', like: '3', comments:'4', views: '10' },
        { id: 4, BoardType:'취업게시판', Boardtitle: '화이팅합시다다들모두!', BoardDate: '2023-07-26', like: '3', comments:'4', views: '10'},
    ]
    return (
        <div>
             {dummyData.map((item) => (
                <BoardContainer key={item.id}>
                    <BoardBox>
                        <BoardType>{item.BoardType}</BoardType>
                        <BoardTitle>{item.Boardtitle}</BoardTitle>
                        <EduDate>{item.BoardDate}</EduDate>
                        <IconContainer>
                            <AiOutlineLike size={26}/>
                            <LikeCount>{item.like}개</LikeCount>
                            <LiaCommentDotsSolid size={26}/>
                            <CommentCount>{item.comments}개</CommentCount>
                            <AiOutlineEye size={26}/>
                            <ViewCount>{item.views}개</ViewCount>
                        </IconContainer>
                    </BoardBox>
                </BoardContainer>
            ))}
        </div>
    );
};

export default MyBoardContainer;