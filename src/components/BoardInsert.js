import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './BoardInsert.css';
import { useSelector } from 'react-redux';

function BoardInsert(props) {
    let history = useNavigate();

    // email
    const state = useSelector((state)=>state)
    const loginEmail = state.loginReducer

    //state
    const [board, setBoard] = useState({
        memEmail: '',
        bTitle: '',
        bContent: '',
        feelNo: ''
    });

    const onChange = (e) => {
        const { value, name } = e.target; // e.target 에서 name 과 value 를 추출       
        setBoard({
            ...board, // 기존의 board 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value 로 설정
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (board.bTitle === '') {
            alert("제목을 입력하세요.");
            document.boardInsertForm.elements["bTitle"].focus();
            return false;
        } else if (board.bContent === '') {
            alert("내용을 입력하세요.");
            document.boardInsertForm.elements["bContent"].focus();
            return false;
        } else if (board.feelNo === '') {
            alert("오늘 나의 기분이를 골라주세요.");
            document.boardInsertForm.elements["feelNo"].focus();
            return false;
        }

        var frmData = new FormData(document.boardInsertForm);

        axios.post('http://localhost:8080/boardInsert/', frmData)
            .then(
                response => {
                    alert("등록 완료");
                    history('/'); // 게시글 전체 목록 조회 화면으로 이동
                }
            );
    }

    return (
        <div className='insertAllForm'>
            <h3>게시글 등록</h3>
            <form className='boardInsertForm' name="boardInsertForm" onSubmit={onSubmit}>
                <table>
                    <thead>
                        <tr>
                            <td><input
                                type="text"
                                name="memEmail"
                                className='memEmailInput'
                                value={loginEmail}
                                onChange={onChange}
                                />
                                
                            </td>
                        </tr>
                        <tr>
                            <td className='titleEmotion'>
                                <h3>오늘 나의 기분이를 고르세요</h3>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='Emotion1'>
                                <label for="glad"> <img src='img/glad.png'/></label><input id="glad" type="radio" name="feelNo" value={1} onChange={onChange} />
                                <label for="happy"><img src='img/happy.png'/></label><input id="happy" type="radio" name="feelNo" value={2} onChange={onChange} />
                                <label for="proud"><img src='img/proud.png'/></label><input id="proud" type="radio" name="feelNo" value={3} onChange={onChange} />
                                <label for="calm"><img src='img/calm.png'/></label><input id="calm" type="radio" name="feelNo" value={4} onChange={onChange} />
                                <label for="unrest"><img src='img/unrest.png'/></label><input id="unrest" type="radio" name="feelNo" value={5} onChange={onChange} />
                                <label for="sad"><img src='img/sad.png'/></label><input id="sad" type="radio" name="feelNo" value={6} onChange={onChange} />
                                <label for="depressed"><img src='img/depressed.png'/></label><input id="depressed" type="radio" name="feelNo" value={7} onChange={onChange} />
                                <label for="tired"><img src='img/tired.png'/></label><input id="tired" type="radio" name="feelNo" value={8} onChange={onChange} />
                                <label for="dissatisfaction"><img src='img/dissatisfaction.png'/></label><input id="dissatisfaction" type="radio" name="feelNo" value={9} onChange={onChange} />
                                <label for="angry"><img src='img/angry.png'/></label><input id="angry" type="radio" name="feelNo" value={10} onChange={onChange} />
                                <label for="special"><img src='img/special.png'/></label><input id="special" type="radio" name="feelNo" value={11} onChange={onChange} />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            
                            <td><input
                                type="text"
                                name="bTitle"
                                className='bTitleInput'
                                value={board.bTitle}
                                onChange={onChange} 
                                placeholder='제목을 입력하세요.'/>
                                
                            </td>
                        </tr>
                        <tr>
                            
                            <td>
                                <textarea className='bContentText' name="bContent" placeholder='내용' value={board.bContent} onChange={onChange}></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <input type="submit" value="등록" className='insertSubmit'/>
                            </td>
                        </tr>
                    </thead>
                </table>
            </form>
        </div>
    );
};

export default BoardInsert;