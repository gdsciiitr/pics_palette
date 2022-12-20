import './Navbar.css';
import React from 'react';
import {AiOutlineSearch} from 'react-icons/ai';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid col-md-10 col-12">
        <a className="navbar-brand fw-3 fs-2" href="/">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
          <ul className="navbar-nav ms-5 mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active fw-3 hover-underline-animation" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-3 hover-underline-animation" aria-current="page" href="/">Categories</a>
            </li>
          </ul>
          <form id='search' className=' d-flex justify-content-between align-items-center'>
            <input type={'text'} className='search' placeholder='Search'/><AiOutlineSearch style={{color:'white',fontSize:'1.3em'}}/>
          </form>
          <ul className="navbar-nav ms-5 mb-2 mb-lg-0">
            <li className="nav-item m-2">
            <a className="button d-flex align-items-center justify-content-center" href="/">+ Compose</a>
            </li>
            <li className="nav-item m-2">
            <a className="button d-flex align-items-center justify-content-center" href="/">SignIn/LogIn</a>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
  )
}

export default Navbar