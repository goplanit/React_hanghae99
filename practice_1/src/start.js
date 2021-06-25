/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import img from "./scc_img01.png";
import "./App.css";

const Start = (props) => {
  return (
    <div className="container">
      <div className="outer">
        <img className="scc-img" src={img} />
        <h1>
          나는 <span>{props.name}</span> 에 대해 얼마나 알고 있을까?
        </h1>
        <input className="text-box" type="text" placeholder="내 이름" />
        <button className="button">시작하기</button>
      </div>
    </div>
  );
};

export default Start;
