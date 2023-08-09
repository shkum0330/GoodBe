import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import SearchJob from '../components/JobMain/SearchJob';
import JobList from '../components/JobMain/JobList';
import LargeLink from '../components/JobMain/LargeLink'


const JobMain = () => {
    return (
        <div>
            <Navbar/>
            <SearchJob/>
            <JobList />
            <LargeLink />
            <Footer/>
        </div>
    );
};

export default JobMain;