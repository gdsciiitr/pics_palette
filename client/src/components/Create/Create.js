import React, { useState } from 'react'
import './Create.css';
import camera from '../../assets/mypic/camera.jpg';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {createPost} from '../../actions/post';

const CreatePost = () => {
    const [details,setDetails]=useState({
        title:"",desc:"",tags:"",eventYear:""
    });

    const [file,setFile]=useState();
    const formData=new FormData();

    const dispatch=useDispatch();
    const navigate=useNavigate();
    
    const handleChange = (event)=>{
        setDetails({ ...details, [event.target.name]: event.target.value });
    }
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log("The post was Sent With following details:");

        const currentUser=(JSON.parse(localStorage.getItem('profiles'))).validUser;
        const CuserId=currentUser._id;

        formData.append("img",file);
        console.log(details);
        console.log(...formData);
        formData.append("userId",CuserId);
        // formData.append("username",details.username);
        formData.append("title",details.title);
        formData.append("desc",details.desc);
        formData.append("tags",details.tags);
        formData.append("eventYear",details.eventYear);
        console.log(...formData);
        dispatch(createPost(formData,navigate));
    }

    return (
        <div>
            <div className='createCont mt-5 mx-auto d-flex flex-row mb-3'>
                <img src={camera} alt='' className='createImg' />
                <form className='createSubcont d-flex flex-column align-items-center' onSubmit={handleSubmit}>
                    <h1 className='mt-3'>Create Your Gallery</h1>
                        {/* <div className="createGroup m-4">
                            <input type="text" id="name" className="createInput" name="username" autocomplete="off" required value={details.username} onChange={handleChange}/>
                            <label className="user-label">Full Name</label>
                        </div> */}
                        <div className="createGroup m-4">
                            <input type="text" id="name" className="createInput" name="title" autocomplete="off" required value={details.title} onChange={handleChange}/>
                            
                            {details.title?"":<label className="user-label">Title</label>}
                        </div>
                        <div className="createGroup m-4">
                            <input type="text" id="name" className="createInput" name="desc" autocomplete="off" required value={details.desc} onChange={handleChange}/>
                            {details.desc?"":<label className="user-label">Description</label>}
                        </div>
                        <div className="createGroup m-4">
                            <input type="text" id="name" className="createInput" name="tags" autocomplete="off" required value={details.tags} onChange={handleChange}/>
                            {details.tags?"":<label className="user-label">Tags</label>}
                        </div>
                        <div className="createGroup m-4">
                            <input type="text" id="name" className="createInput" name="eventYear" autocomplete="off" required value={details.eventYear} onChange={handleChange}/>
                            {details.eventYear?"":<label className="user-label">Event Year</label>}
                        </div>
                        <div className="createGroup m-4">
                            <input type="file" id="name" className="createInput" name="img" autocomplete="off" required onChange={(event)=>{setFile(event.target.files[0])}}/>
                            {/* <label className="user-label">Upload Event Pic</label> */}
                        </div>
                        <div className='createGroup m-4'>
                            <button className='btn createbtn' type='submit'>Submit</button>
                        </div>
                </form>
            </div>
        </div>
    )
}

export default CreatePost
