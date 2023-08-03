import React, { useState } from 'react';
import backgroundImage from '../../assets/JobMain/background.svg';

const SearchJob = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    console.log('검색어:', searchText);
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '66.66%', // 화면의 2/3 길이로 설정
        height: '300px', // 이미지의 높이를 설정. 필요에 따라 조정하세요.
        margin: '0 auto', // 화면 중앙에 배치되도록 설정
      }}
    >
      {/* 배경 이미지를 렌더링하는 부분 */}
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`, // URL을 전달하여 배경 이미지 설정
          backgroundSize: 'cover', // 이미지를 컨테이너에 맞춰서 늘리거나 줄이도록 설정
          backgroundRepeat: 'no-repeat', // 이미지를 반복하지 않도록 설정
          width: '100%', // 컨테이너 가로 크기에 맞춰 이미지의 가로 크기 설정
          height: '100%', // 컨테이너 세로 크기에 맞춰 이미지의 세로 크기 설정
        }}
      />
      {/* 흰색 네모를 그리는 부분 */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%', // 흰색 네모의 가로 크기
          height: '15%', // 흰색 네모의 세로 크기
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // 반투명한 흰색 배경
          border: '1px solid white', // 테두리를 흰색으로 설정
          borderRadius: '20px', // 양 끝단을 둥글게 마감
          boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)', // 테두리에 그림자 효과 추가
          padding: '10px', // 내부 여백
          display: 'flex', // 내부 컨텐츠를 가로로 배치하기 위해 flex 사용
          justifyContent: 'center', // 내부 컨텐츠를 수평 가운데 정렬
          alignItems: 'center', // 내부 컨텐츠를 수직 가운데 정렬
        }}
      >
        {/* 검색 입력창과 버튼 등의 컨텐츠가 위치하는 부분 */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '100%', // 내부 컨텐츠의 가로 크기를 100%로 설정
          }}
        >
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="검색어를 입력하세요"
            style={{
              flex: 1,
              padding: '10px', // 내부 패딩을 늘려서 검색창을 가로로 길게 설정
              border: 'none', // 검색창 테두리 제거
              borderRadius: '20px', // 검색창 양 끝단을 둥글게 마감
              background: 'transparent', // 검색창 배경을 투명으로 설정하여 흰색 박스와 일치하게 만듦
              outline: 'none', // 검색창 포커스 시 테두리 제거
              textAlign: 'left', // 입력창의 텍스트를 오른쪽으로 정렬
              marginRight: '5px', // placeholder와의 간격을 조정
            }}
          />
          <button
            onClick={handleSearch}
            style={{
              padding: '10px', // 내부 패딩을 늘려서 버튼을 가로로 길게 설정
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '20px', // 버튼 양 끝단을 둥글게 마감
              cursor: 'pointer',
            }}
          >
            검색
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchJob;
