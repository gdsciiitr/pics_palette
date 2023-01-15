import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Cards from '../cards/Cards';
import RecentPost from '../Recent/RecentPost';
import Tags from '../tags/Tags';
import './Categories.css'

const Categories = () => {
  const [posts, setPosts] = useState([]);
  const location=useLocation();
  const path=location.pathname;
  const token = JSON.parse(localStorage.getItem('profiles')).token

  //fetching timeline/all
  const getPosts = async () => {
    const response = await fetch(`/api/post/timeline/${path==='/categories'?'all':path==='/recent'?'/recentall':'topall'}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setPosts(data.posts)
    // console.log(data.posts)
  };

  useEffect(() => {
    getPosts()
  }, [path])

  return (
    <div className='cat-page'>
      <Tags />
      <div className='allpost'>
        {
          posts && posts.map((post) => {
            return <Cards post={post} key={post._id} />
          })
        }
      </div>
      <RecentPost />
    </div>
  )
}

export default Categories
