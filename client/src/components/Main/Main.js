import React from 'react';
import Footer from '../Footer/Footer';
import Batch from './Batch/Batch';
import Categories from './Categories/Categories';
import './Main.css';
import Recent from './Recent/Recent';

const Main = () => {
    return (
        <>
            <div className='col-md-10 col-12 mx-auto my-5'>
                <h1 className='d-flex justify-content-center align-items-center mainImage'>College Memory</h1>
            </div>
            <Recent className='maincont' />
            <Categories className='maincont' />
            <Batch className='maincont' />
            <Footer />
        </>
    )
}

export default Main
