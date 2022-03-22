import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function BoardInsert(props) {
    let history = useNavigate();

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

        var frmData = new FormData(document.boardInsertForm);

        axios.post('http://localhost:8080/boardInsert/', frmData)
            .then(
                response => {
                    alert("등록 완료");
                    history('/boardList'); // 게시글 전체 목록 조회 화면으로 이동
                }
            );
    }

    return (
        <div>
            <h3>게시글 등록</h3>
            <form name="boardInsertForm" onSubmit={onSubmit}>
                <table>
                    <thead>
                        <tr>
                            <td>회원이메일</td>
                            <td><input
                                type="text"
                                name="memEmail"
                                value={board.memEmail}
                                onChange={onChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>제목</td>
                            <td><input
                                type="text"
                                name="bTitle"
                                value={board.bTitle}
                                onChange={onChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>내용</td>
                            <td><input
                                type="text"
                                name="bContent"
                                value={board.bContent}
                                onChange={onChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>기분</td>
                            <td>
                                <label for="glad">기쁨</label><input id="glad" type="radio" name="feelNo" value={1} onChange={onChange} />
                                <label for="happy">행복</label><input id="happy" type="radio" name="feelNo" value={2} onChange={onChange} />
                                <label for="proud">뿌듯</label><input id="proud" type="radio" name="feelNo" value={3} onChange={onChange} />
                                <label for="calm">평온</label><input id="calm" type="radio" name="feelNo" value={4} onChange={onChange} />
                                <label for="unrest">불안</label><input id="unrest" type="radio" name="feelNo" value={5} onChange={onChange} />
                                <label for="sad">슬픔</label><input id="sad" type="radio" name="feelNo" value={6} onChange={onChange} />
                                <label for="depressed">우울</label><input id="depressed" type="radio" name="feelNo" value={7} onChange={onChange} />
                                <label for="tired">피곤</label><input id="tired" type="radio" name="feelNo" value={8} onChange={onChange} />
                                <label for="dissatisfaction">불만</label><input id="dissatisfaction" type="radio" name="feelNo" value={9} onChange={onChange} />
                                <label for="angry">화남</label><input id="angry" type="radio" name="feelNo" value={10} onChange={onChange} />
                                <label for="special">스페셜</label><input id="special" type="radio" name="feelNo" value={11} onChange={onChange} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <input type="submit" value="등록" />
                            </td>
                        </tr>
                    </thead>
                </table>
            </form>
        </div>
    );
};

export default BoardInsert;