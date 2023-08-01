import React from 'react';


const AboutAccount = () => {
    const linkStyle = {
        marginRight: '20px', 
        
    };
    
    const boxStyle = {
        alignItems: 'center',
        justifyContent: 'center',
    }
    
    return (
        <div style={boxStyle}>
            <div >
            <a href="#" style={linkStyle}>회원가입</a>
            <a href="#">이메일/비밀번호 찾기</a>
            </div>
            <a href="#" >기업회원이신가요?</a>
        </div>
    );
};

export default AboutAccount;