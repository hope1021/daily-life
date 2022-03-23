import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import './HBList.css';

// 한 행
function HBListItem(props) {
    let history = useNavigate();

    // const onDeleteItem = () => {
    //     if (window.confirm("삭제하시겠습니까?")) {
    //         axios.get('http://localhost:8080/HBDelete'+props.HB.hbNo)
    //             .then(
    //                 () => {
    //                     history('/HBList');
    //                     window.location.reload(); // 현재 화면은 안바뀜
    //                 }
    //             ).catch(err => console.log(err));
    //     }
    // }
 
    return (
        <Link to={"/HBBoardList"}>
        <div className="hb">
            <h5>Daily-Life</h5>
            {/* <tr>{props.HB.hbNo}</tr> */}
            <h4>{props.HB.hbName}</h4>
            {/* <tr>{props.HB.hbStartDate}</tr> */}
            <p>{props.HB.hbEndDate}</p>
            {/* <tr>{props.HB.memEmail}</tr> */}
            <div className="btnDiv">
            <Link to={"/HBUpdate/" + props.HB.hbNo}><input type="submit" className='btn1' value="수정" /></Link>
        </div>
        </div>
        </Link>
    );
}

export default HBListItem;