import React, { useCallback, useEffect, useState } from "react";
import "./RecentPost.css";
import { Link, NavLink, useLocation } from "react-router-dom";

const RecentPost = () => {
  const location = useLocation();
  const path = location.pathname;
  console.log(path);
  const [posts, setPosts] = useState([]);
  const token = JSON.parse(localStorage.getItem("profiles")).token;

  //fetching timeline/all
  const getPosts = useCallback( async () => {
    const response = await fetch(
      `https://pics-palette-api.vercel.app/api/post/timeline${path === "/recent" ? "/top" : "/recent"}`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    setPosts(data.posts);
    // console.log(data.posts)
  },[path, token]);

function handleClick(){
  
}

  useEffect(() => {
    getPosts();
  }, [getPosts]);
  // console.log(posts);
  return (
    <div className="outerp">
      <h3>{path === "/recent" ? "Top" : "Recent"} Posts </h3>
      {posts?.map((e) => {
        return (
          <Link key={e._id} className="recent-container" onClick={handleClick}>
            {" "}
            {/* to={`/api/post/${e._id}`*/}
            <div className="rpost">
              {e.img ? (
                <img src={e.img} alt="my img" />
              ) : (
                <img
                  src="https://st2.depositphotos.com/1009634/7235/v/450/depositphotos_72350117-stock-illustration-no-user-profile-picture-hand.jpg"
                  alt="Nothing is here"
                />
              )}
              <div className="rtext">
                <span className="rtitle">{e.title.slice(0, 15)}</span>
                <span className="rname">
                  {e.username ? e.username : "unknown"}
                </span>
              </div>
            </div>
          </Link>
        );
      })}
      <div className="recent-button-container">
        <NavLink
          to={`${path === "/top" ? "/recent" : "/top"}`}
          className="button-recent"
        >
          See all
        </NavLink>
      </div>
    </div>
  );
};

export default RecentPost;
