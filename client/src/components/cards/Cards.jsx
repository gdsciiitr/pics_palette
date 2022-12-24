// https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHN0dWRlbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Card, Divider } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useEffect, useState } from 'react';
import {format} from 'timeago.js';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Cards=()=>{
  //fetching timeline/all
  const [posts,setPosts]=useState([]);
  const token=JSON.parse(localStorage.getItem('profiles')).token

  const getPosts = async () => {
    const response = await fetch("/api/post/timeline/all", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setPosts(data.posts)
    console.log(data.posts)
  };

  //fetch api/auth/register to get the profile pic and username
  
  useEffect(()=>{
    getPosts()
  },[])
  
  // console.log(posts[0].username)
  const k=posts[0]
  console.log(k);

  const myCard={
    // display:'flex',
    // flexDirectiom:'row',
    // margin:'auto',
    // alignItems:'center',
    // justifyContent:'center',
    display:'grid',
    gridTempleteColumn:'100%',
    justifyContent:'center',
    alignItems:'center'
  }

  return (
    <div style={myCard}>
    {posts && posts.map((post,index)=>(<Card sx={{ maxWidth: 373,margin:1 }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">{}</Avatar>}
        action={<IconButton aria-label="settings"><FavoriteBorderOutlinedIcon style={{color:'black'}}/></IconButton>}
        title={post._id}
        subheader={format(post.createdAt)}
      />
      <CardMedia
        component="img"
        height="fitContent"
        image={post.img ? post.img : 'https://st2.depositphotos.com/1009634/7235/v/450/depositphotos_72350117-stock-illustration-no-user-profile-picture-hand.jpg' }
        alt="not availabel"
      />

      <CardContent>
      <Typography gutterBottom variant="h5" component="div">{post.title}    <CalendarMonthIcon />{post.eventYear}</Typography>
      <Divider />
      <Typography variant="body1" style={{color:"black",fontFamily:'cursive'}}>{post.desc}</Typography>
      <Typography variant='body2' component="h6">Tags:{post.tags}</Typography>
      </CardContent>
    </Card>))}
    </div>
  );
}

export default Cards
