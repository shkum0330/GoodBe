import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const VideoRecommendWrapper = styled.div`
  margin: 30px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LeftVideoCard = styled(VideoCard)`
  width: 50%;
  
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const RightVideoCard = styled(VideoCard)`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const VideoCard = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }

  img {
    width: 100%;
  }

  h3 {
    margin: 10px 0;
    font-size: 16px;
    color: #333;
  }
`;

function VideoRecommend() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // YouTube API 요청을 보내고 결과를 받아옵니다.
    const apiKey = 'AIzaSyC2ZUra2a_fg_lpD3zFO8OoFaM7s1BZ-Ac';
    const searchQuery = 'IT코딩 취업후기';

    axios.get(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&q=${searchQuery}&maxResults=3&part=snippet&type=video`)
      .then(response => {
        setVideos(response.data.items);
      })
      .catch(error => {
        console.error('Error fetching YouTube videos:', error);
      });
  }, []);

  return (
    <VideoRecommendWrapper>
      {videos.slice(0, 1).map(video => (
        <LeftVideoCard key={video.id.videoId}>
          <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer">
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
            <h3>{video.snippet.title}</h3>
          </a>
        </LeftVideoCard>
      ))}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        {videos.slice(1).map(video => (
          <RightVideoCard key={video.id.videoId}>
            <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer">
              <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
              <h3>{video.snippet.title}</h3>
            </a>
          </RightVideoCard>
        ))}
      </div>
    </VideoRecommendWrapper>
  );
}

export default VideoRecommend;
