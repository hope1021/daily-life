import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Top from './IndexTop';
import Bottom from './IndexBottom';

function HBList(props) {

    // state
    const [HBDate, setHBDate] = useState([]);
    const [HBLoading, setHBLoading] = useState(false);
    
    // 서버에 요청해서 데이터 받아옴
    // state 값 저장
    const HBLoadDate = async () => {
        setHBLoading(true);
        const response = await axios.get('http://localhost:8080/HBList');
        console.log(response.HBDate);
        setHBDate(response.HBDate.HBList);
        setHBLoading(false);
    }

    // 렌더링 할 때마다 호출
    // 빈배열 : HBLoadDate() 한번만 호출
    useEffect(() => {
        HBLoadDate();
    }, []);

    return (
        <div id='wrap'>

            <Top></Top>

            <section>
                <h1>행복 저금통 목록</h1>

                {/* <Link to={"/"}> */}
                    <div id='AllHBList'>
                    <table border="1">
                        {/* <tr> <th>번호</th>      <td></td> </tr>
                        <tr> <th>이름</th>      <td></td> </tr>
                        <tr> <th>종료날짜</th>  <td></td> </tr>
                        <tr> <th>생성날짜</th>  <td></td> </tr>
                        <tr> <th>만든이</th>    <td></td> </tr> */}
                    
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>이름</th>
                                <th>종료날짜</th>
                                <th>생성날짜</th>
                                <th>만든이</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                HBDate.map(function (hb, i) {
                                    return <HBList hb={hb} key={i} />
                                })
                            }
                        </tbody>
                    </table>

                    </div>
            </section>

            <Bottom></Bottom>
        </div>
    );
}

export default HBList;