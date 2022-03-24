import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './HBBoardListItem.css';
const HBBoardListItem = (props) => {
    let history = useNavigate();
    
    const cutText = (string, n) => {
        return string?.length > n ? string.substr(0, n) + "..." : string;
    }
    var sliceBRD = props.hb_board.hb_bWriteDate.slice(0,10);
    let bgColor = {
        background: bgColorCheck(props.hb_board.feelNo)
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
        <div className='hbBoardListItem' style={bgColor}>
            <Link to={"/hbBoardDetail/" + props.hb_board.hb_bNo}>
                <div className='hbBoardItem'>
                    <div className='hbFeelIcon'>
                    <img className="feelIcon" alt="기분아이콘" src={`/img/${props.hb_board.feelIcon}`} />
                    </div>
                    <div className='hbContents'>
                        <div className='hbTitle'>
                            <h3>{cutText(props.hb_board.hb_bTitle, 13)}</h3>
                        </div>
                        <div className='hbText'>
                            <p>{cutText(props.hb_board.hb_bContent, 95)}</p>
                        </div>
                        <div className='hbInfo'>
                            <p>{sliceBRD}</p>
                            <p>{props.hb_board.feelType}</p>
                        </div>

                    </div>
                </div>
            </Link>
        </div>
    );
};
export default HBBoardListItem;