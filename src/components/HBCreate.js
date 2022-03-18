import React from 'react'
import Bottom from './IndexBottom'
import Top from './IndexTop'

function WriteHappyBank() {
  return (
    <div id='wrap'>
      
      {/* Top 부분 */}
      <Top></Top>
      
      {/* Section 부분 */}
      <section id='section'>
        <div id='WriteHappyBank'>

          <h1>나만의 행복 저금통 만들기</h1>

          <form id='happybank' name='happybank' method='post' action='<c:url value = "ListHappyBank"/>'>

              <h3>행복 저금통의 이름을 적어주세요</h3>
                <input type='text' name='hbName' placeholder='꿈을 모으는 꿀꿀이'/>
                <input type='hidden' name='memEmail' />

          </form>

          
        </div>
      </section>
      
      {/* Bottom 부분 */}
      <Bottom></Bottom>
    </div>
  )
}

export default WriteHappyBank

// -- 행복저금통 ---
// CREATE TABLE `happybank` (
// 	`hbNo` int auto_increment PRIMARY KEY,		-- 행복저금통 번호
// 	`hbName` varchar(30),						-- 행복저금통 이름
// 	`memEmail` varchar(20)						-- 회원이메일 (외래키)
// );