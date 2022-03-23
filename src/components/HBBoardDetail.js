import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './HBBoardDetail.css';

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
        // console.log(response.data);
        var sliceBRD = response.data.hb_bWriteDate.slice(0,10);
        setHBBoard({
            memEmail: response.data.memEmail,
            hb_bTitle: response.data.hb_bTitle,
            hb_bContent: response.data.hb_bContent,
            hb_bWriteDate: sliceBRD,
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

    let bgColor = {
        background: bgColorCheck(hb_board.feelNo)
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
            <div className='hbBDetailBox' style={bgColor}>
                <div className='hbBDetailLine'>
                    <div className='hbBTitle'>
                        <h1>"{hb_board.hb_bTitle}"</h1>
                    </div>
                    <div className='hbBInfo'>
                        '{hb_board.feelType}'&nbsp;이 가득했던 날&nbsp;|&nbsp;&nbsp;{hb_board.hb_bWriteDate}
                    </div>
                    <div className='hbBContentBox'>
                        <p className='hbBContent'>{hb_board.hb_bContent}</p>
                    </div>
                    <div className='hbBankInfo'>
                        {hb_board.hbName}
                    </div>
                </div>
            </div>
    );
};

export default HBBoardDetail;