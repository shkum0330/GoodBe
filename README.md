# GoodBE
국비교육 검색 서비스 GoodBE <br/>
가고싶은 회사와 직무를 검색하여 알맞는 국비교육을 찾아보자!

## 😊팀원 소개
+ 이승환 : Back-End(검색, 분석 서버 개발), ML, Deploy
+ 유지나 : PM, Front-End, Back-End(화상, 채팅 서버 개발)
+ 금세현 : Back-End (비즈니스 서버 개발)
+ 이정석 : Front-End
+ 이성원 : Front-End
+ 이해준 : Back-End (인증 서버 개발)
## 🤔 프로젝트 소개
### 기획 배경
+ 가고 싶은 회사에서 필요로 하는 기술스택을 미리 확인하지 못하는 점, 어떤 직무가 있는지 알아보지 못하는 경우가 있습니다.
+ 또한 청년 취업률이 지속적으로 낮아져 교육에 대한 필요성이 높아지고 있습니다.
### 기획 의도
+ 회사 & 직무를 검색하면 채용공고 속 중요 내용과 일치하는 국비교육을 연결하여 알맞은 교육을 받을 수 있는 검색 서비스
## ✏ 주요 기능 소개
### 국비교육 검색
![image](https://github.com/56unbreakable/TIL/assets/74917346/7a755c1c-4c1e-4e0c-9038-179b42064ec0)
### 채용공고 검색
![image](https://github.com/56unbreakable/TIL/assets/74917346/3546849a-8577-4c17-811f-065d3aa44ed2)
### 화상통화
![image](https://github.com/56unbreakable/TIL/assets/74917346/ea1d9115-a097-428a-b2d9-544da23bd2d4)
### 채팅
![image](https://github.com/56unbreakable/TIL/assets/74917346/5e9263e9-ca0f-4747-968f-360045a04d95)
## 📂 설계
### 아키텍처
![image](https://github.com/56unbreakable/TIL/assets/74917346/983b9b96-e068-4c79-8bda-a91c87189af7)
### ERD

### 기술 명세서
https://docs.google.com/spreadsheets/d/1wR6wm5hLauauvdlMhpn2Ze2gGXfd3LKQXdIopL0U0Fs/edit#gid=0
### 폴더 구조
+ goodbe
    + 설계 산출물
    + src
        + back-end
            + ans
            + business
            + search
            + auth
            + video
            + chat
        + frond-end
    + 발표자료
### 기술 스택
+ React
+ Node.js
+ Django
+ Spring Boot
+ Transformers
+ Docker
+ Nginx

## 후기
### 부족한.
1. 깃 플로우, 깃 컨벤션을 제대로 설정하고 서로의 깃 플로우를 추적하면서 개발해야한다
2. api명세서를 만들어야한다. swagger는 테스트용도로만 사용하고 따로 명세서를 만들어야겠다.
3. 모든 문서가 한군데 모여있게 해야한다
4. 지라를 통해서 팀원들이 서로 어떤 태스크를 수행하는지 확인해야한다
5. 스프린트 스타트할때 서로 역할 및 할일을 제대로 적고 수행해야한다.
6. 서로 코드리뷰를 하면서 서로의 코드에 대해서 이해해야한다.
7. 서로 자주 소통하며 프로젝트를 연결해야한다.
8. CI/CD를 미리 구축하고, 빠르게 개발/테스트하는 과정을 거쳐야한다.

### 만족스러운.

1. MSA 구조를 잘 설계하여 개발 시에 아키텍처에 대한 어려움이 없었다.
2. django, spring boot, Node,js 등 여러 개발환경을 동시에 사용해보는 경험을 할 수 있었다.
3. 수동 배포를 통해 배포 과정을 이해할 수 있었다.
4. Docker와 같이 최근 핫한 기술들을 활용해볼 수 있었다.