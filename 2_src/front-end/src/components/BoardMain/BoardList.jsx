
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

const TabList=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Tab= styled.div`
    text-align: center;
    font-family: Istok Web;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;

    width:300px;
`





const TabItem = styled.li`
    text-align: center;
    font-family: Istok Web;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;

  &.selected {
    color: #4AA9FF;
  }

  &.not-selected {
    color: #919191;

  }
`;

const ArticleList = styled.table`
margin:10px 10px 10px 10px;
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  frame:void;
  align-items: center;
  
//   border: 1px solid black;

  
`
const Article = styled.tr`
  width: 40%;
  height: 200px;
  padding: 20px;
  border: 1px solid #919191;
  margin:10px;
  border-radius: 10px;
  display:flex;
  flex-direction: row;

`

const Title = styled.h2`
height: 20%;
color: #000;
font-family: Istok Web;
font-size: 20px;
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

const Nav=styled.ul`
  width: 90%;
  justify-content: space-between;

  display: flex;
  flex-direction: row;
`

function TabContent(props) {
    useEffect(() => {
        props.setOnOff(true);
    })
    if (props.clickedTab === 0) {
        return (<TabContentTitle className="mt-5">
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


        </TabContentTitle>)
    } else if (props.clickedTab === 1) {
        return (<TabContentTitle className="mt-5">
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
        </TabContentTitle>)
    } else if (props.clickedTab === 2) {
        return (<TabContentTitle className="mt-5">
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
        </TabContentTitle>)
    }
    else if (props.clickedTab === 3) {
        return (<TabContentTitle className="mt-5">
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
        </TabContentTitle>)
    } else if (props.clickedTab === 4) {
        return (<TabContentTitle className="mt-5">
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
        </TabContentTitle>)
    }
};

export default function BoardList() {

    let [clickedTab, setClickedTab] = useState(0);
    let [onOff, setOnOff] = useState(false);

    

    return (

        <div style={{
            display : 'flex',
            alignItems : 'center',
            flexDirection : 'column'
            

        }}  >
            <Nav class="nav nav-underline" variant="tabs" defaultActiveKey="0">
                <TabItem class="nav-item" eventKey="0" onClick={() => { setOnOff(false); setClickedTab(0) }}>
                    <a aria-current="page" href="#" className={0 === clickedTab ? 'selected' : 'not-selected'}>전체</a>
                </TabItem>
                <TabItem class="nav-item" eventKey="1" onClick={() => { setOnOff(false); setClickedTab(1) }}>
                    <a class="nav-link" href="#" className={1 === clickedTab ? 'selected' : 'not-selected'}>취업준비</a>
                </TabItem>
                <TabItem class="nav-item" eventKey="2" onClick={() => { setOnOff(false); setClickedTab(2) }}>
                    <a class="nav-link" href="#" className={2 === clickedTab ? 'selected' : 'not-selected'}>국비교육</a>
                </TabItem>
                <TabItem class="nav-item" eventKey="3" onClick={() => { setOnOff(false); setClickedTab(3) }}>
                    <a class="nav-link" href="#" className={3 === clickedTab ? 'selected' : 'not-selected'}>학습공유</a>
                </TabItem>
                <TabItem class="nav-item" eventKey="4" onClick={() => { setOnOff(false); setClickedTab(4) }}>
                    <a class="nav-link" href="#" className={4 === clickedTab ? 'selected' : 'not-selected'}>취뽀후기</a>
                </TabItem>

            </Nav>

            <CSSTransition in={onOff} classNames="show" timeout={1000}>
                <TabContent clickedTab={clickedTab} setOnOff={setOnOff} />
            </CSSTransition>



        </div>
    )
}


