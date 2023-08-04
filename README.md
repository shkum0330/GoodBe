# 유지나(BE, FE)
## 채팅 서비스 구현 
이 README 파일은 Node.js, MongoDB 및 Socket.io를 사용하여 채팅 서비스를 구현하는 방법을 안내합니다. 이 프로젝트를 따라하는 데 필요한 기초적인 지식은 Node.js, Express, MongoDB, Socket.io 및 JavaScript에 대한 이해입니다.
### 요구 사항
Node.js 설치: https://nodejs.org/ 에서 Node.js를 다운로드하여 설치합니다.
MongoDB 설치: https://www.mongodb.com/try/download/community 에서 MongoDB를 다운로드하여 설치합니다.
### 프로젝트 설정
새로운 디렉토리를 생성하고, 프로젝트 폴더로 이동합니다.
프로젝트를 초기화하고 package.json 파일을 생성합니다.
```
npm init -y
```
Express, Socket.io, Mongoose (MongoDB 연동), 그리고 기타 필요한 패키지를 설치합니다.
```
npm install express socket.io mongoose
```
### 서버 구현
index.js 파일을 생성하고 다음과 같이 서버를 설정합니다.
```
// index.js

const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const mongoose = require('mongoose');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const PORT = process.env.PORT || 3000;

// MongoDB 연결 설정
mongoose.connect('mongodb://localhost:27017/chat', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// MongoDB 스키마 및 모델 정의 (예시)
const chatSchema = new mongoose.Schema({
  username: String,
  message: String,
  timestamp: { type: Date, default: Date.now },
});

const ChatMessage = mongoose.model('ChatMessage', chatSchema);

// Socket.io 연결 이벤트 핸들링
io.on('connection', (socket) => {
  console.log('New user connected');

  // 클라이언트로부터 메시지 수신
  socket.on('chatMessage', (data) => {
    console.log(data);
    // 수신된 메시지를 MongoDB에 저장
    const newMessage = new ChatMessage(data);
    newMessage.save();
    // 모든 클라이언트에게 메시지 브로드캐스트
    io.emit('message', data);
  });

  // 연결 종료 이벤트 핸들링
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```
MongoDB 연결 부분에는 실제 MongoDB 데이터베이스 URL을 사용하여 연결해야 합니다.
클라이언트 구현
프론트엔드 파일을 생성하고, index.html 파일을 다음과 같이 구현합니다.

