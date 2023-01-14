import React from 'react';
import { useEffect, useState } from 'react';
import Cards from '../cards/Cards';
import RecentPost from '../Recent/RecentPost';
import './Categories.css'

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
    <div className='cat-page'>
    <RecentPost />
    <div className='allpost'>
      {
        posts && posts.map((post)=>{
          return <Cards post={post} key={post._id} />
        })
      }
    </div>
    </div>
  )
}

export default Categories
