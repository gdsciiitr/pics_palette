import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Card, Divider } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useEffect, useState } from 'react';
import {format} from 'timeago.js';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './Cards.css'
import { height, Stack } from '@mui/system';
import axios from 'axios';

const Cards=({post})=>{  //post as props from categories

  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const token=JSON.parse(localStorage.getItem('profiles')).token
  const currentUser=(JSON.parse(localStorage.getItem('profiles'))).validUser;
  const loggedInUserId = currentUser._id;
  let isUser=false;

  try{
    const user_ka_id=currentUser._id;
    // console.log(user_ka_id);
    if(user_ka_id===post.userId){
      isUser=true;
    }
  }
  catch(err){
    console.log("Following error occured"+err);
  }

  //like or dislike post
  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  const likeHandler = () => {
    try {
      const response=fetch(`/api/post/${post._id}/like`,{
        method:'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: loggedInUserId }),
      })
    }catch (err) {
      console.log(err);
    }
      setLike(isLiked ? like - 1 : like + 1);
      setIsLiked(!isLiked);
  };


  // delete post
  const deleteHandler = async () => {
    try {
     const response= await fetch(`/api/post/${post._id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: loggedInUserId }),
    })
      const data=await response.json();
      console.log(data);
    }catch (err) {
      console.log(err);
    }
  };

  const deletePost=()=>{
    deleteHandler();
    window.location.reload();
  }

  console.log(post);

  return (
    <div className='myCard'>
    <Card sx={{ width: 355,margin:1 }}>
      <CardHeader
        avatar={<Avatar alt="Remy Sharp" src={post.userPic ? post.userPic : 'https://png.pngtree.com/png-vector/20191009/ourmid/pngtree-user-icon-png-image_1796659.jpg'} />}
        action={isUser &&<IconButton onClick={deletePost}><DeleteIcon/></IconButton>}
        title={post.username ? post.username : post.userId }
        subheader={format(post.createdAt)}
      />
      
      <CardMedia style={{border:'1px solid gray'}}>
        <img src={ post.img ? post.img : 'https://st2.depositphotos.com/1009634/7235/v/450/depositphotos_72350117-stock-illustration-no-user-profile-picture-hand.jpg' } alt="not availabel" style={{width:'100%',height:'250px'}}/>
      </CardMedia>

        <Stack>
        <Typography>
          <IconButton onClick={likeHandler}>
              {isLiked ? (
                <FavoriteOutlinedIcon color='secondary' />
              ) : (
                <FavoriteBorderOutlinedIcon />
              )}
            </IconButton>
          {like} People liked
        </Typography>
        </Stack>


      <CardContent>
       {/* <Typography gutterBottom variant="h5" component="div">{post.title}</Typography> */}
        <div className='content' style={{display:'flex',justifyContent:'space-between'}}>
            <h4>{(post.title).substr(0,21)}..</h4>
            <h5 style={{color:'red'}}>YEAR:{post.eventYear}</h5> 
        </div>
        <Divider />
        <Typography variant="body2" component='h5' style={{color:"black",fontFamily:'cursive'}}>DESC:{(post.desc).substr(0,50)}..</Typography>
        {/* <Typography variant='body2' component="h6">Temporary Tags for filtering:{post.tags}</Typography> */}
      </CardContent>
    </Card>
    </div>
  );
}

export default Cards


