import React, { useState } from 'react';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate(); // useHistory 초기화

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
            <BsSearch size={30} style={{ cursor: 'pointer' }} />
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
