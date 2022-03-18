import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Bottom from './components/Bottom';
import Join from './components/Join';
import ListBoard from './components/ListBoard';
import ListHappyBank from './components/ListHappyBank';
import MyPage from './components/MyPage';
import Nav from './components/Nav';
import OpenHappyBank from './components/OpenHappyBank';
import PastHappyBank from './components/PastHappyBank';
import Top from './components/Top';
import UpdateBoard from './components/UpdateBoard';
import WriteBoard from './components/WriteBoard';
import WriteHappyBank from './components/WriteHappyBank';
import Home from './components/Home';


function App() {
  return (
    <div className='App'>
      <h1>인덱스 페이지</h1>
      <Link to="/">[홈]</Link> &nbsp;
      <Link to="login">[로그인]</Link> &nbsp;
      <Link to="Join">[회원가입]</Link>&nbsp;
      <Link to="myPage">[마이페이지]</Link>&nbsp;
      
      <Link to="ListBoard">[글귀 리스트]</Link>&nbsp;
      <Link to="writeBoard">[글쓰기]</Link>&nbsp;
      
      <Link to="openHappyBank">[저금통열기]</Link>&nbsp;
      <Link to="writeHappyBank">[저금통글쓰기]</Link>&nbsp;
      <Link to="pastHappyBank">[지난저금통보기]</Link>



      <Routes>
        <Route path="/bottom" element={<Bottom/>} />
        <Route path="/join" element={<Join/>} />
        <Route path="/listBoard" element={<ListBoard/>} />
        <Route path="/ListHappyBank" element={<ListHappyBank/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/myPage" element={<MyPage/>} />
        <Route path="/nav" element={<Nav/>} />
        <Route path="/openHappyBank" element={<OpenHappyBank/>} />
        <Route path="/pastHappyBank" element={<PastHappyBank/>} />
        <Route path="/top" element={<Top/>} />
        <Route path="/updateBoard" element={<UpdateBoard/>} />
        <Route path="/writeBoard" element={<WriteBoard/>} />
        <Route path="/writeHappyBank" element={<WriteHappyBank />} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
