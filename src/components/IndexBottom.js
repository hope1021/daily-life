import React from 'react'
import { Link } from 'react-router-dom';

function Bottom() {
  return (
    <div className='footer'>
      <div className='footerInfo'>
        <span><a href="https://github.com/hope1021" target='_blank'>DaYoung</a></span>
        <span><a href="https://github.com/jihodaddy" target='_blank'>SeKyeong</a></span>
        <span><a href="https://github.com/hyovvely" target='_blank'>HyoSeok</a></span>
        <span><a href="https://github.com/roditee" target='_blank'>NaHyun</a></span>
        <span><a href="https://github.com/HANGYESUK" target='_blank'>KyuSeok</a></span>
      </div>
      {/*  */}
      <div className='linkBox'>
        <Link to="/home">[홈]</Link> &nbsp; <hr/>

        <Link to="Login">[로그인]</Link> &nbsp;
        <Link to="Join">[회원가입]</Link>&nbsp;
        <Link to="MyPage">[마이페이지]</Link>&nbsp; <hr/>

        <Link to="BoardList">[일반 게시글 목록 조회]</Link>&nbsp;
        <Link to="BoardListItem">[일반 게시글 아이템]</Link>&nbsp;
        <Link to="BoardInsert">[일반 게시글 글쓰기]</Link>&nbsp;
        <Link to="BoardUpdate">[일반 게시글 수정]</Link>&nbsp;
        <Link to="BoardDetail">[일반 게시글 상세 정보 조회]</Link>&nbsp; <hr/>

        <Link to="HBList">[행복저금통 목록]</Link>&nbsp;
        <Link to="HBCreate">[저금통 등록하기]</Link>&nbsp;
        {/* <Link to="HBUpdate">[저금통 수정하기]</Link>&nbsp; */}
        <Link to="HBOpen">[저금통 개봉하기]</Link><hr/>

        <Link to="HBBoardList">[행복저금통 게시글 목록 조회]</Link>&nbsp;
        <Link to="HBBoardListItem">[행복저금통 게시글 아이템]</Link>&nbsp;
        <Link to="HBBoardInsert">[행복저금통 게시글 글쓰기]</Link>&nbsp;
        <Link to="HBBoardDetail">[행복저금통 게시글 상세 정보 조회]</Link><hr/>

        <Link to="IntroduceIcon">[기분 아이콘 캐릭터 소개 페이지]</Link>&nbsp;
      </div>
    </div>
  )
}

export default Bottom