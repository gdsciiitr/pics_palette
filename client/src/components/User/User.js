import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import "./User.css";

const User = () => {
  // const posts = data;
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const user = JSON.parse(localStorage.getItem("profiles"));
  console.log(user?.validUser._id);
  // const loggedInUserId = currentUser._id;
  // setPosts(data);
  // let isUser = false;
  // try {
  //   const user_ka_id = user.validUser._id;
  //   // console.log(user_ka_id);
  //   if (user_ka_id === post.userId) {
  //     isUser = true;
  //   }
  // } catch (err) {
  //   console.log("Following error occured" + err);
  // }

  const getPosts = async () => {
    console.log('begin');
    setIsLoading(true);
    const response = await fetch(
      `https://pics-palette-api.vercel.app/api/user/${user?.validUser._id}`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${user.token}` },
      }
    );
    const data = await response.json();
    setPosts(data.allPosts);
    console.log('middle');
    setIsLoading(false);
    console.log(data.allPosts)
    console.log('end');
  };

  useEffect(() => {
      getPosts();
  }, []);

  return (
    (isLoading ?
        <div className="d-flex align-items-center justify-content-center vh-100">
          <Loader />
        </div>
       :
      <div className="user-container d-flex justify-content-center ">
      <div className="user-intro">
        <img src={user?.validUser?.profilePicture} alt="" />
        <h1>{user?.validUser?.username}</h1>
        <p>{user?.validUser?.email}</p>
        <p>Batch: {user?.validUser?.batch}</p>
      </div>
      <div className="user-posts">
        {/* <div className="title">
          <h1>Posts</h1>
        </div> */}
        <div className="line" />
        <div className="user-allpost d-flex flex-wrap justify-content-center px-auto">
          {posts &&
            posts.map((post) => {
              return (
                <div className="user-card">
                  <img
                    src={
                      post.img
                        ? post.img
                        : "https://st2.depositphotos.com/1009634/7235/v/450/depositphotos_72350117-stock-illustration-no-user-profile-picture-hand.jpg"
                    }
                    alt="not availabel"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>)
  );
};

export default User;

// validUser: batch: "2021";
//            createdAt: "2023-01-24T06:26:03.434Z";
//            email: "mrgyan432@gmail.com";
//            isAdmin: false;
//            password: "$2a$10$UbN0kg05eB6WSRCWnDGO7eWNyfKd8W9JZP8DBRlYXoLi7pI27QS9.";
//            profilePicture: "https://res.cloudinary.com/dc0vkfxsw/image/upload/v1674541562/nct3u6kwggw3eeqdnk7r.png";
//            updatedAt: "2023-01-24T06:26:03.434Z";
//            username: "split space";
//            __v: 0;
//            _id: "63cf79fbf295e3489ea02376";
