import React from 'react';
import './Batch.css';
import first from '../../../assets/img/WhatsApp Image 2022-12-17 at 12.54.25 PM (1).jpeg.jpg';
import second from '../../../assets/img/WhatsApp Image 2022-12-17 at 12.54.25 PM.jpeg.jpg';
import third from '../../../assets/img/WhatsApp Image 2022-12-17 at 12.54.28 PM.jpeg.jpg';
import { NavLink } from 'react-router-dom';

const Batch = () => {
    const batches = [[first, second, third, first], [first, second, third, first], [first, second, third, first], [first, second, third, first]];
    
    return (
        <div className='mx-auto col-md-10 col-11 my-4 p-4 batch'>
            <h1>Our Batches</h1>
            <div className='batchsubcont'>
                {
                    batches.map((batch, index) => {
                        return (
                            <div className='d-flex justify-content-around align-items-center my-3' key={index}>
                                <div className='batchimgcont'>
                                    {
                                        batch.map((img) => {
                                            return (
                                                <img src={img} alt='' className='batchimg' />
                                            )
                                        })
                                    }
                                </div>
                                <h3>2k{21 + index} Batch</h3>
                                <NavLink to={`/batch/batch-2k${21+index}`} className='btn btn-primary batchbtn'>See More</NavLink>
                            </div>
                        )
                    })

                }

            </div>
        </div>
    )
}

export default Batch
