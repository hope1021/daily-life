import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from '../node_modules/axios/index';

// Home
import Home from './components/Home';
import Banner from './components/Banner';
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
import HBUpdate from './components/HBUpdate';
import HBOpen from './components/HBOpen';
// 행복 저금통 게시글 ----------------------------------
import HBBoardList from './components/HBBoardList';
import HBBoardListItem from './components/HBBoardListItem';
import HBBoardInsert from './components/HBBoardInsert';
import HBBoardDetail from './components/HBBoardDetail';
// 기분 아이콘 캐릭터 소개 페이지
import IntroduceIcon from './components/IntroduceIcon';

function App() {

  // state
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // 서버에 요청해서 데이터 받아옴
  // state 값 저장
  // const loadData = async () => {
  //   setLoading(true);
  //   const response = await axios.get('http://localhost:8080/home');
  //   console.log(response.data);
  //   setData(response.data.boardList);
  //   setLoading(false);
  // }

  // // 렌더링할 때마다 호출 
  //   // 빈배열 : loadData() 한 번만 호출
  //   useEffect(() => {
  //     loadData();
  // }, []);


  // console.log(data)


  return (
    <div className='App'>
      <IndexNav></IndexNav>
      <div className='navMargin'></div>
      <Routes>
        <Route path="/home" element={<Home data={data}/>} />

        <Route path="/Join" element={<Join/>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/MyPage" element={<MyPage/>} />

        <Route path="/IndexTop" element={<IndexTop/>} />
        <Route path="/IndexNav" element={<IndexNav/>} />
        <Route path="/IndexBottom" element={<IndexBottom/>} />

        <Route path="/" element={<BoardList/>} />
        <Route path="/BoardListItem" element={<BoardListItem/>} />
        <Route path="/BoardInsert" element={<BoardInsert/>} />
        <Route path="/BoardUpdate/:bNo" element={<BoardUpdate/>} />
        <Route path="/BoardDetail/:bNo" element={<BoardDetail/>} />

        <Route path="/HBList" element={<HBList/>} />
        <Route path="/HBCreate" element={<HBCreate />} />
        <Route path="/HBUpdate/:hbNo" element={<HBUpdate />} />
        <Route path="/HBOpen" element={<HBOpen/>} />

        <Route path="/HBBoardList/:hbNo" element={<HBBoardList/>} />
        <Route path="/HBBoardListItem" element={<HBBoardListItem/>} />
        <Route path="/HBBoardInsert/:hbNo" element={<HBBoardInsert/>} />
        <Route path="/HBBoardDetail/:hb_bNo" element={<HBBoardDetail/>} />

        <Route path="/IntroduceIcon" element={<IntroduceIcon/>} />

      </Routes>
    </div>
  );
}

export default App;