```
<!-- index.html -->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chat Service</title>
</head>
<body>
  <h1>Chat Service</h1>
  <ul id="messages"></ul>
  <form id="chat-form">
    <input type="text" id="username" placeholder="Username">
    <input type="text" id="message" placeholder="Message">
    <button type="submit">Send</button>
  </form>

  <script src="/socket.io/socket.io.js"></script>
  <script>
    const socket = io();

    const messages = document.getElementById('messages');
    const chatForm = document.getElementById('chat-form');
    const usernameInput = document.getElementById('username');
    const messageInput = document.getElementById('message');

    chatForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const username = usernameInput.value;
      const message = messageInput.value;
      if (username && message) {
        socket.emit('chatMessage', { username, message });
        messageInput.value = '';
      }
    });

    socket.on('message', (data) => {
      const li = document.createElement('li');
      li.textContent = `${data.username}: ${data.message}`;
      messages.appendChild(li);
    });
  </script>
</body>
</html>
```
프론트엔드 코드에서는 Socket.io 클라이언트를 사용하여 서버와 통신하고, 사용자의 메시지를 서버로 보내고, 서버에서 받은 메시지를 화면에 렌더링합니다.
실행
MongoDB 서버를 실행합니다.
```
nodemon index.js
```
브라우저에서 http://localhost:3000에 접속하여 채팅 서비스를 테스트합니다.
## 화상 서비스 구현
이 README 파일은 WebRTC와 Node.js를 사용하여 화상 서비스를 구현하는 방법을 안내합니다. 이 프로젝트를 따라하는 데 필요한 기초적인 지식은 WebRTC, Node.js, Express 및 JavaScript에 대한 이해입니다.
### 요구 사항
Node.js 설치: https://nodejs.org/ 에서 Node.js를 다운로드하여 설치합니다.
### 프로젝트 설정
새로운 디렉토리를 생성하고, 프로젝트 폴더로 이동합니다.
프로젝트를 초기화하고 package.json 파일을 생성합니다.
```
npm init -y
```
Express 및 기타 필요한 패키지를 설치합니다.
```
npm install express socket.io
```
WebRTC를 사용하기 위해 socket.io-client를 설치합니다. 클라이언트는 브라우저에서 실행될 것이므로 이 패키지는 브라우저에 로드됩니다.
```
npm install socket.io-client
```
### 서버 구현
index.js 파일을 생성하고 다음과 같이 서버를 설정합니다.
```
// index.js

const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const PORT = process.env.PORT || 3000;

// 화상 통화에 참여한 사용자들을 저장할 배열
const connectedUsers = [];

// Socket.io 연결 이벤트 핸들링
io.on('connection', (socket) => {
  console.log('New user connected');

  // 새로운 사용자가 입장할 때, 현재 접속중인 사용자들에게 이를 알립니다.
  socket.on('newUser', (username) => {
    connectedUsers.push({ id: socket.id, username });
    io.emit('userList', connectedUsers);
  });

  // 화상 통화에 참여한 사용자들이 통화 종료를 요청할 때, 해당 사용자를 리스트에서 제거합니다.
  socket.on('disconnect', () => {
    console.log('User disconnected');
    const disconnectedUser = connectedUsers.find((user) => user.id === socket.id);
    if (disconnectedUser) {
      connectedUsers.splice(connectedUsers.indexOf(disconnectedUser), 1);
      io.emit('userList', connectedUsers);
    }
  });

  // 화상 통화 중 메시지를 전달합니다.
  socket.on('sendMessage', (data) => {
    io.emit('receiveMessage', data);
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```
### 클라이언트 구현
프론트엔드 파일을 생성하고, index.html 파일을 다음과 같이 구현합니다.
```
<!-- index.html -->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Video Call</title>
</head>
<body>
  <h1>Video Call</h1>
  <div id="video-grid"></div>
  <div>
    <ul id="user-list"></ul>
  </div>
  <script src="/socket.io/socket.io.js"></script>
  <script src="https://cdn.socket.io/socket.io-4.2.0.min.js"></script>
  <script>
    const socket = io();

    const videoGrid = document.getElementById('video-grid');
    const userList = document.getElementById('user-list');

    const myPeer = new Peer(undefined, {
      host: '/',
      port: '3001',
    });

    const myVideo = document.createElement('video');
    myVideo.muted = true;
    const peers = {};

    navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    }).then(stream => {
      addVideoStream(myVideo, stream);

      myPeer.on('call', call => {
        call.answer(stream);
        const video = document.createElement('video');
        call.on('stream', userVideoStream => {
          addVideoStream(video, userVideoStream);
        });
      });

      socket.on('userList', users => {
        updateUserList(users);
      });

      socket.on('receiveMessage', data => {
        console.log(data);
      });

      socket.emit('newUser', prompt('Enter your username:'));
    });

    myPeer.on('open', id => {
      socket.emit('join-room', ROOM_ID, id);
    });

    function addVideoStream(video, stream) {
      video.srcObject = stream;
      video.addEventListener('loadedmetadata', () => {
        video.play();
      });
      videoGrid.append(video);
    }

    function updateUserList(users) {
      userList.innerHTML = '';
      users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = user.username;
        userList.appendChild(li);
      });
    }
  </script>
</body>
</html>
```
클라이언트 코드에서는 Socket.io를 사용하여 서버와 통신하고, WebRTC를 사용하여 화상 통화를 구현합니다.
실행
서버를 실행합니다.
```
nodemon index.js
```
브라우저에서 http://localhost:3000에 접속하여 화상 서비스를 테스트합니다.
이제 화상 서비스가 작동하며, 사용자는 화상 통화를 시작하고 다른 사용자와 음성 및 영상 통화를 할 수 있습니다. 이 예제는 간단한 시작 지점으로, 더 많은 기능과 보안 측면을 추가하여 실제 프로덕션 환경에 적합하게 확장할 수 있습니다.


# 금세현(BE)
## 파일 업로드
- 게시글에 첨부파일(1개), 이미지 파일(여러개)을 추가할 수 있게 하였다.
### UploadFile - 파일 엔티티
```java
@Getter @Setter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class UploadFile {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="file_id")
    private Long id;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "post_id")
    private Post post;

    private String uploadFileName;
    private String storeFileName;
    private String fileUrl;

    @Builder
    public UploadFile(String uploadFileName, String storeFileName) {
        this.uploadFileName = uploadFileName;
        this.storeFileName = storeFileName;
    }
}
```
### FileStore
```java
@Component
public class FileStore {
    @Value("${file.dir}")
    private String fileDir;

    public String getFullPath(String fileName){
        return fileDir+fileName;
    }

    // 이미지 파일들을 저장한다.
    public List<UploadFile> storeFiles(List<MultipartFile> multipartFiles) throws IOException {
        List<UploadFile> storeFileResult=new ArrayList<>();
        for(MultipartFile multipartFile:multipartFiles){
            if(!multipartFile.isEmpty()) storeFileResult.add(storeFile(multipartFile));
        }
        return storeFileResult;
    }

    // 첨부파일을 저장한다.
    public UploadFile storeFile(MultipartFile multipartFile) throws IOException {
        if(multipartFile == null || multipartFile.isEmpty()) {
            return null;
        }
        String originalFilename=multipartFile.getOriginalFilename();
        String storeFileName=createStoreFileName(originalFilename);
        multipartFile.transferTo(new File(getFullPath(storeFileName)));
        return new UploadFile(originalFilename,storeFileName);
    }

    // 서버에 저장되는 파일명을 UUID로 생성한다.
    private String createStoreFileName(String originalFilename){
        String ext=extractExt(originalFilename);
        String uuid= UUID.randomUUID().toString();
        return uuid+"."+ext;
    }

    // 파일 확장자 추출
    private String extractExt(String originalFilename){
        int pos=originalFilename.lastIndexOf(".");
        return originalFilename.substring(pos+1);
    }

    // 파일 삭제
    public void deleteFile(String fileName) {
        try {
            Path filePath = Paths.get(fileDir).resolve(fileName);
            Files.deleteIfExists(filePath);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```
