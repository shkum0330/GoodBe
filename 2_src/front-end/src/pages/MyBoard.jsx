import React from 'react';
import MyBoardContainer from '../components/MyBoard/MyBoardContainer';
import MyBoardHeader from '../components/MyBoard/MyBoardHeader';
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar';

const MyBoard = () => {
    return (
        <div>
            <Sidebar />
            <Navbar />
            <MyBoardHeader />
            <MyBoardContainer />
            <h1>test</h1>
        </div>
    );
};

export default MyBoard;