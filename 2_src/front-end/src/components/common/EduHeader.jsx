import React from 'react';
import eduimage from '../../assets/EduDetail/eduimage.svg';

const EduHeader = () => {

    const headerStyle = {
        width: '100wh',
        height: '90vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative', 
    };

    const textStyle = {
        color: 'white',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        textAlign: 'center',
        position: 'absolute', 
        top: '50%', 
        left: '50%',
        transform: 'translate(-50%, -50%)', 
        fontfamily: 'Istok Web',
        fontsize: '120px',
        fontstyle: 'normal',
        fontweight: '700',
        lineheight: 'normal',
        texttransform: 'capitalize',
    };
    const buttonContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute', 
        bottom: '180px', 
        left: '50%', 
        transform: 'translateX(-50%)'
    };

    const buttonStyle = {
        background: 'blue',
        color: 'white',
        padding: '10px 20px',
        margin: '0 10px',
        borderRadius: '5px',
        cursor: 'pointer',


    };

    return (
        <div style={headerStyle}>
            <img 
              src={eduimage}
              alt='Logo'
              className='d-inline-block align-top'
            />
            <div style={textStyle}>
                <div>멀티캠퍼스</div>
                <div>AI 백엔드 취업캠프(Python)</div>
            </div>
            <div style={buttonContainerStyle}>
                <button style={buttonStyle}>채팅방 입장</button>
                <button style={buttonStyle}>상담신청</button>
                <button style={buttonStyle}>찜하기</button>
            </div>
        </div>
    );
};

export default EduHeader;