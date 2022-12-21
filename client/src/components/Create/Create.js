import React from 'react'
import Navbar from '../Navbar/Navbar';
import './Create.css';
import camera from '../../assets/mypic/camera.jpg';

const Create = () => {
    const detail = [["Full Name", "name"], ["Title", "title"], ["Description", "desc"], ["Tags", "tags"], ["Event Year", "eventYear"]];
    return (
        <div>
            <Navbar />
            <div className='createCont mt-5 mx-auto d-flex flex-row mb-3'>
                <img src={camera} alt='' className='createImg' />
                <form className='createSubcont d-flex flex-column align-items-center'>
                    <h1 className='mt-3'>Create Your Gallery</h1>
                    {
                        detail.map((field) => {
                            return (
                                <div className="createGroup m-4">
                                    <input required="" type="text" name={field[1]} autocomplete="off" className="createInput" />
                                    <label className="user-label">{field[0]}</label>
                                </div>
                            )
                        })
                    }
                    <div className='createGroup m-4'>
                        <input type={'file'} name='img' className='createInput' />
                    </div>
                    <div className='createGroup m-4'>
                        <button className='btn createbtn'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Create
