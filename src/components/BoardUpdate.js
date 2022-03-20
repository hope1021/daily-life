import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const BoardUpdate = () => {
    let history = useNavigate();

    // 파라미터로 받아 온 값
    const { bNo } = useParams();

    //state
    const [board, setBoard] = useState({
        bNo: '',
        memEmail: '',
        bTitle: '',
        bContent: '',
        bWriteDate: '',
        feelNo: ''
    });

    const [loading, setLoading] = useState(false);

    // 서버에 요청해서 데이터 받아옴
    // state 값 저장
    const loadData = async () => {
        setLoading(true);
        const response = await axios.get('http://localhost:8080/boardDetail/' + bNo);
        console.log(response.data);
        setBoard({
            bNo: response.data.bNo,
            memEmail: response.data.memEmail,
            bTitle: response.data.bTitle,
            bContent: response.data.bContent,
            bWriteDate: response.data.bWriteDate,
            feelNo: response.data.feelNo
        });
        setLoading(false);
    }

    // 렌더링할 때마다 호출 
    // 빈배열 : loadData() 한 번만 호출
    useEffect(() => {
        loadData();
    }, []);



    // 폼에 입력된 값을 전송하고 DB 업데이트
    const onChange = (e) => {
        const { value, name } = e.target; // e.target 에서 name 과 value 를 추출       
        setBoard({
            ...board, // 기존의 board 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value 로 설정
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        var frmData = new FormData(document.boardUpdateForm);

        axios.post('http://localhost:8080/boardUpdate/', frmData)
            .then(
                response => {
                    alert("수정 완료");
                    history('/boardList'); // 일반 게시글 전체 목록 조회
                }
            );
    }


    return (
        <div>
            <h3>일반 게시글 수정</h3>
            <form name="boardUpdateForm" onSubmit={onSubmit}>
                <table>
                    <thead>
                        <tr>
                            <td>글번호 : 수정불가</td>
                            <td> <input
                                type="text"
                                name="bNo"
                                value={bNo}
                                readOnly />
                            </td>
                        </tr>
                        <tr>
                            <td>회원 이메일 : 수정불가</td>
                            <td> <input
                                type="text"
                                name="memEmail"
                                value={board.memEmail}
                                readOnly />
                            </td>
                        </tr>
                        <tr>
                            <td>제목</td>
                            <td> <input
                                type="text"
                                name="bTitle"
                                value={board.bTitle}
                                onChange={onChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>내용</td>
                            <td> <input
                                type="text"
                                name="bContent"
                                value={board.bContent}
                                onChange={onChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>작성일 : 수정불가</td>
                            <td> <input
                                type="text"
                                name="bWriteDate"
                                value={board.bWriteDate}
                                readOnly />
                            </td>
                        </tr>
                        <tr>
                            <td>기분</td>
                            <td> <input
                                type="text"
                                name="feelNo"
                                value={board.feelNo}
                                onChange={onChange} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <input type="submit" value="수정" />
                            </td>
                        </tr>
                    </thead>
                </table>
            </form>
        </div>
    );
};

export default BoardUpdate