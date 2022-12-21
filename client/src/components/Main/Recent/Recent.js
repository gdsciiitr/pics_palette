import React from 'react';
import './Recent.css';
import first from '../../../assets/img/WhatsApp Image 2022-12-17 at 12.54.25 PM (1).jpeg.jpg';
import second from '../../../assets/img/WhatsApp Image 2022-12-17 at 12.54.25 PM.jpeg.jpg';
import third from '../../../assets/img/WhatsApp Image 2022-12-17 at 12.54.28 PM.jpeg.jpg';

const Recent = () => {
    const recentPhotos = [first, second, third,first,second,third,first,second,third,first];
    return (
        <div className='mx-auto col-md-10 col-11 my-4 p-4 recent'>
            <h1>Our Latest Views</h1>
            <div className='d-flex justify-content-around flex-wrap recentsubcont'>
            {
                recentPhotos.map((img, index) => {
                    return(
                    <div className="recentcard m-3" key={index}>
                        <div className="recentcontent">
                            <div className="recentfront" style={{ background: `url('${img}')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                            </div>
                            <div className="recentback">
                                <p className="recentdescription d-flex flex-column justify-content-center align-items-center">
                                    <h1>Title</h1>
                                    <button className='btn btn-primary' style={{ borderRadius: '5px' }}>See more</button>
                                </p>
                            </div>
                        </div>
                    </div>
                    )
                }
                )
            }
            </div>

        </div>
    )
}

export default Recent
