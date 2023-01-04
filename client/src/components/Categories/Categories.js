import React from 'react';
import { useEffect, useState } from 'react';
import Cards from '../cards/Cards'

const Categories = () => {
  const [posts,setPosts]=useState([]);
  const token=JSON.parse(localStorage.getItem('profiles')).token
  
  //fetching timeline/all
  const getPosts = async () => {
    const response = await fetch("/api/post/timeline/all", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setPosts(data.posts)
    // console.log(data.posts)
  };
  
  useEffect(()=>{
    getPosts()
  },[])

  return (
    <div>
      {
        posts && posts.map((post)=>{
          return <Cards post={post} key={post._id} />
        })
      }
    </div>
  )
}

export default Categories
