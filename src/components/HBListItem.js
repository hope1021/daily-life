import React from "react";
import { Link, useNavigate } from 'react-router-dom';

import axios from "axios";
import moment from "../../node_modules/moment/moment";
import './HBList.css';
import './HBListItem.css';

// 한 행
function HBListItem(props) {

    let history = useNavigate();

    const today = new moment().format('YYYY-MM-DD')

    //console.log(today)
    const endDate = [props.HB.hbEndDate]
    //console.log(endDate)


    function dateCheck(e) {
        if (today < endDate) {
        //console.log("아직 남았다")
            alert("아직 기간이 남았습니다.")
            history('/HBList')
            
            
        } else {
        //console.log("지났다")
            // history({
            //     pathname: '/HBBoardList',
            //     props: props.HB.hbNo
            // })
            history(`../HBBoardList/${props.HB.hbNo}`)
    }
    }


    return (
          <div className="hbBListItem">
            <div className="hb" onClick={dateCheck}>
              <h5>Daily-Life</h5>
              {/* <tr>{props.HB.hbNo}</tr> */}
              <h4>{props.HB.hbName}</h4>
              {/* <tr>{props.HB.hbStartDate}</tr> */}
              <p>{props.HB.hbEndDate}</p>
              {/* <tr>{props.HB.memEmail}</tr> */}
            </div>
            <div className="btnDiv">
                <Link to={"/HBBoardInsert/" + props.HB.hbNo}><input type="submit" className='hbSubmitBtn' value="행복담기" /></Link>
                <Link to={"/HBUpdate/" + props.HB.hbNo}><input type="submit" className='hbUpdateBtn' value="수정" /></Link>
              </div>
          </div>
    );
}

export default HBListItem;