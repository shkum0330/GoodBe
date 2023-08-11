// React와 관련한 라이브러리 및 모듈 가져오기
import React, { createContext, useState, useRef, useEffect } from 'react';
import { io } from 'socket.io-client';
import Peer from 'simple-peer';

// Socket.io 연결을 관리하는 컴포넌트 생성
const SocketContext = createContext();

// Socket.io 서버와의 연결 설정
const socket = io('http://localhost:5000');

const ContextProvider = ({ children }) => {
  // 상태 관리를 위한 state 변수들
  const [callAccepted, setCallAccepted] = useState(false); // 통화 수락 여부
  const [callEnded, setCallEnded] = useState(false); // 통화 종료 여부
  const [stream, setStream] = useState(); // 미디어 스트림
  const [name, setName] = useState(''); // 사용자 이름
  const [call, setCall] = useState({}); // 통화 정보
  const [me, setMe] = useState(''); // 사용자의 고유 ID

  // 동영상 요소를 참조하기 위한 useRef 변수들
  const myVideo = useRef(); // 나의 동영상
  const userVideo = useRef(); // 상대방의 동영상
  const connectionRef = useRef(); // WebRTC 연결

  useEffect(() => {
    // 사용자 미디어 스트림 요청
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        setStream(currentStream);

        // 나의 동영상 요소에 스트림 설정
        myVideo.current.srcObject = currentStream;
      });

    // 서버로부터 자신의 ID를 받아옴
    socket.on('me', (id) => setMe(id));

    // 상대방으로부터 전화 수신 시 처리
    socket.on('callUser', ({ from, name: callerName, signal }) => {
      setCall({ isReceivingCall: true, from, name: callerName, signal });
    });
  }, []);

  const answerCall = () => {
    // 통화 수락 처리
    setCallAccepted(true);
  
    // Peer 객체 생성 및 설정
    const peer = new Peer({ initiator: false, trickle: false, stream });
  
    // 시그널링 데이터 전송을 위한 이벤트 리스너 등록
    peer.on('signal', (data) => {
      // 상대방에게 응답 시그널을 전송
      socket.emit('answerCall', { signal: data, to: call.from });
    });
  
    // 상대방의 스트림 수신 시 처리
    peer.on('stream', (currentStream) => {
      // 상대방의 동영상 요소에 스트림 설정
      userVideo.current.srcObject = currentStream;
    });
  
    // 상대방의 시그널 수신 및 응답
    peer.signal(call.signal);
  
    // WebRTC 연결 객체 업데이트
    connectionRef.current = peer;
  };
  

  const callUser = (id) => {
    // Peer 객체 생성 및 설정
    const peer = new Peer({ initiator: true, trickle: false, stream });
  
    // 시그널링 데이터 전송을 위한 이벤트 리스너 등록
    peer.on('signal', (data) => {
      // 상대방에게 통화 요청 시그널 전송
      socket.emit('callUser', { userToCall: id, signalData: data, from: me, name });
    });
  
    // 상대방의 스트림 수신 시 처리
    peer.on('stream', (currentStream) => {
      // 상대방의 동영상 요소에 스트림 설정
      userVideo.current.srcObject = currentStream;
    });
  
    // 통화 수락 시 처리
    socket.on('callAccepted', (signal) => {
      // 통화 수락 상태로 설정
      setCallAccepted(true);
  
      // 상대방의 시그널 수신 및 응답
      peer.signal(signal);
    });
  
    // WebRTC 연결 객체 업데이트
    connectionRef.current = peer;
  };
  

  const leaveCall = () => {
    // 통화 종료 상태로 설정
    setCallEnded(true);
  
    // WebRTC 연결 종료 및 리소스 해제
    connectionRef.current.destroy();
  
    // 페이지 새로고침을 통한 초기화
    window.location.reload();
  };
  

  return (
    <SocketContext.Provider value={{
      call,
      callAccepted,
      myVideo,
      userVideo,
      stream,
      name,
      setName,
      callEnded,
      me,
      callUser,
      leaveCall,
      answerCall,
    }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export { ContextProvider, SocketContext };