import React, { useState } from 'react';
import backgroundImage from '../../assets/JobMain/background.svg';
import styled from 'styled-components';
import {BsSearch} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const SearchContainer = styled.div`
    position: relative; 
    display: flex;
    align-items: center;
    justify-content: center;
    maxwidth: 1000px;
    height: 300px;
  
`;

const SearchInput = styled.input`
    padding: 15px 13px;
    border: none;
    font-size: 20px;
    width: 800px;
    outline: none;
    background: rgba(255, 255, 255, 0.00);
    color : #ccc;

    &::placeholder {
        color: #ccc;
    }
`;

const BackgroundImage = styled.img`
    position: absolute; 
    width: 100%;
    height: 550px;
    z-index: -1; 
    

`;

const SearchIcon = styled(BsSearch)`
    color : #FFF;
    margin-left : 20px;

    

`
const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    border: 1px solid #FFF;
    margin-top: 75px;
    box-shadow: 0px 0px 7px 3px #E7EDFF;

`

const SearchJob = ({setSearchKeyword}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
        // 검색어를 edulist 페이지로 전달하면서 페이지 이동
        navigate(`/RecommendEdu?searchKeyword=${searchTerm}`);
    }
};

  return (
    
    <SearchContainer>
      <BackgroundImage src={backgroundImage} alt="backgroundImage" />
      <Box>
        <SearchIcon size={30}/>

        <SearchInput
            type="text"
            placeholder="취업을 희망하는 회사나 직무를 입력하세요"
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyPress={handleKeyPress} // Enter 키 이벤트 핸들러 추가
        />
      </Box>
    </SearchContainer>
   
  );
};

export default SearchJob;
