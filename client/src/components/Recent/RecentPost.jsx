import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Button } from '@mui/material';
import './RecentPost.css';
import {Link} from 'react-router-dom';

const RecentPost = () => {
    const [posts,setPosts]=useState([]);
    const token=JSON.parse(localStorage.getItem('profiles')).token
    
    //fetching timeline/all
    const getPosts = async () => {
      const response = await fetch("/api/post/timeline/recent", {
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
    // console.log(posts);
  return (   
    
    <div className='outerp'>
        <h3>Recent Posts</h3>
        {posts.map((e)=>{
            return(<Link key={e._id} className='recent-container' >   {/* to={`/api/post/${e._id}`*/}
            <div className='rpost'>
                
                {e.img?<img src={e.img} alt="my img" height='80px' width='80px' />:<img src='https://st2.depositphotos.com/1009634/7235/v/450/depositphotos_72350117-stock-illustration-no-user-profile-picture-hand.jpg' alt='Nothing is here' height='80px' width='80px'/>}
                <div className='rtext'>
                    <span className='rtitle'>{e.title}</span>
                    <span className='rname'>{e.username?e.username:"unknown"}</span>
                </div>
            </div>
            </Link>  )
        })}
              
    </div>
  )
}

export default RecentPost
