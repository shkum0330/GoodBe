import React, { useState } from 'react';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom'; // useNavigate 추가

const API_BASE_URL = 'https://i9a801.p.ssafy.io';

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1000px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
    margin: 0 auto;
`;

const SearchInput = styled.input`
    padding: 10px 10px 5px;
    border: none;
    font-size: 20px;
    width: 1000px;
    outline: none;

    &::placeholder {
        color: #ccc;
    }
`;

const SearchMain = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate(); // useNavigate 인스턴스 생성

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchClick = () => {
        performSearch();
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            performSearch();
        }
    };

    const performSearch = () => {
        console.log('검색어:', searchTerm);
        // 검색 로직 수행

        // 검색 결과를 EduList 페이지로 전달하며 페이지 이동
        navigate(`/EduList?searchKeyword=${searchTerm}`);
    };


    return (
        <SearchContainer>
        <BsSearch size={30} onClick={handleSearchClick} style={{ cursor: 'pointer' }} />
        <SearchInput
            type="text"
            placeholder="회사와 직무를 입력해서 국비교육을 검색해보세요"
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyPress={handleKeyPress}
        />
    </SearchContainer>
    );
};

export default SearchMain;
