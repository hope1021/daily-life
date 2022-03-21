import React from 'react';
import { Route, Link } from 'react-router-dom';
import './Login.css';

function Login(props) {
  return (
    <div>
      <div className="loginAllForm">
        <h1>로그인</h1>
          <div className="loginTopBox">
            <form className="loginForm">
              <div className="loginBox">
                <div className='loginEmailBox'>
                  <input type='text' maxLength='30' className="joinEmail" placeholder='Email'/>
                  {/* <span class="a">@</span>
                  <input type="text" className="joinEmailText"></input>
                  <select className='joinEmailSelect'>
                          <option value='write'> 직접 입력 </option>
                          <option value='gmail.com'> gmail.com </option>
                          <option value='naver.com'> naver.com </option>
                          <option value="daum.com">daum.com</option>
                  </select> */}
                </div>
                <div>
                  <input type="password" className="pw" placeholder='Password'></input>
                </div>
                <div className='loginBtnForm'>
                  <button type="submit">로그인할래요</button><button><Link to = '/'>로그인안할래요</Link></button>
                </div>
              </div>
            </form> 
              <div className="forgetMsg">
                <Link to = '/login'>아이디/비밀번호 찾을래요</Link>&nbsp;&nbsp;|&nbsp;&nbsp;<Link to = '/join'>회원가입 할래요</Link>
              </div> 
          </div> 

          
          <div className="loginBottomBox">	
            <div className="box">
              <div className="socialLoginBox">
                <h1>소셜 로그인</h1>
                  <div className="socialLoginList">
                    <div>
                      <button className="kakaoLoginButton"><span>KakaoTalk ID 로그인 안돼요</span></button>
                    </div>
                    <div>
                      <button className="googleLoginButton"><span>Google ID 로그인 안되요</span></button>
                    </div>
                    <div>
                      <button className="naverLoginButton"><span>Naver ID 로그인 안되?돼?</span></button>
                    </div>
                  </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );

  
}

export default Login;
