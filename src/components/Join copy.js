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


        axios.post('http://localhost:8080/userJoin', frmData)
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


  return (
    <div className='joinAllForm'id= "joinAllForm">
      
      <form name="joinForm" id="joinForm" className='joinForm' onSubmit={onSubmit}>
            
            <div>
              <div className='title'>

                    <h3> 회원가입 </h3>
                  </div>
                  
                  <div id='joinBox' className='joinBox'>
                      {/* 이메일 */}
                      <div className='joinBoxDiv'>
                       <div className='joinBoxTitle'>이메일</div>
                        <input type='email' id='memEmail' className='email' maxLength='15' name='memEmail' value={member.memEmail} onChange={onChange} placeholder="email@example.com"/>
                      </div>

                      {/* 비밀번호 */}
                      <div className='joinBoxDiv'>
                        <div className='joinBoxTitle'>비밀번호</div>
                        <input type='password' className='password' maxLength='15' name='memPw' onChange={onChange} value={member.memPw} placeholder="password"/>
                      </div>

                      {/* 비밀번호 */}
                      <div className='joinBoxDiv'>
                        <div className='joinBoxTitle'>비밀번호 확인</div>
                        <input type='password'  className='password2' maxLength='15' name='joinPw'/>
                      </div>
                    

                      {/* 닉네임 */}
                      <div className='joinBoxDiv'>
                        <div className='joinBoxTitle'>닉네임</div>
                        <input type='text' className='text' maxLength='10' name='memNick' value={member.memNick} onChange={onChange}/>
                      </div>

                       {/* 자기소개 */}
                       <div className='joinBoxDiv'>
                        <div className='joinBoxTitle'>자기소개</div>
                        <input type='text'  className='text' maxLength='100' name='memInfo' value={member.memInfo} onChange={onChange}/>
                      </div>

                      {/* 생년월일
                      <div>
                        <h5> 생년월일 </h5>
                        <input type='text' maxLength='6' name='JoinBirthday'/> -&nbsp;  
                        <input type='text' maxLength='1' name='JoinBirthday2'/>
                      </div> */}

                  </div>
                  

                  <div>
                    <input className='btn2' id="btn" type='submit' value='가입하기' name='JoinSubmit'/>
                 </div>
            </div>

        

      
      </form>

    </div>
    
  )
}

export default Join