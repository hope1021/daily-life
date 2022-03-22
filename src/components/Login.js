import React from 'react';
import { Route, Link } from 'react-router-dom';
import './Login.css';
function Login(props) {

  const onClickbtn = () => {
    console.log('click login')
    
  }
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


//   var btn = function(e) {
//     let id = document.querySelector("#id");
//     let pw = document.querySelector("#pw");
//     let btn = document.querySelector("#btn");

    
//     if(id.value=""){
//            id.nextElementSibling('label');
//            id.classList.add("warning");
//          }
//          else if (pw.value=""){
//            pw.nextElementSibling('label');
//            pw.classList.add("warning");
//          }
        
// }

  

  // let id = $('#id');
  // let pw = $('#pw');
  // let btn = $('#btn');

  // $(btn).on('click', function() {
  //   if($(id).val() == ""){
  //     $(id).next('label').addClass('warning');
  //     setTimeout(function() {
  //       $('label').removeClass('warning');
  //     }, 1500);
  //   }
  //   else if($(pw).val() == "")
  //   $(pw).next('label').addClass('warning');   
  //   setTimeout(function() {
  //       $('label').removeClass('warning');
  //     }, 1500);
  // });
  
  
  // var id = document.querySelector("#id");
  // var pw = document.querySelector("#pw");
  // var btn = document.querySelector("#btn");

  // document.querySelector("#btn").addEventListener("click", (e) => {
  //   if(id.value=""){
  //     id.nextElementSibling('label');
  //     id.classList.add("warning");
  //   }
  //   else if (pw.value=""){
  //     pw.nextElementSibling('label');
  //     pw.classList.add("warning");
  //   }
  // });
  

  

  return (
    <div>
      
      <div className='body2'>
      <section className='login-form'>
        <h1>LOGIN</h1>
        <form action=''>
          <div className='int-area'>
          <input type='text' className='id' id='id' autoComplete='off' required/>
              <label for='id'>email</label>
          </div>
          <div className='int-area'>
          <input type='password' className='pw' id='pw' autoComplete='off' required/>
              <label for='pw'>password</label>
          </div>
          <div className='btn-area'>
              <button id="btn" type="submit" onClick={check}>LOGIN</button>
          </div>
        </form>
        <div className='caption'>
          <a href=''>아이디 / 비밀번호 찾기</a>
        </div>
      </section>
      </div>
     
    </div>
  );

  
}

export default Login;
