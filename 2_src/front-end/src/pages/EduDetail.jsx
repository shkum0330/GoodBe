import React from 'react';
import Navbar from '../components/common/Navbar';
import EduHead from '../components/EduDetail/EduHead';
import EduReviewContent from '../components/EduReview/EduReviewContent';
import Footer from '../components/common/Footer';
import EduTab from '../components/EduDetail/EduTab';


const EduDetail = () => {
    return (
        <div>
            <Navbar/>
            <EduHead/>
            <EduTab/>
            <EduReviewContent/>
            <Footer/>
        </div>
    );
};

export default EduDetail;