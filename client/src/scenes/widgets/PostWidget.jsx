import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import Friend from "components/Friend";
import WidgetWrapper from "components/WidgetWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "state";
//
import "devextreme/dist/css/dx.light.css";
import { DataGrid } from "devextreme-react/data-grid";

const PostWidget = ({ posts }) => {
  const [isComments, setIsComments] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const loggedInUserId = useSelector((state) => state.user._id);
  // const isLiked = Boolean(likes[loggedInUserId]);
  // const likeCount = Object.keys(likes).length;

  const { palette } = useTheme();
  const main = palette.neutral.main;
  const primary = palette.primary.main;
  
  
  // const patchLike = async () => {
  //   const response = await fetch(`http://localhost:3001/posts/${postId}/like`, {
  //     method: "PATCH",
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ userId: loggedInUserId }),
  //   });
  //   const updatedPost = await response.json();
  //   dispatch(setPost({ post: updatedPost }));
  // };

  return (
    <WidgetWrapper m="2rem 0">
      <DataGrid dataSource={posts} keyExpr="_id" allowColumnResizing={true}></DataGrid>
    </WidgetWrapper>
  );
};

export default PostWidget;
