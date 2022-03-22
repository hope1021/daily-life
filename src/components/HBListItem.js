import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

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
        <tr>
            <td>{props.HB.hbNo}</td>
            <td>{props.HB.hbName}</td>
            <td>{props.HB.hbStartDate}</td>
            <td>{props.HB.hbEndDate}</td>
            <td>{props.HB.memEmail}</td>
            <td><Link to={"/HBUpdate/" + props.HB.hbNo}>수정</Link></td>
            {/* <td><button onClick={onDeleteItem}>삭제</button></td> */}
        </tr>
    );
}

export default HBListItem;