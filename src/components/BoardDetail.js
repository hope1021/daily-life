import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './BoardDetail.css';
import { useSelector } from 'react-redux';

const BoardDetail = (props) => {


    const state = useSelector((state)=>state)

    const login = state.loginReducer
    console.log(login)

    // 파라미터로 받아 온 값
    const { bNo } = useParams();

    let history = useNavigate();

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
        var sliceBRD = response.data.bWriteDate.slice(0,10);
        setBoard({
            // bNo: response.data.bNo,
            memEmail: response.data.memEmail,
            bTitle: response.data.bTitle,
            bContent: response.data.bContent,
            bWriteDate: sliceBRD,
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

    let bgColor = {
        background: bgColorCheck(board.feelNo)
    }

    const onDeleteItem = () => {
        if (window.confirm("선택한 게시글을 삭제하시겠습니까?")) {
            axios.get('http://localhost:8080/boardDelete/' + props.board.bNo)
                .then(
                    () => {
                        history('/');
                        window.location.reload();
                        // reload 하지 않으면
                        // DB에서는 삭제되지만 현재 화면은 안 바뀜
                        // 삭제한 내용을 화면에 바로 반영하기 위해서 reload 추가
                    }
                ).catch(err => console.log(err));
        }
    }

    function bgColorCheck(feelNo) {
        if(feelNo === 1) {
            return "#f7f09b"
        }
        else if(feelNo === 2) {
            return "#f9d4ea"
        }
        else if(feelNo === 3) {
            return "#bad8e2"
        }
        else if(feelNo === 4) {
            return "#93d4aa"
        }
        else if(feelNo === 5) {
            return "#b09f85"
        }
        else if(feelNo === 6) {
            return "#b7bee5"
        }
        else if(feelNo === 7) {
            return "#c5b0d5"
        }
        else if(feelNo === 8) {
            return "#cdcdcd"
        }
        else if(feelNo === 9) {
            return "#f9d2c7"
        }
        else if(feelNo === 10) {
            return "#ecbebe"
        }
        else if(feelNo === 11) {
            return "linear-gradient(#fff9c9, #ffccb4)"
        }
    }

    return (
        <div>
            <div className='bBTitleBox' style={bgColor}>
                <div className='bBTitle'>
                    <h1>"{board.bTitle}"</h1>
                </div>
                <div className='bBInfo'>
                    by {board.memNick}&nbsp;&nbsp;|&nbsp;&nbsp;{board.bWriteDate}
                </div>
                {
                    login == board.memEmail
                    ? <div className='bDetailBtnBox'><Link to={"/boardUpdate/" + board.bNo} className='bBtn bUpdateBtn'>수정</Link>
                        <button className='bBtn bDeleteBtn' onClick={onDeleteItem}>삭제</button></div>
                    : null
                }
            </div>
            <div className='bBContent'>
                {board.bContent}
            </div>
        </div>
    );
};

export default BoardDetail;