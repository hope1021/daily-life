import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './BoardListItem.css';
import { useSelector } from 'react-redux';

function BoardListItem(props) {

    const cutText = (string, n) => {
        return string?.length > n ? string.substr(0, n) + "..." : string;
    }

    var sliceBRD = props.board.bWriteDate.slice(0,10);

    let bgColor = {
        background: bgColorCheck(props.board.feelNo)
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

    console.log(props.board.feelIcon)


    return (
        <div className='boardListItem'>
            <Link to={"/boardDetail/" + props.board.bNo}>
                <div className='boardItem'>
                    <div className='bFeelIcon' style={bgColor}>
                        <img className="feelIcon" alt="기분아이콘" src={`img/${props.board.feelIcon}`} />
                    </div>
                    <div className='bContents'>
                        <div className='bTitle'>
                            <h3>{cutText(props.board.bTitle, 25)}</h3>
                            <div className='bWriterInfo'>
                                <h5>by&nbsp;{props.board.memNick}</h5>
                            </div>
                        </div>
                        <div className='bText'>
                            <p>{cutText(props.board.bContent, 133)}</p>

                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BoardListItem;