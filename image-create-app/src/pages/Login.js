import React from "react";
import { Button, Grid, Input, Text } from "../elements/Index";
import { getCookie, setCookie, deleteCookie } from "../shared/Cookie";

const Login = (props) => {
  console.log(getCookie("user_pwd"));
  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  const changeId = (e) => {
    setId(e.target.value);
  };

  const changePwd = (e) => {
    setPwd(e.target.value);
  };

  const login = () => {
    setCookie("user_id", id, 3);
    setCookie("user_pwd", pwd, 3);
  };
  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text size="32px" bold>
          로그인
        </Text>

        <Grid padding="16px 0px">
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요."
            _onChange={() => {
              console.log("아이디 입력했어!");
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="패스워드"
            placeholder="패스워드 입력해주세요."
            _onChange={() => {
              console.log("패스워드 입력했어!");
            }}
          />
        </Grid>

        <Button
          text="로그인하기"
          _onClick={() => {
            console.log("로그인 했어!");
            deleteCookie("user_id");
          }}
        ></Button>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
