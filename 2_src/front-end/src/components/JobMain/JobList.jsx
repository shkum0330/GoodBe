import React, { useState } from 'react';

const JobList = () => {
  const [activeTab, setActiveTab] = useState('전체');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const dummyData = [
    { id: 1, title: 'Frontend Developer', company: 'ABC Company', location: 'Seoul', category: '대기업' },
    { id: 2, title: 'Backend Developer', company: 'XYZ Company', location: 'Busan', category: '중견중소' },
    { id: 3, title: 'Full-stack Developer', company: '123 Company', location: 'Incheon', category: '공기업공사' },
    { id: 4, title: 'Mobile App Developer', company: 'DEF Company', location: 'Daejeon', category: '대기업' },
    { id: 5, title: 'Data Scientist', company: 'GHI Company', location: 'Gwangju', category: '외국계' },
    // 더 많은 더미 데이터 추가 가능
  ];

  return (
    
    <div
    style={{
      fontFamily: 'Istok Web, sans-serif',
      width: '65%', // 폭을 100%로 설정
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '20px',
      backgroundColor: 'white',
      margin: '0 auto',
      marginTop: '50px',
    }}
    >
      <h2>채용공고</h2>
      <h3 style={{ color: '#575757' }}>관심있는 기업과 직무를 골라보세요</h3>
      <div style={{ display: 'flex', marginBottom: '10px', justifyContent: 'space-between' }}>
        {['전체', '대기업', '중견중소', '공기업공사', '외국계'].map((tab) => (
          <div
            key={tab}
            style={{
              padding: '8px 16px',
              cursor: 'pointer',
              color: activeTab === tab ? '#0432D6' : '#000',
            }}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
            <div
              style={{
                width: '100%',
                height: '4px',
                backgroundColor: activeTab === tab ? '#0432D6' : '#ccc',
                visibility: activeTab === tab ? 'visible' : 'hidden',
              }}
            />
          </div>
        ))}
      </div>
      <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
        {dummyData
          .filter((job) => activeTab === '전체' || job.category === activeTab)
          .map((job, index) => (
            <div
              key={job.id}
              style={{
                borderBottom: '1px solid #ccc',
                padding: '10px',
                backgroundColor: index % 2 === 0 ? 'white' : '#f2f2f2',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <p style={{ marginRight: '10px', fontWeight: 'bold' }}>{job.company}</p>
              <div style={{ flex: 1, textAlign: 'center' }}>
                <h3 style={{ marginBottom: '5px' }}>{job.title}</h3>
                <p style={{ marginBottom: '3px' }}>Location: {job.location}</p>
                <p>Category: {job.category}</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <button style={{ backgroundColor: '#A4C3FF', color: 'black', border: 'none', borderRadius: '4px', padding: '5px 10px', cursor: 'pointer', marginBottom: '5px', fontWeight: 'bold' }}>상세보기</button>
                <button style={{ backgroundColor: '#EBD2FF', color: 'black', border: 'none', borderRadius: '4px', padding: '5px 10px', cursor: 'pointer', fontWeight: 'bold' }}>채팅방 입장</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default JobList;