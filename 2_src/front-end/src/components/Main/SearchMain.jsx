import React, { useState } from 'react';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';

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
        // 여기에 실제 검색 로직을 추가하세요.
        console.log('검색어:', searchTerm);
        // 예: 검색어를 서버로 보내서 검색 결과를 가져올 수 있습니다.
    };

    return (
        <SearchContainer>
            <BsSearch size={30} onClick={handleSearchClick} style={{ cursor: 'pointer' }} />
            <SearchInput
                type="text"
                placeholder="회사와 직무를 입력해서 국비교육을 검색해보세요"
                value={searchTerm}
                onChange={handleSearchChange}
                onKeyPress={handleKeyPress} // 이 부분을 추가합니다.
            />
        </SearchContainer>
    );
};

export default SearchMain;
