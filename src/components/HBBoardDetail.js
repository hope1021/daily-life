import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const HBBoardDetail = () => {

    // 파라미터로 받아 온 값
    const { hb_bNo } = useParams();

    //state
    const [hb_board, setHBBoard] = useState({
        hb_bNo: '',
        memEmail: '',
        hb_bTitle: '',
        hb_bContent: '',
        hb_bWriteDate: '',
        feelNo: '',
        hbNo: '',
        memNick: '',
        feelType: '',
        hbName: ''
    });

    const [loading, setLoading] = useState(false);

    // 서버에 요청해서 데이터 받아옴
    // state 값 저장
    const loadData = async () => {
        setLoading(true);
        const response = await axios.get('http://localhost:8080/hbBoardDetail/' + hb_bNo);
        console.log(response.data);
        setHBBoard({
            // hb_bNo: response.data.hb_bNo,
            memEmail: response.data.memEmail,
            hb_bTitle: response.data.hb_bTitle,
            hb_bContent: response.data.hb_bContent,
            hb_bWriteDate: response.data.hb_bWriteDate,
            feelNo: response.data.feelNo,
            hbNo: response.data.hbNo,
            memNick: response.data.memNick,
            feelType: response.data.feelType,
            hbName: response.data.hbName
        });
        setLoading(false);
    }

    // 렌더링할 때마다 호출 
    // 빈배열 : loadData() 한 번만 호출
    useEffect(() => {
        loadData();
    }, []);

    return (
        <div>
            <h3>저금통 게시글 상세 정보 조회</h3>
            글 번호 : {hb_bNo}<br/>
            제목 : {hb_board.hb_bTitle}<br/>
            내용 : {hb_board.hb_bContent}<br/>
            기분번호 : {hb_board.feelNo}<br/>
            기분타입 : {hb_board.feelType}<br/>
            작성자이메일 : {hb_board.memEmail}<br/>
            작성자닉네임 : {hb_board.memNick}<br/>
            작성일 : {hb_board.hb_bWriteDate}<br/>
            행복저금통번호 : {hb_board.hbNo}<br/>
            행복저금통이름 : {hb_board.hbName}<br/>
            <hr/>
        </div>
    );
};

export default HBBoardDetail;