import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import './Login.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';


function Login(props) {

  let loginReducer = useSelector((state)=>state)

  let dispatch = useDispatch();

  console.log(loginReducer)

  function check(){
    let id = document.querySelector('#id')
    let pw = document.querySelector('#pw')
    let btn = document.querySelector('#btn')
    let label = document.querySelectorAll('label')

    btn.addEventListener('click', () => {
        if(id.value == "") {
            label = id.nextElementSibling
            label.classList.add('warning')
            setTimeout(() => {
                label.classList.remove('warning')
            }, 1500)
        } else if(pw.value == "") {
            label = pw.nextElementSibling
            label.classList.add('warning')
            setTimeout(() => {
                label.classList.remove('warning')
            }, 1500)
        }
    })
}

//state
const [login, setLogin] = useState({
  memEmail: '',
  memPw: ''
});

const [loading, setLoading] = useState(false);


const onChange = (e) => {
  const { value, name } = e.target; // e.target 에서 name 과 value 를 추출       
  setLogin({
      ...login, // 기존의 board 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
  });
};



const onSubmit = () => {
  console.log(login)
  setLoading(true);
  var frmData = new FormData(document.login);
  axios.post('http://localhost:8080/login', frmData)
            .then(
              response => {
                //console.log(response.data)
                const result = response.data;
                if (result === "success") {
                  dispatch({ type: "login", payload: login.memEmail })
                  alert("로그인 완료");
                } else {
                  alert("로그인 실패")
                  }
              }
          );
  setLoading(false);
}
  

  

  return (
    <div>
      
      <div className='body2'>
      <form name="login"  onSubmit={onSubmit}>
        <section className='login-form'>
          <h1>LOGIN</h1>
 
            <div className='int-area'>
            <input type='text' className='id' id='id' value={login.memEmail} autoComplete='off' name='memEmail' onChange={onChange} required/>
                <label for='id'>email</label>
            </div>
            <div className='int-area'>
            <input type='password' className='pw' id='pw' value={login.memPw} autoComplete='off' name='memPw' onChange={onChange} required/>
                <label for='pw'>password</label>
            </div>
            <div className='btn-area'>
                <button id="btn" type="submit" onClick={check}>LOGIN</button>
            </div>

          <div className='caption'>
            <a href=''>아이디 / 비밀번호 찾기</a>
          </div>
        </section>
      </form>
      </div>
     
    </div>
  );

  
}

export default Login;
