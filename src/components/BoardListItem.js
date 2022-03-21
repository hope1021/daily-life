import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './BoardListItem.css';

function BoardListItem(props) {
    let history = useNavigate();

    const onDeleteItem = () => {
        if (window.confirm("선택한 게시글을 삭제하시겠습니까?")) {
            axios.get('http://localhost:8080/boardDelete/' + props.board.bNo)
                .then(
                    () => {
                        history('/boardList');
                        window.location.reload();
                        // reload 하지 않으면
                        // DB에서는 삭제되지만 현재 화면은 안 바뀜
                        // 삭제한 내용을 화면에 바로 반영하기 위해서 reload 추가
                    }
                ).catch(err => console.log(err));
        }
    }

    return (
        <div className='boardListItem'>
            <Link to={"/boardDetail/" + props.board.bNo}>
                <div className='boardItem'>
                    <h3>(제목){props.board.bTitle}</h3>
                    <p>(내용){props.board.bContent}</p>
                    (기분번호){props.board.feelNo}<br/>
                    (기분타입명){props.board.feelType}<br/>
                    (기분아이콘 파일명){props.board.feelIcon}<br/>
                    (작성자이메일){props.board.memEmail}<br/>
                    (작성자닉네임){props.board.memNick}<br/>
                    (작성일){props.board.bWriteDate}<br/>
                    <Link to={"/boardUpdate/" + props.board.bNo}>수정</Link><br/>
                    <button onClick={onDeleteItem}>삭제</button>
                    <img className="feelIcon" alt="기분아이콘" src={require(`../img/${props.board.feelIcon}`)} />
                </div>
            </Link>
        </div>
    );
};

export default BoardListItem;