### BoardController
```java
@PostMapping("/write")
    @Operation(summary = "[POST] 게시글 작성", description = "게시글 작성")
    public Long writePost(@RequestPart(value = "imageFiles",required = false) List<MultipartFile> imageFiles,
            @RequestPart(value = "attachFile",required = false) MultipartFile singleAttachFile,
            @RequestPart(value = "postWriteRequest") PostWriteRequest request) throws IOException {
        return boardService.writePost(imageFiles,singleAttachFile,request);
    }
```
### BoardService
```java
public Long writePost(List<MultipartFile> imageFiles, MultipartFile singleAttachFile, PostWriteRequest request) throws IOException {
        Member member=memberRepository.findById(1L).get(); // ⭑⭑⭑임시로 설정한 유저이기 때문에 나중에 삭제해야 함⭑⭑⭑
        request.setMember(member);
        request.setNickname(member.getNickname());

        List<UploadFile> storeImageFiles=null;
        UploadFile attachFile = null;

        //todo: 리팩토링 필요...
        if(imageFiles != null) {
            storeImageFiles = fileStore.storeFiles(imageFiles);
            uploadFileRepository.saveAll(storeImageFiles);
            request.setFiles(storeImageFiles);
        }

        if(singleAttachFile != null) {
            attachFile = fileStore.storeFile(singleAttachFile);
            request.setAttachFile(attachFile);
            uploadFileRepository.save(attachFile);
        }
        Long id=boardRepository.save(request.toEntity()).getId();
        Post post=boardRepository.findById(id).get();

        if(imageFiles != null){
            for(UploadFile file:storeImageFiles){
                file.setPost(post);
            }
        }
        if(singleAttachFile != null){
            attachFile.setPost(post);
        }

        return id;
    }
```


# 이승환(BE)
### 검색 서버
+ 검색 API
    채용공고 전체를 불러오는 API
    `/api/search/all`
    파라미터 없음
+ 키워드 검색
    채용공고에서 키워드를 채용공고를 검색하는 API
    `/api/search/{keyword}`
    파라미터 : keyword
    하나의 단어로 사용하는 것을 추천.
+ 추후 개발 계획
    한 문장을 받아서 여러개의 단어로 쪼갠 다음 채용공고를 검색하는 api

### 분석 서버
+ 장고 서버 구축
### 데이터 수집 서버
+ 채용공고를 수집하여 DB에 밀어넣는 코드 작성
    전체 채용공고를 수집한 이후 DB에 밀어넣는 시간 약 5분
+ 추후 계발 계획
    1. 국비교육 데이터를 수집하여 DB에 저장하는 기능
    2. 일정 시간마다 수집 코드를 실행하는 기능
    3. 새로 올라온 공고를 확인하여 DB에 수집하는 기능

    
