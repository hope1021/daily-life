import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function BoardInsert(props) {
    let history = useNavigate();

    //state
    const [board, setBoard] = useState({
        bNo: '',
        memEmail: '',
        bTitle: '',
        bContent: '',
        bWriteDate: '',
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
                            <td>글번호</td>
                            <td><input
                                type="text"
                                name="bNo"
                                value={board.bNo}
                                onChange={onChange} />
                            </td>
                        </tr>
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
                            <td>작성일</td>
                            <td><input
                                type="text"
                                name="bWriteDate"
                                value={board.bWriteDate}
                                onChange={onChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>기분</td>
                            <td><input
                                type="text"
                                name="feelNo"
                                value={board.feelNo}
                                onChange={onChange} />
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