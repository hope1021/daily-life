import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
    // buttonstyle이 따로 지정되지 않으면 가장 기본인 배열의 0번째가 설정
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    // buttonsize가 지정되지 않으면 가장 기본 사이즈인 0번재 btn-medium이 설정
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        // children안에 어떤 내용을 입력해도 버튼 이름이 됨 
        <Link to = 'Login' className = 'btn-mobile'>
            <button 
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >
                {children} 
            </button>
        </Link>
    );
    
};