import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import HBListItem from './HBListItem';


function HBList(props) {

     //로그인한 id 불러오기
    const state = useSelector((state)=>state)

    const login = state.loginReducer
    console.log(login)

    // state
    const [HBDate, setHBDate] = useState([]);
    const [HBLoading, setHBLoading] = useState(false);
    
    // 서버에 요청해서 데이터 받아옴
    // state 값 저장
    const HBLoadDate = async () => {
        setHBLoading(true);
        const response = await axios.get('http://localhost:8080/HBList/' + login);
        setHBDate(response.data.HBList);
        console.log(response.data.HBList)
        setHBLoading(false);
    }

    // 렌더링 할 때마다 호출
    // 빈배열 : HBLoadDate() 한번만 호출
    useEffect(() => {
        HBLoadDate();
    }, []);


    return (
        <div id='wrap'>
            <section>
                <div className='hbCreateBox'>
                    <div>
                        <h1>행복 저금통 목록</h1>
                        <div className='AllHBList'>
                        <Link to="../HBCreate" className='hbCreateLink'>
                            <div className='hbCreate'></div>
                            <h3>저금통 등록하기</h3>
                        </Link>
                        {
                            HBDate.map(function (HB, i) {
                                return <HBListItem HB={HB} key={i} className='hbListItemMaxWidth'/>
                            })
                        }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HBList;