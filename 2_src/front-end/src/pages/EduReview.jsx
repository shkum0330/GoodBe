import React from 'react';
import Navbar from '../components/common/Navbar';
import EduHeader from '../components/EduReview/EduHead';
import EduDetailContent from '../components/EduReview/EduReviewContent';
import Footer from '../components/common/Footer';
import EduHead from '../components/EduDetail/EduHead'

const EduReview = () => {
    return (
        <div>
            <Navbar/>
            <EduHead />
            <EduHeader/>
            <EduDetailContent/>
            <Footer/>
        </div>
    );
};

export default EduReview;