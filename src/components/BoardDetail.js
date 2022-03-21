import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BoardDetail = (props) => {

    // 파라미터로 받아 온 값
    const { bNo } = useParams();

    //state
    const [board, setBoard] = useState({
        bNo: '',
        memEmail: '',
        bTitle: '',
        bContent: '',
        bWriteDate: '',
        feelNo: '',
        memNick: '',
        feelType: '',
        feelIcon: ''
    });

    const [feelIconImg, setFeelIconImg] = useState('');
    const [loading, setLoading] = useState(false);

    // 서버에 요청해서 데이터 받아옴
    // state 값 저장
    const loadData = async () => {
        setLoading(true);
        const response = await axios.get('http://localhost:8080/boardDetail/' + bNo);
        // console.log(response.data);
        setBoard({
            // bNo: response.data.bNo,
            memEmail: response.data.memEmail,
            bTitle: response.data.bTitle,
            bContent: response.data.bContent,
            bWriteDate: response.data.bWriteDate,
            feelNo: response.data.feelNo,
            memNick: response.data.memNick,
            feelType: response.data.feelType,
            feelIcon: response.data.feelIcon
        });

        setFeelIconImg("../img/" + response.data.feelIcon);
        setLoading(false);
    }

    // 렌더링할 때마다 호출 
    // 빈배열 : loadData() 한 번만 호출
    useEffect(() => {
        loadData();
    }, []);

    return (
        <div>
            <h3>게시글 상세 정보 조회</h3>
            글 번호 : {bNo}<br/>
            제목 : {board.bTitle}<br/>
            내용 : {board.bContent}<br/>
            기분번호 : {board.feelNo}<br/>
            기분타입명 : {board.feelType}<br/>
            기분아이콘 파일명{board.feelIcon}<br/>
            작성자 이메일 : {board.memEmail}<br/>
            작성자 닉네임 : {board.memNick}<br/>
            작성일 : {board.bWriteDate}<br/>
            <hr/>
            {feelIconImg}
            {/* <img src={require('../img/glad.png')}/> */}
        </div>
    );
};

export default BoardDetail;