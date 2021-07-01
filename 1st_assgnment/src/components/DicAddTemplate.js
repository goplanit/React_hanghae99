import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addDicFB } from "../store/module/DicContext";

const DicAddTemplate = (props) => {
  const dispatch = useDispatch();

  const word_ref = React.useRef(null);
  const desc_ref = React.useRef(null);
  const example_ref = React.useRef(null);

  const addWord = () => {
    const word = {
      id: 4,
      textDic: word_ref.current.value,
      textExplain: desc_ref.current.value,
      textExam: example_ref.current.value,
    };
    console.log(word);
    dispatch(addDicFB(word));
    props.history.replace("/");
  };

  return (
    <>
      <DicAddBlock>
        <Outer>
          <Font>단어</Font>
          <Text ref={word_ref} placeholder="단어를 입력하세요"></Text>
        </Outer>
      </DicAddBlock>
      <DicAddBlock>
        <Outer>
          <Font>설명</Font>
          <Text ref={desc_ref} placeholder="설명을 입력하세요"></Text>
        </Outer>
      </DicAddBlock>
      <DicAddBlock>
        <Outer>
          <Font>예시</Font>
          <Text ref={example_ref} placeholder="예시를 입력하세요"></Text>
        </Outer>
      </DicAddBlock>
      <AddBtn onClick={addWord}>추가하기</AddBtn>
    </>
  );
};

const DicAddBlock = styled.div`
  display: flex;
  align-items: left;
  background-color: #e0f7fa;
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.04);
  width: 100vh;
  max-width: 50vh;
  height: 100vh;
  margin: 15px auto;
  padding-bottom: 20px;
`;

const Outer = styled.div`
  width: 100vh;
  margin: 15px;
`;

const Font = styled.p`
  font-size: 20px;
  text-decoration: underline;
`;

const Text = styled.input`
  width: 100%;
  padding: 5px;
  font-size: 21px;
  border-radius: 4px;
  outline: none;
  box-sizing: border-box;
`;

const AddBtn = styled.button`
  width: 100vh;
  max-width: 50vh;
  margin: 0 auto 20px;
  color: #fff;
  font-size: 22px;
  border: 1px solid;
  border-radius: 8px;
  background-color: #80deea;
`;

export default DicAddTemplate;
