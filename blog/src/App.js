import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "리액트 독학",
  ]);
  let [num, numChange] = useState(0);
  let [날짜, 날짜변경] = useState([
    "7월 20일 발행",
    "7월 21일 발행",
    "7월 22일 발행",
  ]);

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={click2}>제목 정렬</button>
      <div className="list">
        <h3>
          {" "}
          {글제목[0]} <span onClick={click}>👍</span> {num}
        </h3>
        <p>{날짜[0]}</p>
        <hr />
      </div>
      <div className="list">
        <h3> {글제목[1]} </h3>
        <p>{날짜[1]}</p>
        <hr />
      </div>
      <div className="list">
        <h3> {글제목[2]} </h3>
        <p>{날짜[2]}</p>
        <hr />
      </div>
      <Modal />
    </div>
  );

  function click() {
    numChange(num + 1);
  }
  function click2() {
    var newArray = [...글제목];
    newArray.sort();
    글제목변경(newArray);
  }
}

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