# 이해준(BE)
## oauth2.0 이용한 소셜로그인 구현
### CustomOAuth2AuthService
```java
@Slf4j
@RequiredArgsConstructor
@Service
public class  CustomOAuth2AuthService implements OAuth2UserService<OAuth2UserRequest, OAuth2User> {

    @SneakyThrows
    @Override
    public OAuth2User loadUser(OAuth2UserRequest request) throws OAuth2AuthenticationException {
        log.info("CustomOAuth2AuthService");
        OAuth2UserService delegate = new DefaultOAuth2UserService();
        OAuth2User oAuth2User = delegate.loadUser(request);
        String registrationId = request.getClientRegistration().getRegistrationId();
        String userNameAttributeName = request.getClientRegistration().getProviderDetails().getUserInfoEndpoint().getUserNameAttributeName();
        OAuth2Attributes attributes = OAuth2Attributes.of(registrationId, userNameAttributeName, oAuth2User.getAttributes());
        return new DefaultOAuth2User(Collections.singleton(new SimpleGrantedAuthority("ROLE_USER")), attributes.getAttributes(), attributes.getNameAttributeKey());
    }
}
```
### CustomOidcUserService
```java
@Slf4j
@RequiredArgsConstructor
@Service
public class CustomOidcUserService extends OidcUserService {

    @SneakyThrows
    @Override
    public OidcUser loadUser(OidcUserRequest request) throws OAuth2AuthenticationException {
        log.info("CustomOidcUserService");
        OAuth2UserService delegate = new DefaultOAuth2UserService();
        OAuth2User oAuth2User = delegate.loadUser(request);
        String registrationId = request.getClientRegistration().getRegistrationId();
        String userNameAttributeName = request.getClientRegistration().getProviderDetails().getUserInfoEndpoint().getUserNameAttributeName();
        OAuth2Attributes attributes = OAuth2Attributes.of(registrationId, userNameAttributeName, oAuth2User.getAttributes());
        return (OidcUser) new DefaultOAuth2User(Collections.singleton(new SimpleGrantedAuthority("ROLE_USER")), attributes.getAttributes(), attributes.getNameAttributeKey());
    }
}
```
### OAuth2Attributes
```java
@Slf4j
@Getter
public class OAuth2Attributes {
    private final Map<String, Object> attributes;
    private final String nameAttributeKey;
    private final String oauthId;
    private final String nickname;
    private final String email;
    private final String picture;
    private final Provider provider;

    @Builder
    public OAuth2Attributes(Map<String, Object> attributes, String nameAttributeKey, String oauthId, String nickname, String email, String picture, Provider provider) {
        this.attributes = attributes;
        this.nameAttributeKey = nameAttributeKey;
        this.oauthId = oauthId;
        this.nickname = nickname;
        this.email = email;
        this.picture = picture;
        this.provider = provider;
    }

    @SneakyThrows
    public static OAuth2Attributes of(String registrationId, String userNameAttributeName, Map<String, Object> attributes) {
        log.info("userNameAttributeName = {}", new ObjectMapper().writerWithDefaultPrettyPrinter().writeValueAsString(userNameAttributeName));
        log.info("attributes = {}", new ObjectMapper().writerWithDefaultPrettyPrinter().writeValueAsString(attributes));
        String registrationIdToLower = registrationId.toLowerCase();
        switch (registrationIdToLower) {
            case "google": return ofGoogle(userNameAttributeName, attributes);
            default: throw new OAuth2RegistrationException("해당 소셜 로그인은 현재 지원하지 않습니다.");
        }
    }

    private static OAuth2Attributes ofGoogle(String userNameAttributeName, Map<String, Object> attributes) {
        return OAuth2Attributes.builder()
                .oauthId((String) attributes.get(userNameAttributeName))
                .nickname((String) attributes.get("name"))
                .email((String) attributes.get("email"))
                .picture((String) attributes.get("picture"))
                .provider(Provider.GOOGLE)
                .attributes(attributes)
                .nameAttributeKey(userNameAttributeName)
                .build();
    }
}
```
### OAuth2AuthenticationSuccessHandler
```java
@Slf4j
@RequiredArgsConstructor
@Component
public class OAuth2AuthenticationSuccessHandler implements AuthenticationSuccessHandler {

    @Override
    public void onAuthenticationSuccess(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Authentication authentication) throws IOException, ServletException {
        log.info("성공!");
        String[] path = httpServletRequest.getRequestURI().split("/");
        Provider provider = Provider.valueOf(path[path.length - 1].toUpperCase());
        String oauthId = authentication.getName();

        String uri = UriComponentsBuilder.fromUriString( "http://localhost:8089/social")
                .queryParam("provider", provider)
                .queryParam("oauthId", oauthId)
                .build().toUriString();
        httpServletResponse.sendRedirect(uri);
    }
}
```
### OAuth2AuthenticationFailureHandler
```java
@Slf4j
@Component
public class OAuth2AuthenticationFailureHandler implements AuthenticationFailureHandler {

    private final RedirectStrategy redirectStrategy = new DefaultRedirectStrategy();

    @Override
    public void onAuthenticationFailure(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, AuthenticationException e) throws IOException, ServletException {
        log.info("실패!");
        redirectStrategy.sendRedirect(httpServletRequest,httpServletResponse,"/login");
    }
}
```
# 이성원(FE)
## 페이지 디자인, 구현(figma, react)
### 국비교육페이지
```
EduList
EduDetail
Curriculum
EduRevieiw
```
### 마이페이지
```
MyPageHome
MyInfoChange
MyEduLiike
MyJobLike
```
# 이정석(FE)
## 페이지 디자인, 구현(figma, react)
### 
```
로그인
회원가입 
채용공고
마이페이지 (개인정보창)
+sorting 을 통한 목록 정렬
+pagination -> 국비교육 페이지 및 채용공고 페이지에 적용
```


