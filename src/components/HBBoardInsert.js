import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const HBBoardInsert = () => {
    let history = useNavigate();

    //state
    const [hb_board, setHBBoard] = useState({
        hb_bNo: '',
        memEmail: '',
        hb_bTitle: '',
        hb_bContent: '',
        hb_bWriteDate: '',
        feelNo: '',
        hbNo: ''
    });

    const onChange = (e) => {
        const { value, name } = e.target; // e.target 에서 name 과 value 를 추출       
        setHBBoard({
            ...hb_board, // 기존의 hb_board 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value 로 설정
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        var frmData = new FormData(document.HBBoardInsertForm);

        axios.post('http://localhost:8080/hbBoardInsert/', frmData)
            .then(
                response => {
                    alert("등록 완료");
                    history('/hbBoardList'); // 게시글 전체 목록 조회 화면으로 이동
                }
            );
    }

    return (
        <div>
            <h3>행복 저금통 게시글 등록</h3>
            <form name="HBBoardInsertForm" onSubmit={onSubmit}>
                <table>
                    <thead>
                        <tr>
                            <td>저금통 글 번호</td>
                            <td><input
                                type="text"
                                name="hb_bNo"
                                value={hb_board.hb_bNo}
                                onChange={onChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>회원이메일</td>
                            <td><input
                                type="text"
                                name="memEmail"
                                value={hb_board.memEmail}
                                onChange={onChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>제목</td>
                            <td><input
                                type="text"
                                name="hb_bTitle"
                                value={hb_board.hb_bTitle}
                                onChange={onChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>내용</td>
                            <td><input
                                type="text"
                                name="hb_bContent"
                                value={hb_board.hb_bContent}
                                onChange={onChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>작성일</td>
                            <td><input
                                type="text"
                                name="hb_bWriteDate"
                                value={hb_board.hb_bWriteDate}
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
                            <td>저금통번호</td>
                            <td><input
                                type="text"
                                name="hbNo"
                                value={hb_board.hbNo}
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

export default HBBoardInsert;