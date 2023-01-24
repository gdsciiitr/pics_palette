import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Batch from './Batch/Batch';
// import Categories from './Categories/Categories';
import './Main.css';
import Recent from './Recent/Recent';
import Header from '../Header/Header';
import quotes from '../../quotess';

const Main = () => {
    const [quote, setQuote] = useState("");
    useEffect(() => {
        const num = Math.floor((Math.random())*20);
        setQuote(quotes[num].quote);
    },[])
    return (
        <>
            <Header quote={quote} />
            <Recent className='maincont' />
            {/* <Categories className='maincont' /> */}
            <Batch className='maincont' />
            <Footer />
        </>
    )
}

export default Main
