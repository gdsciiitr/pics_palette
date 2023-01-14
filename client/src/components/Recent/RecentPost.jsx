import React from 'react'
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
  return (   
    
    <div className='outerp'>
        <h3>Recent Posts</h3>
        <Link  className='recent-container'>   {/* to='/'*/}
        <div className='rpost'>
            <img src='https://png.pngtree.com/png-clipart/20210826/ourmid/pngtree-college-entrance-examination-sprint-character-image-elements-png-image_3459067.jpg' alt="my img" height='80px' width='80px' />
            <div className='rtext'>
                <span className='rtitle'>Post Title</span>
                <span className='rname'>User's Name</span>
            </div>
        </div>
        </Link>

        <Link  className='recent-container'>   {/* to='/'*/}
        <div className='rpost'>
            <img src='https://png.pngtree.com/png-clipart/20210826/ourmid/pngtree-college-entrance-examination-sprint-character-image-elements-png-image_3459067.jpg' alt="my img" height='80px' width='80px' />
            <div className='rtext'>
                <span className='rtitle'>Post Title</span>
                <span className='rname'>User's Name</span>
            </div>
        </div>
        </Link>

        <Link  className='recent-container'>   {/* to='/'*/}
        <div className='rpost'>
            <img src='https://png.pngtree.com/png-clipart/20210826/ourmid/pngtree-college-entrance-examination-sprint-character-image-elements-png-image_3459067.jpg' alt="my img" height='80px' width='80px' />
            <div className='rtext'>
                <span className='rtitle'>Post Title</span>
                <span className='rname'>User's Name</span>
            </div>
        </div>
        </Link>

        <Link  className='recent-container'>   {/* to='/'*/}
        <div className='rpost'>
            <img src='https://png.pngtree.com/png-clipart/20210826/ourmid/pngtree-college-entrance-examination-sprint-character-image-elements-png-image_3459067.jpg' alt="my img" height='80px' width='80px' />
            <div className='rtext'>
                <span className='rtitle'>Post Title</span>
                <span className='rname'>User's Name</span>
            </div>
        </div>
        </Link>

        
    </div>
  )
}

export default RecentPost
