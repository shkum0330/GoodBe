import React from 'react';
import Navbar from '../components/common/Navbar';
import EduSearchHeader from '../components/EduList/EduSearchHeader';
import EduListTitle from '../components/EduList/EduListTitle';
import EduListContent from '../components/EduList/EduListContent';
import Footer from '../components/common/Footer';



const EduList = () => {
    return (
        <div>
            <Navbar/>
            <EduSearchHeader/>
            <EduListTitle />
            <EduListContent/>
            <Footer/>
        </div>
    );
};

export default EduList;