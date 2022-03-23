import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Top from './IndexTop';
import Bottom from './IndexBottom';
import './HBCreate.css';
import './HBCreate2.css';

const HBCreate = () => {
  let history = useNavigate();

  // state
  const [HB, setHB] = useState({ 
    //hbNo: '',         // 행복저금통 번호
    hbName: '',       // 행복저금통 이름
    //hbStartDate: '',  // 행복저금통 시작 날짜
    hbEndDate: '',    // 행복저금통 종료 날짜
    memEmail: ''      // 회원 이메일 (외래키)
  });

  const onChange = (e) => {
    const {value, name } = e.target; // e.target에서 name과 value를 추출
    setHB({
      ...HB, // 기존의 HB 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value로 설정
    });
  };

  const onReset = () => {
    setHB({
      //hbNo: '',         // 행복저금통 번호
      hbName: '',       // 행복저금통 이름
      //hbStartDate: '',  // 행복저금통 시작 날짜
      hbEndDate: '',    // 행복저금통 종료 날짜
      memEmail: ''      // 회원 이메일 (외래키)
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    var frmHBData = new FormData(document.frmHBCreateForm); // 폼 id 가져옴

    axios.post('http://localhost:8080/HBCreate/', frmHBData)
      .then(
          response => {
            alert("저금통 등록 완료");
            history('/HBList'); // 행복저금통 목록으로 이동
          }
      );
  }

  return (
    <div id='wrap'>

      <Top></Top>

      <section className='section2'>


   <div className='cardTitle'>
      <h1><span>나</span><span>만</span><span>의</span> <span>행</span><span>복</span><span> </span><span>저</span><span>금</span><span>통</span><span> </span><span>만</span><span>들</span><span>기</span></h1>
      </div>

      <div class="card">
        
            <div class="imgBox">
            <img src='img/wjrmaxhd.gif'/>
            <div className='haha'>Daily-life</div>
            </div>
            <div class="details">
                <form name='frmHBCreateForm' className='frmHBCreateForm' onSubmit={onSubmit} onReset={onReset}>

            <h3>저금통의 이름은 무엇인가요?</h3>
              <input type='text' name='hbName' className='hbName' value={HB.hbName} onChange={onChange} />
            <h3>저금통을 개봉할 날짜를 선택해주세요</h3>
              <input type='date' name='hbEndDate' className='hbEndDate' value={HB.hbEndDate} onChange={onChange} />
              <h6>* 한 번 설정한 날짜는 변경할 수 없습니다. <br/>
                  * 개봉날짜 전까지 열어볼 수 없으니 신중하게 선택해주세요.
              </h6>
            
            {/* hidden : 회원 이메일 */}
            <input type='hidden' name='memEmail' onChange={onChange} value={HB.memEmail} />
            {/* 그외 저금통 번호, 시작날짜는 DB에서 자동으로 들어가도록 했음.*/}

            <input className='button1' type='submit' value="등록" />&nbsp;&nbsp;&nbsp;&nbsp;
            <input className='button1' type='reset' value="취소" />

          </form>
                            </div>
        </div>
        





        {/* <h1 className='h1title'> 나만의 행복 저금통 만들기 </h1> */}
          {/* <img src={img/pig1.png} /> */}
          {/* <img src='img/pig1.png'/>
          <form name='frmHBCreateForm' onSubmit={onSubmit} onReset={onReset}>

            <h3>저금통의 이름은 무엇인가요?</h3>
              <input type='text' name='hbName' className='hbName' value={HB.hbName} onChange={onChange} />
            <h3>저금통을 개봉할 날짜를 선택해주세요</h3>
              <input type='date' name='hbEndDate' className='hbEndDate' value={HB.hbEndDate} onChange={onChange} />
              <h6>* 한 번 설정한 날짜는 변경할 수 없습니다. <br/>
                  * 개봉날짜 전까지 열어볼 수 없으니 신중하게 선택해주세요.
              </h6> */}
            
            {/* hidden : 회원 이메일 */}
            {/* <input type='hidden' name='memEmail' onChange={onChange} value={HB.memEmail} /> */}
            {/* 그외 저금통 번호, 시작날짜는 DB에서 자동으로 들어가도록 했음.*/}

            {/* <input className='button1' type='submit' value="등록" />&nbsp;&nbsp;&nbsp;&nbsp;
            <input className='button1' type='reset' value="취소" /> */}

          {/* </form> */}

      </section>

      <div className='bottom'></div>

    </div>
  );

}

export default HBCreate;