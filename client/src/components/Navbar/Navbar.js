import './Navbar.css';
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaPlus } from 'react-icons/fa';
import { Navigate, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
// import { setLogout } from '../../actions/auth';

const Navbar = () => {
  // const isAuth =  JSON.parse(localStorage.getItem('profiles')).token ;
  const dispatch=useDispatch();

  // const logout=()=>{
    // dispatch(setLogout())
  // }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid col-md-10 col-12">
        <NavLink className="navbar-brand fw-3 fs-2" to="/">Navbar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-3 w-100 d-flex justify-content-between align-items-center">
            <li className="nav-item">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link active fw-3 hover-underline-animation" aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link fw-3 hover-underline-animation" aria-current="page" to="/categories">Categories</NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <div class="box">
                <form name="search">
                  <input type="text" class="input" name="txt" onMouseOut={(e) => {
                    e.target.value = '';
                  }} />
                </form>
                <AiOutlineSearch style={{ color: '', fontSize: '1.3em' }} className='searchIcon' />
              </div>
            </li>
            <li className='nav-item'>
              <ul className="navbar-nav">
                <li className="nav-item m-2">
                  <NavLink className="button d-flex align-items-center justify-content-center" to="/create"><FaPlus className='pe-2 fs-4'/> Compose</NavLink>
                </li>
                <li className="nav-item m-2">
                  <NavLink className="button d-flex align-items-center justify-content-center" to="/signup">SignIn/LogIn</NavLink> 
                  {/* <NavLink className="button d-flex align-items-center justify-content-center" to="/signin" >Logout</NavLink> */}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
