import React from 'react'
import './Sendmail.css'
import {useParams} from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom';

const ChangePwd = () => {
    const navigate=useNavigate();
    const {id,token}=useParams();
    const [err,setErr]=useState('');
    const [input,setInput]=useState({
        newPassword:'',confirmPassword:''
    })

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const response=await axios.post(`https://pics-palette-api.vercel.app/api/auth/forget-password/${id}/${token}`,input);
            // alert(response.data.message);
            setInput({newPassword:'',confirmPassword:''})
            toast.success(response.data.message,{
                position:"top-center",
                theme:'dark'
            })
            navigate('/signin');
        }catch(err){
            // alert(err.response.data.message);
            toast.error(err.response.data.message,{
                position:"bottom-center",
                theme:'dark'
            })
            setErr(err.response.data.message);
        }
    }
    
    return (
        <div className='mail-container'>
            <form className='mail-form2' onSubmit={handleSubmit}>
                <h3>Change Your Password Now !!</h3>
                <TextField type='password' name='newPassword' id="outlined-basic" label="New Password" variant="outlined" onChange={e=>setInput({...input,[e.target.name]:e.target.value})} value={input.newPassword} /><br/>
                <TextField type='password' name='confirmPassword' id="outlined-basic" label="Confirm Password" variant="outlined" onChange={e=>setInput({...input,[e.target.name]:e.target.value})} value={input.confirmPassword} /><br/>
                <Button type='submit' variant="contained" style={{backgroundColor:'black',color:'white'}} className='rbtn'>Change Password</Button>
            </form>
            <ToastContainer/>
            {err && <b>Something Went Wrong...</b>}
        </div>
    ) 
}

export default ChangePwd
