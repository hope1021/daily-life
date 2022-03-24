import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './BoardUpdate.css';

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
        // console.log(response.data);
        setBoard({
            bNo: response.data.bNo,
            memEmail: response.data.memEmail,
            bTitle: response.data.bTitle,
            bContent: response.data.bContent,
            bWriteDate: response.data.bWriteDate,
            feelNo: response.data.feelNo
        });

        var checkedRadio = document.getElementsByName('feelNo');
        // console.log(checkedRadio);
        // console.log(response.data.feelNo);
        var feelNoRC = response.data.feelNo - 1;
        checkedRadio[feelNoRC].checked = true;
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
        <div className='updateAllForm'>
            <h3>일반 게시글 수정</h3>
            <form className='boardUpdateForm' name="boardUpdateForm" onSubmit={onSubmit}>
                <table>
                    <thead>
                        <tr>
                            {/* <td>글번호 : 수정불가</td> */}
                            <td> <input
                                type="text"
                                name="bNo"
                                value={bNo}
                                readOnly />
                            </td>
                        </tr>
                        <tr>
                            {/* <td>회원 이메일 : 수정불가</td> */}
                            <td> <input
                                type="text"
                                name="memEmail"
                                value={board.memEmail}
                                readOnly />
                            </td>
                        </tr>
                       
                         {/* <tr>
                            <td>기분</td>
                            <td>
                                <label for="glad">기쁨</label><img src='img/glad.png'/><input id="glad" type="radio" name="feelNo" value={1} onChange={onChange} />
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
                        </tr> */}
                         <tr>
                            <td>
                                <div className='Emotion1'>
                                <label for="glad"><img src='img/glad.png'/></label><input id="glad" type="radio" name="feelNo" value={1} onChange={onChange} />
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
                            {/* <td>제목</td> */}
                            <td> <input
                                type="text"
                                name="bTitle"
                                className='bTitleInput'
                                value={board.bTitle}
                                onChange={onChange} />
                            </td>
                        </tr>
                        <tr>
                            {/* <td>내용</td> */}
                            <td> <input
                                type="text"
                                name="bContent"
                                className='bContentText'
                                value={board.bContent}
                                onChange={onChange} />
                            </td>
                        </tr>
                        <tr>
                            {/* <td>작성일 : 수정불가</td> */}
                            <td> <input
                                type="text"
                                name="bWriteDate"
                                value={board.bWriteDate}
                                readOnly />
                            </td>
                        </tr>
                        {/* <tr>
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
                        </tr> */}
                        <tr>
                            <td colSpan="2">
                                <input type="submit" value="수정"  className='updateSubmit'/>
                            </td>
                        </tr>
                    </thead>
                </table>
            </form>
        </div>
    );
};

export default BoardUpdate