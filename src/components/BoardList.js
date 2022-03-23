import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BoardListItem from './BoardListItem';
import Banner from './Banner';
import './BoardList.css';
import { useSelector } from 'react-redux';

function BoardList() {
  

  // state
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // 서버에 요청해서 데이터 받아옴
  // state 값 저장
  const loadData = async () => {
    setLoading(true);
    const response = await axios.get('http://localhost:8080/boardList');
    console.log(response.data);
    setData(response.data.boardList);
    setLoading(false);
  }

  // 렌더링할 때마다 호출 
    // 빈배열 : loadData() 한 번만 호출
    useEffect(() => {
      loadData();
  }, []);

  return (
    <div className='boardListItemBox'>
      <Banner></Banner>
      <h2>실시간 게시글</h2>
      { data.map((board, i)=>{
        return <BoardListItem board={board} key={i} />
      })}
    </div>
  )
}

export default BoardList