import React from "react";
import { Grid, Image, Text } from "../elements/Index";

const Post = (props) => {
  return (
    <>
      <Grid padding="16px">
        <Grid is_flex>
          <Image shape="circle" src={props.src}></Image>
          <Text bold>{props.user_info.user_name}</Text>
          <Text>{props.insert_dt}</Text>
        </Grid>
        <Grid padding="16px">
          <Text>{props.contents}</Text>
        </Grid>
        <Grid>
          <Image shape="rectangle" src={props.src}></Image>
        </Grid>
        <Grid padding="16px">
          <Text bold>댓글 {props.comment_cnt}개</Text>
        </Grid>
      </Grid>
    </>
  );
};

export default Post;
