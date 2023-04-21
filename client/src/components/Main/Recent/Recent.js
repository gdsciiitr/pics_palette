import React, { useCallback, useEffect, useState } from 'react';
import './Recent.css';
// import { useLocation } from 'react-router-dom';

const Recent = () => {
    const [posts, setPosts] = useState([]);
//   const location=useLocation();
  const token = JSON.parse(localStorage.getItem('profiles'))?.token

  const getPosts = useCallback( async () => {
    const response = await fetch(`https://pics-palette-api.vercel.app/api/post/timeline/recent`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setPosts(data.posts)
  },[token]);

  useEffect(() => {
    getPosts()
  }, [getPosts]);

    return (
        <div className='mx-auto col-md-10 col-11 my-4 p-4 recent'>
            <h1>Our Latest Views</h1>
            <div className='d-flex justify-content-around flex-wrap recentsubcont'>
            {
                posts?.map((post, index) => {
                    return (
                      <div className="recentcard m-3" key={index}>
                        <div className="recentcontent">
                          <div
                            className="recentfront"
                            style={{
                              background: `url('${post.img}')`,
                              backgroundSize: "cover",
                              borderRadius: "50%",
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "center",
                            }}
                          ></div>
                          <div
                            className="recentback"
                            style={{
                              background: `url('${post.img}')`,
                              backgroundSize: "cover",
                              borderRadius: "50%",
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "center",
                            }}
                          >
                            <p className="recentdescription d-flex flex-column  justify-content-center align-items-center w-100 h-100">
                              <div style={{ fontWeight: "bold", opacity: 1 }}>
                                {post.title}
                              </div>
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                }
                )
            }
            </div>

        </div>
    )
}

export default Recent
