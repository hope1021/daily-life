import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

import Home from './components/Home';
// 회원 --------------------------------------------------
import Login from './components/Login';
import Join from './components/Join';
import MyPage from './components/MyPage';
// 레이아웃 ----------------------------------------------
import IndexTop from './components/IndexTop';
import IndexNav from './components/IndexNav';
import IndexBottom from './components/IndexBottom';
// 글귀 게시판 -------------------------------------------
import BoardList from './components/BoardList';
import BoardListItem from './components/BoardListItem';
import BoardInsert from './components/BoardInsert';
import BoardUpdate from './components/BoardUpdate';
import BoardDetail from './components/BoardDetail';
// 행복 저금통--------------------------------------------
import HBList from './components/HBList';
import HBCreate from './components/HBCreate';
import HBOpen from './components/HBOpen';
import HBPast from './components/HBPast';
// 행복 저금통 게시글 ----------------------------------
import HBBoardList from './components/HBBoardList';
import HBBoardListItem from './components/HBBoardListItem';
import HBBoardInsert from './components/HBBoardInsert';
import HBBoardDetail from './components/HBBoardDetail';



function App() {
  return (
    <div className='App'>
      
      <h1>인덱스 페이지</h1>
      <Link to="/">[홈]</Link> &nbsp; <hr/>

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
      <Link to="HBOpen">[저금통 개봉하기]</Link>&nbsp;
      <Link to="HBPast">[지난 저금통 보기]</Link> <hr/>

      <Link to="HBBoardList">[행복저금통 게시글 목록 조회]</Link>&nbsp;
      <Link to="HBBoardListItem">[행복저금통 게시글 아이템]</Link>&nbsp;
      <Link to="HBBoardInsert">[행복저금통 게시글 글쓰기]</Link>&nbsp;
      <Link to="HBBoardDetail">[행복저금통 게시글 상세 정보 조회]</Link>&nbsp;



      <Routes>
        <Route path="/" element={<Home/>} />

        <Route path="/Join" element={<Join/>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/MyPage" element={<MyPage/>} />

        <Route path="/IndexTop" element={<IndexTop/>} />
        <Route path="/IndexNav" element={<IndexNav/>} />
        <Route path="/IndexBottom" element={<IndexBottom/>} />

        <Route path="/BoardList" element={<BoardList/>} />
        <Route path="/BoardListItem" element={<BoardListItem/>} />
        <Route path="/BoardInsert" element={<BoardInsert/>} />
        <Route path="/BoardUpdate" element={<BoardUpdate/>} />
        <Route path="/BoardDetail" element={<BoardDetail/>} />

        <Route path="/HBList" element={<HBList/>} />
        <Route path="/HBCreate" element={<HBCreate />} />
        <Route path="/HBOpen" element={<HBOpen/>} />
        <Route path="/HBPast" element={<HBPast/>} />

        <Route path="/HBBoardList" element={<HBBoardList/>} />
        <Route path="/HBBoardListItem" element={<HBBoardListItem/>} />
        <Route path="/HBBoardInsert" element={<HBBoardInsert/>} />
        <Route path="/HBBoardDetail" element={<HBBoardDetail/>} />
      </Routes>
    </div>
  );
}

export default App;
