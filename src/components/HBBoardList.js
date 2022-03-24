import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import HBBoardListItem from './HBBoardListItem'
import './HBBoardList.css';

const HBBoardList = (props) => {

    const { hbNo } = useParams();

    // state
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    // 서버에 요청해서 데이터 받아옴
    // state 값 저장
    const loadData = async () => {
    setLoading(true);
    const response = await axios.get('http://localhost:8080/hbBoardList/'+ hbNo );
    // console.log(response.data);
    setData(response.data.hbBoardList);
    setLoading(false);
    }

    // 렌더링할 때마다 호출 
    // 빈배열 : loadData() 한 번만 호출
    useEffect(() => {
        loadData();
    }, []);

    return (
        <div>
            <h3>저금통 게시글 전체 목록 조회</h3>
            <div className='hbListItemBox'>
                { data.map(function (hb_board, i) {
                    return <HBBoardListItem hb_board={hb_board} key={i} />
                })}
            </div>
        </div>
    )
}

export default HBBoardList;