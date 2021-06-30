import React from "react";
import styled from "styled-components";
import { loadDic } from "../store/module/DicContext";

const DicHeadBlock = styled.div`
  padding: 30px 32px 20px 30px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 30px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .dicCount {
    color: #20c997;
    font-size: 18px;
    margin-top: 20px;
    font-weight: bold;
  }
`;

function DicHead() {
  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });

  return (
    <DicHeadBlock>
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
    </DicHeadBlock>
  );
}

export default DicHead;
