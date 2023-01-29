import React, { useState } from 'react'
import './Sendmail.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Sendmail = () => {
    const [email,setEmail]=useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log("clicked")
        console.log(email);
        // using axios
        const response=await axios.post('/api/auth/forget-password',{email});
        console.log(response);
        console.log("mail sent");
        //toast message
        setEmail('');
        toast.success("Mail sent successfully !! reset your password within 5 minutes",{
            position:"bottom-center",
            theme:'dark'
          })
    }

    return (
        <div className='mail-container'>
            <form className='mail-form' onSubmit={handleSubmit}>
                <h1>Forget Password?</h1>
                <p className='note'>You will receive a verification link on your mail to reset the password</p>
                <TextField type='email' name='email' id="outlined-basic" label="Enter Mail" variant="outlined" onChange={e=>setEmail(e.target.value)} value={email} /><br/>
                <Button type='submit' variant="contained" style={{backgroundColor:'black',color:'white'}} className='rbtn'>Send Mail</Button>
            </form>
            <ToastContainer/>
        </div>
    ) 
}

export default Sendmail
