import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {Button} from './Button';
import './IndexNav.css';
import { FaBars, FaTimes } from "react-icons/fa";

function IndexNav() {

  const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);


    const handleClick = () => setClick(!click) ;
    const closeMobileMenu = () => setClick(false);

    // 반응형 화면
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }
        else {
            setButton(true);
        }
    };

    // 로그인버튼 사이즈 작아지면 숨기기
    useEffect(() => {
        showButton();
    }, []);


    window.addEventListener('resize', showButton);

  return (
    <>
      <nav className = 'navbar'>
            <div className = 'navbar-container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                DAILY-LIFE
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                  <label>
                    {click ? <FaTimes /> : <FaBars />}
                  </label>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick = {closeMobileMenu}>
                            홈
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='BoardInsert' className='nav-links' onClick = {closeMobileMenu}>
                            글쓰기
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='HBOpen' className='nav-links' onClick = {closeMobileMenu}>
                            행복저금통
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='Login' className='nav-links-mobile' onClick = {closeMobileMenu}>
                            로그인
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>로그인</Button>}
            </div>
        </nav>
        </>
    );
}
  

export default IndexNav