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
        width: '66.66%',
        height: '300px',
        margin: '0 auto',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          height: '20%',
          borderRadius: '20px',
          padding: '10px',
          display: 'flex',
          justifyContent: 'space-between', // 여백을 포함한 가로 일정 간격 배치
          alignItems: 'center',
        }}
      >
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="어떤 직업을 찾고 계신가요?"
          style={{
            flex: 1,
            padding: '12px',
            border: 'none',
            borderRadius: '20px',
            background: '#f0f0f0',
            outline: 'none',
            textAlign: 'left',
            marginRight: '10px',
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: '12px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '20px',
            cursor: 'pointer',
          }}
        >
          검색
        </button>
      </div>
    </div>
  );
};

export default SearchJob;
