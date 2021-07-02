import React from "react";

import Post from "../components/Post";

const PostList = (props) => {
  return (
    <React.Fragment>
      <Post />
    </React.Fragment>
  );
};

Post.defaultProps = {
  user_info: {
    user_name: "goplanit",
    user_profile:
      "https://icelandnaturally.com/wp-content/uploads/iceland-peaceful-country.jpg",
  },
  image_url:
    "https://icelandnaturally.com/wp-content/uploads/iceland-peaceful-country.jpg",
  contents: "멋진 사진이네요~!",
  comment_cnt: 10,
  insert_dt: "2021-07-02 10:00:00",
};

export default PostList;
