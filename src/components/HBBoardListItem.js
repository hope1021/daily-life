import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './HBBoardListItem.css';

const HBBoardListItem = (props) => {
    let history = useNavigate();
    
    return (
        <div className='hbBoardListItem glad'>
            <Link to={"/hbBoardDetail/" + props.hb_board.hb_bNo}>
                <div className='hbBoardItem'>
                    <div className='hbFeelIcon'>
                    <img className="feelIcon" alt="기분아이콘" src={require(`../img/${props.hb_board.feelIcon}`)} />
                    </div>
                    <div className='hbContents'>
                        <h3>{props.hb_board.hb_bTitle}</h3>
                        <p>(내용){props.hb_board.hb_bContent}</p>
                        {/* (기분번호){props.hb_board.feelNo}<br/> */}
                        {/* (기분아이콘){props.hb_board.feelIcon}<br/> */}
                        {props.hb_board.feelType}<br/>
                        {/* (작성자이메일){props.hb_board.memEmail}<br/> */}
                        {/* (작성자닉네임){props.hb_board.memNick}<br/> */}
                        {props.hb_board.hb_bWriteDate}<br/>
                        {/* (저금통번호){props.hb_board.hbNo}<br/> */}
                        {/* (저금통이름){props.hb_board.hbName}<br/> */}
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default HBBoardListItem;