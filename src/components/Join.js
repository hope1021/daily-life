import React, { useState } from 'react';
import axios from '../../node_modules/axios/index';
import { useNavigate } from '../../node_modules/react-router-dom/index';


function Join() {

  let history = useNavigate();

  let [email, setEmail] = useState("");
  let [emailText, setEmailText] = useState("");

  // state
  const [member, setMember] = useState({
    memEmail: '',
    memEmailText: '',
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
            memEmailText: '',
            memPw: '',
            memNick: '',
            memInfo: ''
        })
  };

  const onSubmit = (e) => {
        e.preventDefault();

        var frmData = new FormData(document.joinForm);

        console.log(frmData)


        axios.post('http://localhost:8080/Join', frmData)
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


  return (
    <div id = "joinAllForm">
      <div>회원가입할래요</div>
      <form name="joinForm" id="joinForm" onSubmit={onSubmit}>
            
            <div>
              <div>
               
                    <h3> 회원가입 </h3>
                  </div>
                  
                  <div id='joinBox'>
                      {/* 이메일 */}
                      <div>
                        <h5> 이메일 </h5>
                        <input type='text' maxLength='15' name='memEmail' value={member.memEmail} onChange={onChange} />
                        <span className="a">@</span><input type="text" name="memEmailText" id='memEmailText' value={member.memEmailText} onChange={onChange}></input>
                        <select name='joinEmailSelect' onChange={mailChange}>
                          <option value='write'> 직접 입력 </option>
                          <option value='gmail.com'> gmail.com </option>
                          <option value='naver.com'> naver.com </option>
                          <option value="daum.com">daum.com</option>
                        </select>
                      </div>

                      {/* 비밀번호 */}
                      <div>
                        <h5> 비밀번호 </h5>
                        <input type='password' maxLength='15' name='memPw' onChange={onChange} value={member.memPw} />
                      </div>

                      {/* 비밀번호 */}
                      <div>
                        <h5> 비밀번호 확인 </h5>
                        <input type='password' maxLength='15' name='joinPw'/>
                      </div>
                    

                      {/* 닉네임 */}
                      <div>
                        <h5> 닉네임 </h5>
                        <input type='text' maxLength='10' name='memNick' value={member.memNick} onChange={onChange}/>
                      </div>

                       {/* 자기소개 */}
                       <div>
                        <h5> 자기소개 </h5>
                        <input type='text' maxLength='100' name='memInfo' value={member.memInfo} onChange={onChange}/>
                      </div>

                      {/* 생년월일
                      <div>
                        <h5> 생년월일 </h5>
                        <input type='text' maxLength='6' name='JoinBirthday'/> -&nbsp;  
                        <input type='text' maxLength='1' name='JoinBirthday2'/>
                      </div> */}

                  </div>
                  

                  <div>
                    <input type='submit' value='가입하기' name='JoinSubmit'/>
                 </div>
            </div>

        

      
      </form>

    </div>
    
  )
}

export default Join