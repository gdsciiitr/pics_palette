import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Cards from '../cards/Cards';
import RecentPost from '../Recent/RecentPost';
import Tags from '../tags/Tags';
import './Categories.css'

const Categories = () => {
  const [posts, setPosts] = useState([]);
  const location=useLocation();

  const {searchPosts}=useSelector(state=>state.post);
  
  // const [searchQuery,setSearchQuery]=useState(location.search?.split('=')[1] || '');
  const path=location.pathname;
  // console.log(searchQuery);
  // const searchQuery=location.search.split('=')[1]
  const token = JSON.parse(localStorage.getItem('profiles')).token;

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
    if(path==='/search'){
      // console.log(searchPosts);
      setPosts(searchPosts);
    }
    else
    getPosts();
  }, [location])

  return (
    <div className='cat-page'>
      <Tags />
      <div className='allpost'>
        {
          path==='/search'?
          posts && posts.map((post) => {
            return (post.map((p)=>{
              return <Cards post={p} key={p._id} />
            }))
          })
          :
          posts && posts.map((post) => {
            return <div style={{color:'white'}}>hii<Cards post={post} key={post._id} /></div>
          })
        }
      </div>
      <RecentPost />
    </div>
  )
}

export default Categories
