import React from 'react';
import './Categories.css';
import first from '../../../assets/img/WhatsApp Image 2022-12-17 at 12.54.25 PM (1).jpeg.jpg';
import second from '../../../assets/img/WhatsApp Image 2022-12-17 at 12.54.25 PM.jpeg.jpg';
import third from '../../../assets/img/WhatsApp Image 2022-12-17 at 12.54.28 PM.jpeg.jpg';

const Categories = () => {
    const category = [first, second, third,first,second,third,first,second,];
    return (
        <div className='mx-auto col-md-10 col-11 my-4 p-4 category'>
            <h1>Our Categories</h1>
            <div className='d-flex justify-content-around flex-wrap categorysubcont'>
                {
                    category.map((img, index) => {
                        return (
                            <div className="categorycard m-3" key={index} style={{ background: `url('${img}')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                                <div className="categorydetails">
                                    <p className="categorytitle">Literature</p>
                                </div>
                                <button className="categorybutton">See More</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Categories
