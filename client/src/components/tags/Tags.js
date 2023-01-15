import React from 'react';
import './Tags.css';

const Tags = () => {
    const tags=['literature','sports','technical','celebrations','hostel']
  return (
    <div className='important-tags'>
        <div className='tags-heading'>Useful Tags</div>
        <div className='tags-container'>
            {
                tags.map((tag,index)=>{
                    return (
                        <div key={index} className='tag'>
                            {tag}
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Tags
