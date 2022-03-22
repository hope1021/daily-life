import React from 'react';
import './Card.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Card({data}) {

  let Data = data

  let history = useNavigate();

  const cutText = (string, n) => {
    return string?.length > n ? string.substr(0, n) + "..." : string;
  }

  const onDeleteItem = () => {
      if (window.confirm("선택한 게시글을 삭제하시겠습니까?")) {
          axios.get('http://localhost:8080/boardDelete/' + Data.bNo)
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

  let back = {
    backgroundImage: `url('img/${ Data.feelIcon }')`,
  }

  let backColor = {
    backgroundColor: imgCheck(Data.feelIcon)
  }

  function imgCheck(img) {
    if(img === "angry.png") {
      return "rgb(78, 98, 165)"
    }
    else if(img === "depressed.png") {
      return "rgb(178, 123, 204)"
    }
    else if(img === "tired.png") {
      return "rgb(148, 148, 148)"
    }
    else if(img === "dissatisfaction.png") {
      return "rgb(255, 157, 65)"
    }
    else if(img === "glad.png") {
      return "rgb(250 255 170)"
    }
    else if(img === "calm.png") {
      return "rgb(255, 157, 65)"
    }
    else if(img === "happy.png") {
      return "#ffd9f0"
    }
    else if(img === "proud.png") {
      return "rgb(255, 157, 65)"
    }
    else if(img === "sad.png") {
      return "rgb(255, 157, 65)"
    }
    else if(img === "unrest.png") {
      return "rgb(255 220 167)"
    }
  }

  return (
    <div className='card colum' style={backColor}>
      <div>
        <div className='union' style={back}></div>
      </div>
      <div className='colum'>
        <h3>{ Data.bTitle }</h3>
        <p>@{ Data.memNick }</p>
        <p>{ cutText(Data.bContent, 20) }</p>
        <Link to={"/boardUpdate/" + Data.bNo}>수정</Link><br/>
        <button onClick={onDeleteItem}>삭제</button>
      </div>
    </div>
  )
}

export default Card