
// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
`;

const ContentWrapper = styled.div`
  display: inline-block;
  padding: 10px 20px;
  border: 2px solid #ccc;
  border-radius: 5px;
  margin: 5px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <ContentWrapper>
        <p>서울특별시 강남구 테헤란로 212 17층</p>
        <p>사업자 등록번호 없지롱 방구~ | 직업정보제공사업 없다룽~ | 통신판매업 아직이지룽~</p>
        <p>대표 이성원 이정석 유지나 이승환 이해준 | 개인정보보호책임자 금세현</p>
        <p>대표번호 010-1111-1111 | 교육 등록 문의 010-2222-2222 | 광고제휴</p>
      </ContentWrapper>
    </FooterWrapper>
  );
};

export default Footer;
