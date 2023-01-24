import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import {  Divider } from "@mui/material";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useEffect, useState } from "react";
import { format } from "timeago.js";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import "./Cards.css";
import {MdDelete} from 'react-icons/md';
const Cards = ({ post }) => {
  //post as props from categories

  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const token = JSON.parse(localStorage.getItem("profiles")).token;
  const currentUser = JSON.parse(localStorage.getItem("profiles")).validUser;
  const loggedInUserId = currentUser._id;
  let isUser = false;

  try {
    const user_ka_id = currentUser._id;
    // console.log(user_ka_id);
    if (user_ka_id === post.userId) {
      isUser = true;
    }
  } catch (err) {
    console.log("Following error occured" + err);
  }

  //like or dislike post
  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  const likeHandler = () => {
    try {
      const response = fetch(`/api/post/${post._id}/like`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: loggedInUserId }),
      });
    } catch (err) {
      console.log(err);
    }
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  // delete post
  const deleteHandler = async () => {
    try {
      const response = await fetch(`/api/post/${post._id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: loggedInUserId }),
      });
      const data = await response.json();
      // console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const deletePost = () => {
    deleteHandler();
    window.location.reload();
  };

  // console.log('here');

  return (
    <div className="myCard">
      <div className="upper-part">
        <div className="short-bio">
          <img
            src={
              post.userPic
                ? post.userPic
                : "https://png.pngtree.com/png-vector/20191009/ourmid/pngtree-user-icon-png-image_1796659.jpg"
            }
            alt="Profile pic"
          />
        </div>
        <div className="card-maker">
          <div style={{fontWeight:'bold', fontSize:'1.3rem'}}>{post.username ? post.username : post.userId}</div>
          <div style={{fontSize:'0.95rem', color:'darkgray'}}>{format(post.createdAt)}</div>
        </div>
        <div className="delete">
          {isUser && (
            <IconButton onClick={deletePost}>
              <MdDelete style={{color:'darkgray'}}/>
            </IconButton>
          )}
        </div>
      </div>
      <div className="card-image">
        <img
          src={
            post.img
              ? post.img
              : "https://st2.depositphotos.com/1009634/7235/v/450/depositphotos_72350117-stock-illustration-no-user-profile-picture-hand.jpg"
          }
          alt="not availabel"
          style={{ width: "100%", height: "cover" }}
        />
      </div>
      <div className="likes-year-container">
        <div>
          {isLiked ? (
            <FavoriteOutlinedIcon
              color="error"
              style={{ cursor: "pointer" }}
              onClick={likeHandler}
            />
          ) : (
            <FavoriteBorderOutlinedIcon
              style={{ color: "white", cursor: "pointer" }}
              onClick={likeHandler}
            />
          )}{" "}
          {like} People liked
        </div>
        <div>
          <CalendarMonthIcon /> : {post.eventYear?post.eventYear:""}
        </div>
      </div>
      {/* <h5 style={{ color: "white" }}></h5> */}

      <CardContent>
        {/* <Typography gutterBottom variant="h5" component="div">{post.title}</Typography> */}
        <div
          className="content"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <h4>{post.title.substr(0, 21)}..</h4>
        </div>
        <Divider />
        <Typography variant="body2" component="h5">
          {post.desc.substr(0, 50)}..
        </Typography>
        {/* <Typography variant='body2' component="h6">Temporary Tags for filtering:{post.tags}</Typography> */}
      </CardContent>
    </div>
  );
};

export default Cards;
