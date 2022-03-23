import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HBListItem from './HBListItem';


function HBList(props) {

    // state
    const [HBDate, setHBDate] = useState([]);
    const [HBLoading, setHBLoading] = useState(false);
    
    // 서버에 요청해서 데이터 받아옴
    // state 값 저장
    const HBLoadDate = async () => {
        setHBLoading(true);
        const response = await axios.get('http://localhost:8080/HBList');
        setHBDate(response.data.HBList);
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
                <h1>행복 저금통 목록</h1>
                    <div className='AllHBList'>
                    {
                        HBDate.map(function (HB, i) {
                            return <HBListItem HB={HB} key={i} />
                        })
                    }
                    </div>
            </section>
        </div>
    );
}

export default HBList;