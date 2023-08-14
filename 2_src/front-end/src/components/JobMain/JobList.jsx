import React, { useState } from 'react';
import {AiOutlineHeart} from 'react-icons/ai';
import {AiFillHeart} from 'react-icons/ai';

const JobList = () => {
  const [activeTab, setActiveTab] = useState('전체');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;


  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1); // 탭을 변경하면 첫 번째 페이지로 초기화
  };

  const dummyData = [
    { id: 1, title: 'Frontend Developer', company: 'ABC Company', location: 'Seoul', category: '대기업' },
    { id: 2, title: 'Backend Developer', company: 'XYZ Company', location: 'Busan', category: '중견중소' },
    { id: 3, title: 'Full-stack Developer', company: '123 Company', location: 'Incheon', category: '공기업공사' },
    { id: 4, title: 'Mobile App Developer', company: 'DEF Company', location: 'Daejeon', category: '대기업' },
    { id: 5, title: 'Data Scientist', company: 'GHI Company', location: 'Gwangju', category: '외국계' },
    { id: 6, title: 'Backend Scientist', company: 'qwer Company', location: 'Seoul', category: '외국계' },
    { id: 7, title: 'Frontend Developer', company: 'ABC Company', location: 'Seoul', category: '대기업' },
    { id: 8, title: 'Backend Developer', company: 'XYZ Company', location: 'Busan', category: '중견중소' },
    { id: 9, title: 'Full-stack Developer', company: '123 Company', location: 'Incheon', category: '공기업공사' },
    { id: 10, title: 'Mobile App Developer', company: 'DEF Company', location: 'Daejeon', category: '대기업' },
    { id: 11, title: 'Data Scientist', company: 'GHI Company', location: 'Gwangju', category: '외국계' },
    { id: 12, title: 'Backend Scientist', company: 'qwer Company', location: 'Seoul', category: '외국계' },
    // 더 많은 더미 데이터 추가 가능
  ];

  // 현재 페이지에 해당하는 데이터 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dummyData
    .filter((job) => activeTab === '전체' || job.category === activeTab)
    .slice(indexOfFirstItem, indexOfLastItem);

  // 페이지 번호를 클릭했을 때 페이지 변경
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

 // 전체 페이지 수 계산
 const totalPages = Math.ceil(
  dummyData.filter((job) => activeTab === '전체' || job.category === activeTab).length / itemsPerPage
);

  const [favoriteJobs, setFavoriteJobs] = useState([]); 

  const handleFavoriteClick = (jobId) => {
    const job = dummyData.find((job) => job.id === jobId);
    if (favoriteJobs.some((favJob) => favJob.id === job.id)) {
      setFavoriteJobs(favoriteJobs.filter((favJob) => favJob.id !== job.id));
      alert('찜이 취소되었습니다');
    } else {
      setFavoriteJobs([...favoriteJobs, job]);
      alert('찜했습니다');
    }
  };
  
return (
  
  <div
    style={{
      fontFamily: 'Istok Web, sans-serif',
      width: '65%',
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '20px',
      backgroundColor: 'white',
      margin: '0 auto',
      marginTop: '50px',
    }}
  >

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
    {currentItems.map((job, index) => (
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
          <button style={{ backgroundColor: '#A4C3FF', color: 'black', border: 'none', borderRadius: '4px', padding: '5px 10px', cursor: 'pointer', marginBottom: '5px', fontWeight: 'bold', width : '100%'}}>상세보기</button>
          <button style={{ backgroundColor: '#EBD2FF', color: 'black', border: 'none', borderRadius: '4px', padding: '5px 10px', cursor: 'pointer', fontWeight: 'bold' }}>채팅방 입장</button>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {favoriteJobs.some((favJob) => favJob.id === job.id) ? (
            <AiFillHeart
              onClick={() => handleFavoriteClick(job.id)}
              style={{ cursor: 'pointer', color: 'red', marginTop: '5px' }}
            />
          ) : (
            <AiOutlineHeart
              onClick={() => handleFavoriteClick(job.id)}
              style={{ cursor: 'pointer', marginTop: '5px' }}
            />
          )}
        </div>
        </div>
      </div>
    ))}
  </div>




    {/* 페이지네이션 버튼 */}
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
        <button
          key={pageNumber}
          style={{
            padding: '5px 10px',
            margin: '0 5px',
            backgroundColor: currentPage === pageNumber ? '#0432D6' : '#EBEBEB',
            color: currentPage === pageNumber ? 'white' : 'black',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
          onClick={() => handlePageClick(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
      </div>
    </div>


);
};

export default JobList; 