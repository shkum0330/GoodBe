import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import SearchJob from '../components/JobMain/SearchJob';
import JobList from '../components/JobMain/JobList';



const JobMain = () => {
    return (
        <div>
            <Navbar/>
            <SearchJob/>
            <JobList />
            <Footer/>
        </div>
    );
};

export default JobMain;