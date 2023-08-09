import React from 'react';

const InputForm = () => {
    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const labelStyle = {
        marginRight: '10px',
    };
    
    const box = {
        border: '1px solid black', 
        borderRadius: '10px',
        padding: '20px', 
        width: '300px',
 
    };
    const container = {
        display: 'flex',
        justifyContent: 'center',

 
    };

    const inputStyle = {
        flex: '1',
        padding: '5px',
    };

    return (
        <div style={container}>
            <div style={box}>
                <div style={containerStyle}>
                    <label style={labelStyle}>이름</label>
                    <input type="text" placeholder="가입할 때 작성하신 이름을 입력해주세요"
                    style={inputStyle}/>
                </div>
                <div style={containerStyle}>
                    <label style={labelStyle}>생년월일</label>
                    <input type="text" placeholder="생년월일을 입력하세요" style={inputStyle}/>
                </div>
                <button>이메일 찾기</button>
            </div>

        </div>
        );
};

export default InputForm;