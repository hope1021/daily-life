import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {Button} from './Button';
import './IndexNav.css';
import { FaBars, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login';

function IndexNav() {

    const state = useSelector((state)=>state)
    const dispatch = useDispatch();

    
    const login = state.loginReducer
    console.log(login)


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

    const [show, show2] = useState(false);
  

    const scrollNavbar = ()=>{
        let scroll = parseInt(window.scrollY)
        if(scroll > 0) {
        show2(true)
        }
        else {
        show2(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', scrollNavbar)
        return ()=>window.removeEventListener("scroll", scrollNavbar)
    }, [show])


    function loginCheck(e){
        console.log(login)
        if(login == null) {
            alert("로그인 후 진행해 주세요")
        }
        else {
            window.location.href = "/BoardInsert"
        }
    };


  return (
    <>
      <nav className={`navbar ${show && 'scrollNav'}`}
>
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
                    <Link to='IntroduceIcon' className='nav-links' onClick = {closeMobileMenu}>
                        소개
                    </Link>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-links' onClick={loginCheck}>
                            글쓰기
                        </a>

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
                {
                    state.loginCheckReducer == 'true'
                    ? button && <Link to='/'><Button buttonStyle='btn--outline' onClick={()=>{
                            dispatch({type: "logout"})
                            window.location.href = "/"
                        }}>로그아웃</Button></Link>
                    : button && <Button buttonStyle='btn--outline'>로그인</Button>
                }


            </div>
        </nav>
        </>
    );
}
  

export default IndexNav