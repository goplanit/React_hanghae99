import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import { MdAdd } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const DicList = (props) => {
  const dic_list = useSelector((state) => state.Dic.list);
  return (
    <Outer>
      {dic_list.map((list) => {
        return (
          <Card key={list.id}>
            <Font>단어</Font>
            <TextBox>{list.textDic}</TextBox>
            <Font>설명</Font>
            <TextBox>{list.textExplain}</TextBox>
            <Font>예시</Font>
            <TextBox>{list.textExam}</TextBox>
          </Card>
        );
      })}
      <CircleButton onClick={() => props.history.push("/add")}>
        <MdAdd />
      </CircleButton>
    </Outer>
  );
};

const Outer = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const Card = styled.div`
  background-color: #e0f7fa;
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 100%;
  max-width: 450px;
  height: auto;
  box-sizing: border-box;
  margin-bottom: 15px;
`;

const Font = styled.p`
  font-size: 13px;
  color: grey;
  font-weight: bold;
  margin: 5px 0 0 20px;
  text-decoration: underline;
`;

const TextBox = styled.div`
  width: 100vh;
  max-width: 440px;
  padding: 5px;
  font-size: 16px;
  border-radius: 4px;
  outline: none;
  margin-left: 10px;
  box-sizing: border-box;
  word-break: break-all;
`;

const CircleButton = styled.button`
  background: #38d9a9;
  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }
`;

export default DicList;
