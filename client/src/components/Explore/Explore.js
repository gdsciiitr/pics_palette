import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Cards from '../cards/Cards';
import RecentPost from '../Recent/RecentPost';
import Tags from '../tags/Tags';
import './Explore.css'
import Loader from '../Loader/Loader';

const Explore = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location=useLocation();

  const {searchPosts}=useSelector(state=>state.post);
  
  // const [searchQuery,setSearchQuery]=useState(location.search?.split('=')[1] || '');
  const path=location.pathname;
  // console.log(searchQuery);
  // const searchQuery=location.search.split('=')[1]
  const token = JSON.parse(localStorage.getItem('profiles')).token;

  //fetching timeline/all
  const getPosts = async () => {
    setIsLoading(true);
    const response = await fetch(`/api/post/timeline/${path==='/categories'?'all':path==='/recent'?'/recentall':'topall'}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setPosts(data.posts)
    setIsLoading(false);
    console.log(data.posts)
  };

  const getBatch = async () => {
    console.log('in batch');
    setIsLoading(true);
    const response = await fetch(`/api/post/getByBatch?batch=${'20'+path.slice(-2)}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log('after it');
    const data = await response.json();
    setPosts(data.posts)
    setIsLoading(false);
    console.log(data.posts)
  };
  // console.log(path.split('-')[0])

  useEffect(() => {
    if(path==='/search'){
      // console.log(searchPosts);
      setPosts(searchPosts);
    }
    else if(path.split('-')[0].split('h/')[1]==='batch'){
      console.log('getting batch to render');
      console.log(path.slice(-2));
      getBatch();
    }
    else
    getPosts();
  }, [location])

  return (
    <div className="cat-page">
      <Tags />
      {isLoading ? (
        <div className="d-flex align-items-center justify-content-center vh-100">
          <Loader />
        </div>
      ):(
      <div className="allpost">
        {path === "/search" || path.split("-")[0] === "/batch/batch"
          ? posts &&
            posts.map((post) => {
              return post.map((p) => {
                return <Cards post={p} key={p._id} />;
              });
            })
          : posts &&
            posts.map((post) => {
              return <Cards post={post} key={post._id} />;
            })}
      </div>
      )}
      <RecentPost />
    </div>
  );
}

export default Explore
