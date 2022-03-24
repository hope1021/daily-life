import React, { useState } from 'react';
import axios from '../../node_modules/axios/index';
import { useNavigate } from '../../node_modules/react-router-dom/index';
import './Join.css';


function Join() {

  let history = useNavigate();

  let [email, setEmail] = useState("");
  let [emailText, setEmailText] = useState("");
  
  // state
  const [member, setMember] = useState({
    memEmail: '',
    memPw: '',
    memNick: '',
    memInfo: ''
  });

  const onChange = (e) => {
        const { value, name } = e.target; // e.target 에서 name 과 value 를 추출       
        console.log(value)
        console.log(name)
        setMember({
            ...member, // 기존의 input 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value 로 설정
        });
  };

  const onReset = () => {
        setMember({
            memEmail: '',
            memPw: '',
            memNick: '',
            memInfo: ''
        })
  };

  
  const onSubmit = (e) => {
        e.preventDefault();

        console.log(member)

        var frmData = new FormData(document.joinForm);

        console.log(frmData)


        axios.post('http://localhost:8080/join', frmData)
            .then(
                response => {
                    alert("등록 완료");
                    history('/'); //상품 정보 조회 화면으로 이동
                }
            )
            .catch((error)=>{console.log(error)})
  }

  function mailChange(e) {
    const memEmailText = document.getElementById("memEmailText")
    memEmailText.value = e.target.value
  }

  function validEmail(obj){
    if(validEmailCheck(obj)==false){
        alert('올바른 이메일 주소를 입력해주세요.')
        obj.value='';
        obj.focus();
        return false;
    }
}

function validEmailCheck(obj){
    var pattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return (obj.value.match(pattern)!=null)
}


function check(){
  let id = document.querySelector('#id')
  let pw = document.querySelector('#pw')
  let pw2 = document.querySelector('#pw2')
  let btn = document.querySelector('#btn')
  let label = document.querySelectorAll('label')

  btn.addEventListener('click', () => {
      if(id.value == "") {
          label = id.nextElementSibling
          label.classList.add('warning')
          setTimeout(() => {
              label.classList.remove('warning')
          }, 1500)
      }  else if(pw2.value != pw.value) {
        label = pw2.nextElementSibling
        label.classList.add('warning2')
        setTimeout(() => {
            label.classList.remove('warning2')
        }, 1500)
    } 
  })
}

function check2(){
  let pw = document.querySelector('#pw')
  let pw2 = document.querySelector('#pw2')
  let btn2 = document.querySelector('#btn2')
  let label = document.querySelectorAll('label')

  btn2.addEventListener('click', () => {
      if(pw2.value != pw.value) {
        label = pw2.nextElementSibling
        label.classList.add('warning2')
        setTimeout(() => {
            label.classList.remove('warning2')
        }, 1500)
    } else if(pw2.value == pw.value) {
      label = pw2.nextElementSibling
      label.classList.add('warning3')
      setTimeout(() => {
        label.classList.remove('warning3')
    }, 1500)
    } 
  })
}


  return (
    <div className='joinAllForm'id= "joinAllForm">
      
      <form name="joinForm" id="joinForm" className='joinForm' onSubmit={onSubmit}>
            
            <div>
              <div className='title'>

                    <h3> 회원가입 </h3>
                  </div>
                  
                  <div id='joinBox' className='joinBox'>
                      {/* 이메일 */}
                      <div className='joinBoxTitle'></div>
                      <div className='int-area'>
                        <input type='email' id='id' className='id' maxLength='30' name='memEmail' value={member.memEmail} onChange={onChange} autoComplete='off' required/>
                          <label for='id'>이메일</label>
                      </div>

                      {/* 비밀번호 */}
                      <div className='joinBoxTitle'></div>
                      <div className='int-area'>
                        <input type='password' id='pw' className='pw' maxLength='30' name='memPw' onChange={onChange} value={member.memPw} autoComplete='off' required/>
                          <label for='pw'>비밀번호</label>
                      </div>

                      {/* 비밀번호 */}
                      <div className='joinBoxTitle'></div>
                      <div className='int-area'>
                        <input type='password'  id='pw2' className='pw2' maxLength='30' name='joinPw' autoComplete='off' required/>
                          <label for='pw2'>비밀번호 재확인 </label>
                        <button className='btn7' id="btn2"  type="button" onClick={check2}>비밀번호 확인</button>
                      </div>
                    

                      {/* 닉네임 */}
                      <div className='joinBoxTitle'></div>
                      <div className='int-area'>
                        <input type='text' className='memNick' maxLength='10' name='memNick' value={member.memNick} onChange={onChange} autoComplete='off' required/>
                        <label for='pw'>닉네임</label>
                      </div>

                       {/* 자기소개 */}
                        <div className='joinBoxTitle'></div>
                        <div className='int-area'>
                        <input type='text'  className='memInfo' maxLength='100' name='memInfo' value={member.memInfo} onChange={onChange} autoComplete='off' required/>
                        <label for='pw'>자기소개</label>
                      </div>

                      {/* 생년월일
                      <div>
                        <h5> 생년월일 </h5>
                        <input type='text' maxLength='6' name='JoinBirthday'/> -&nbsp;  
                        <input type='text' maxLength='1' name='JoinBirthday2'/>
                      </div> */}

                  </div>
                  

                  <div className='joinBtn'>
                    <button className='btn7' id="btn" name='JoinSubmit' type="submit" onClick={check}>가입하기</button>
                </div>
            </div>

        
      
      </form>

    </div>
    
  )
}

export default Join