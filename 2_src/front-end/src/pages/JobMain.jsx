import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import SearchJob from '../components/JobMain/SearchJob';
import JobList from '../components/JobMain/JobList';
import BannerJobMain from '../components/JobMain/BannerJobMain';
import JobTab from '../components/JobMain/JobTab';


const JobMain = () => {
    return (
        <div>
            <Navbar/>
            {/* <br/> */}
            {/* <br/> */}
            <SearchJob/>
            <JobTab />
            <JobList />
            {/* <br/>
            <br/>
            <br/>
            <br/> */}
            <BannerJobMain/>
            {/* <br/>
            <br/>
            <br/> */}
            <Footer/>
        </div>
    );
};

export default JobMain;