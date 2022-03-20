import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BoardListItem from './BoardListItem'

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
    <div>
      <h3>일반 게시글 전체 목록 조회</h3>
      { data.map(function (board, i) {
        return <BoardListItem board={board} key={i} />
      })}
    </div>
  )
}

export default BoardList