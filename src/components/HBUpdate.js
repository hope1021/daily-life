import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './HBUpdate.css';

const HBUpdate = () => {
    let history = useNavigate();

    // 파라미터로 받아 온 값
    const { hbNo } = useParams();

    // state
    const [HB, setHB] = useState({
        hbNo: '',         // 행복저금통 번호
        hbName: '',       // 행복저금통 이름
    });

    const [HBLoading, setHBLoading] = useState(false);

    // 서버에 요청해서 데이터 받아옴
    // state 값 저장
    const HBLoadDate = async () => {
        setHBLoading(true);
        const response = await axios.get('http://localhost:8080/HBUpdate/'+hbNo);
        console.log(response.data);
        setHB({
            hbNo : response.data.hbNo,
            hbName : response.data.hbName
        });
        setHBLoading(false);
    }

    // 렌더링 할때마다 호출
    useEffect(() => {
        HBLoadDate();
    }, []);

    // 폼에 입력된 값을 전송하고 DB 업데이트
    const onChange = (e) => {
        const { value, name } = e.target;
        setHB({
            ...HB,
            [name] : value
        });
    };

    const onReset = () => {
        setHB({
            //hbNo: HB.hbNo,    // 행복저금통 번호
            hbName: '',       // 행복저금통 이름
        })
    };

    const onSubmit = (e) => {
        e.preventDefault();

        var frmHBUpdate = new FormData(document.frmHBUpdate);

        axios.post('http://localhost:8080/HBUpdate/', frmHBUpdate)
            .then(
                response => {
                    alert("수정 완료");
                    history('/HBList'); //행복저금통 조회 화면으로 이동
                }
            );
    }

    return (
        <div className='hbUp'>
            <h3>저금통 정보 수정</h3>
            <form name="frmHBUpdate" onSubmit={onSubmit} onReset={onReset}>

                <h3>저금통의 이름을 바꾸실건가요?</h3>
                <input type='text' name='hbName' value={HB.hbName} onChange={onChange} />
                <input type="hidden" name='hbNo' value={hbNo} onChange={onChange} readOnly/>

                {/* <input type='hidden' name='hbStartDate' value={HB.hbStartDate} /> */}
                {/* <input type='hidden' name='hbEndDate' value={HB.hbEndDate} />
                <input type='hidden' name='memEmail' value={HB.memEmail} /> */}

                <br/>
                <input type="submit" className='btn1' value="수정" /> &nbsp;
                <input type="reset" className='btn2' value="취소" />
            </form>

        </div>
    );
}

export default HBUpdate;