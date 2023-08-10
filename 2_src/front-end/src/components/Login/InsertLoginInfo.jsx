import React from 'react';
import goodbelogo from '../../assets/navbar/goodbelogo.svg';

const InsertLoginInfo = () => {
    const container = {

    }
    return (
        <div>
            <img src={goodbelogo} alt="goodbelogo" />
            <p>굿비에서 여러분의 미래를 그려보세요</p>
            <div >
            <p>이메일</p>
            <input type="text" />
            <p>비밀번호</p>
            <input type="text" />
            <div>
                <input type="checkbox" id="rememberMe" />
                <label htmlFor="rememberMe">아이디를 기억합니다</label>
            </div>

            </div>
        </div>
    );
};

export default InsertLoginInfo;