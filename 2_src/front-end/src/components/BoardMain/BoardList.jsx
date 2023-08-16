
import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group';
import data from './articles.json';


let TabContentTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  display:flex;
  justify-content: center;
  align-items: center;

`

const TabItem = styled.li`
    text-align: left;
    font-family: Istok Web;
    font-size: 23px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
    cursor: pointer;

  &.selected {
    background-color: #4AA9FF; /* 선택된 탭의 배경색 */
    color: #fff; /* 선택된 탭의 텍스트 색상 */
  }

  &.not-selected {
    color: #919191;

  }
`;


const ArticleList = styled.table`
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  frame:void;
  align-items: center;
  width: 100%;
  margin-bottom : 100px;
  
`
const Article = styled.tr`
  width: 40%;
  height: 200px;
  padding: 20px;
  border-top: 1px solid #919191;
  margin : 30px;
  margin-bottom : 1px;
  display:flex;
  flex-direction: row;

`

const Title = styled.h2`
height: 20%;
color: #000;
font-family: Istok Web;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-transform: capitalize;
`

const Content = styled.div`
color: #696868;
height: 50%;
font-family: Istok Web;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-transform: capitalize;
`

const AboutArticle = styled.div`
color: #696868;
height: 10%;
font-family: Istok Web;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-transform: capitalize;
margin-top: 20px;
`

const Img = styled.img`
  width: 25%;
  border-radius: 5px;
`
const Left = styled.div`
  width:75%;
`

const Nav=styled.div`
  width: 47%;
  justify-content: space-between;
  display: flex;
  margin-left : 180px;
  margin-top: 30px;
//   margin: 0 auto; 
`

const Tab = styled.a`
  text-align: center;
  font-family: Istok Web;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
  cursor: pointer;
  transition: color 0.2s;
  text-decoration: none;

  &.selected {
    color: #4AA9FF;
  }

  &.not-selected {
    color: #919191;
  }

`;

const Line = styled.hr`
    width: 76%;
    height: 0px;
    flex-shrink: 0;
    stroke-width: 3px;
    stroke: #B8B8B8;
    // margin-left : 30px;
    margin: 0 auto; 
    margin-top: 10px;
`
const WriteButton = styled.a`
    color : #FFF;
    border : none;
    border-radius: 5px;
    background-color : #A4C3FF;
    padding: 5px 13px;
    text-decoration: none;
`

function TabContent(props) {
    useEffect(() => {
        props.setOnOff(true);
    })
    if (props.clickedTab === 0) {
        
        return (
            <div style={{ display: 'flex', justifyContent: 'center', marginLeft: '150px'}}>
       

        <TabContentTitle className="mt-5">
            <ArticleList>

                {data.map((item) => (
                    <Article key={item.id}>
                        <Left>

                            <Title>{item.title}</Title>

                            <Content>{item.content}</Content>
                            <AboutArticle>{item.writerId} 조회수 {item.viewCnt} 댓글수 {item.commentCnt}</AboutArticle>
                        </Left>
                        <Img src={item.img} />
                    </Article>
                ))}
            </ArticleList>


        </TabContentTitle>
  
        </div>)
    } else if (props.clickedTab === 1) {
        return (
        <div style={{ display: 'flex', justifyContent: 'center', marginLeft: '150px'}}>
        <TabContentTitle className="mt-5">
            <ArticleList>

                {data.map((item) =>
                    item.type === 1 ? (

                        <Article key={item.id}>
                            <Left>
                                <Title>{item.title}</Title>
                                <Content>{item.content}</Content>
                                <AboutArticle>{item.writerId} 조회수 {item.viewCnt} 댓글수 {item.commentCnt}</AboutArticle>
                            </Left>
                            <Img src={item.img} />
                        </Article>
                    ) : null
                )}
            </ArticleList>
        </TabContentTitle>
        </div>)
    } else if (props.clickedTab === 2) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', marginLeft: '150px'}}>
                <TabContentTitle className="mt-5">
            <ArticleList>

                {data.map((item) =>
                    item.type === 2 ? (
                        <Article key={item.id}>
                            <Left>
                                <Title>{item.title}</Title>
                                <Content>{item.content}</Content>
                                <AboutArticle>{item.writerId} 조회수 {item.viewCnt} 댓글수 {item.commentCnt}</AboutArticle>
                            </Left>
                            <Img src={item.img} />
                        </Article>
                    ) : null
                )}
            </ArticleList>
        </TabContentTitle>
        </div>)
    }
    
    else if (props.clickedTab === 3) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', marginLeft: '150px'}}>
            <TabContentTitle className="mt-5">
            <ArticleList>

                {data.map((item) =>
                    item.type === 3 ? (
                        <Article key={item.id}>
                            <Left>
                                <Title>{item.title}</Title>
                                <Content>{item.content}</Content>
                                <AboutArticle>{item.writerId} 조회수 {item.viewCnt} 댓글수 {item.commentCnt}</AboutArticle>
                            </Left>
                            <Img src={item.img} />
                        </Article>
                    ) : null
                )}
            </ArticleList>
        </TabContentTitle>
        </div>)
    } else if (props.clickedTab === 4) {

        return (
            <div style={{ display: 'flex', justifyContent: 'center', marginLeft: '150px'}}>
            <TabContentTitle className="mt-5">
            <ArticleList>
                {data.map((item) =>
                    item.type === 4 ? (
                        <Article key={item.id}>
                            <Left>
                                <Title>{item.title}</Title>
                                <Content>{item.content}</Content>
                                <AboutArticle>{item.writerId} 조회수 {item.viewCnt} 댓글수 {item.commentCnt}</AboutArticle>
                            </Left>
                            <Img src={item.img} />
                        </Article>
                    ) : null
                )}
            </ArticleList>
        </TabContentTitle>
        </div>)
    }
};



export default function BoardList() {
    let [clickedTab, setClickedTab] = useState(0);
    let [onOff, setOnOff] = useState(false);

    return (
        <div >
            <Nav className="nav nav-underline" variant="tabs" defaultActiveKey="0">
                <TabItem className="nav-item" eventKey="0" onClick={() => { setOnOff(false); setClickedTab(0) }}>
                    <Tab aria-current="page" href="#" className={0 === clickedTab ? 'selected' : 'not-selected'}>전체</Tab>
                </TabItem>
                
                <TabItem className="nav-item" eventKey="1" onClick={() => { setOnOff(false); setClickedTab(1) }}>
                    <Tab className={1 === clickedTab ? 'selected' : 'not-selected'}>취업준비</Tab>
                </TabItem>
                <TabItem className="nav-item" eventKey="2" onClick={() => { setOnOff(false); setClickedTab(2) }}>
                    <Tab className={2 === clickedTab ? 'selected' : 'not-selected'}>국비교육</Tab>
                </TabItem>
                <TabItem className="nav-item" eventKey="3" onClick={() => { setOnOff(false); setClickedTab(3) }}>
                    <Tab className={3 === clickedTab ? 'selected' : 'not-selected'}>학습공유</Tab>
                </TabItem>
                <TabItem className="nav-item" eventKey="4" onClick={() => { setOnOff(false); setClickedTab(4) }}>
                    <Tab className={4 === clickedTab ? 'selected' : 'not-selected'}>취뽀후기</Tab>
                </TabItem>
            <WriteButton href="/BoardWrite">글쓰기</WriteButton>
            </Nav>
        <Line />

            <CSSTransition in={onOff} classNames="show" timeout={1000}>
                <TabContent clickedTab={clickedTab} setOnOff={setOnOff} />
            </CSSTransition>
        </div>
    );
}




