import React from 'react'

function Join() {
  return (
    <div id = "joinAllForm">
      <div>회원가입할래요</div>
      <form name="joinForm" id="joinForm" method="post" action="<c:url value='/userJoin'/>">
            
            <div>
              <div>
               
                    <h3> 회원가입 </h3>
                  </div>
                  
                  <div id='joinBox'>
                      {/* 이메일 */}
                      <div>
                        <h5> 이메일 </h5>
                        <input type='text' maxLength='15' name='joinEmail'/>
                        <span class="a">@</span><input type="text" name="joinEmailText"></input>
                        <select name='joinEmailSelect'>
                          <option value='write'> 직접 입력 </option>
                          <option value='gmail.com'> gmail.com </option>
                          <option value='naver.com'> naver.com </option>
                          <option value="daum.com">daum.com</option>
                        </select>
                      </div>

                      {/* 비밀번호 */}
                      <div>
                        <h5> 비밀번호 </h5>
                        <input type='password' maxLength='15' name='joinPw'/>
                      </div>

                      {/* 비밀번호 */}
                      <div>
                        <h5> 비밀번호 확인 </h5>
                        <input type='password' maxLength='15' name='JoinPwCheck'/>
                      </div>
                    

                      {/* 닉네임 */}
                      <div>
                        <h5> 닉네임 </h5>
                        <input type='text' maxLength='10' name='JoinName'/>
                      </div>

                       {/* 자기소개 */}
                       <div>
                        <h5> 자기소개 </h5>
                        <input type='text' maxLength='100' name='joinId'/>
                      </div>

                      {/* 생년월일
                      <div>
                        <h5> 생년월일 </h5>
                        <input type='text' maxLength='6' name='JoinBirthday'/> -&nbsp;  
                        <input type='text' maxLength='1' name='JoinBirthday2'/>
                      </div> */}

                  </div>
                  

                  <div>
                    <input type='button' value='가입하기' name='JoinSubmit'/>
                  
              
              </div>
            </div>

        

      
      </form>

    </div>
    
  )
}

export default Join