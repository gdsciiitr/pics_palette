import './Navbar.css';
import React, { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaPlus } from 'react-icons/fa';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchPost } from '../../actions/post';

const Navbar = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profiles')));

  const [searchQuery,setSearchQuery]=useState('');

  const navigate=useNavigate();

  const handleSearch=async(e)=>{
    setSearchQuery(e.target.value);
    if(searchQuery?.trim().length>0){
      dispatch(searchPost(e.target.value.trim()));
      navigate(`/search?username=${e.target.value.trim()}`);
    }
  }

  const location = useLocation();

    const dispatch = useDispatch();


    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        setUser(null);
    }

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('profiles')));
    }, [location])

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid col-md-10 col-12">
        <NavLink className="navbar-brand fw-3 fs-2" to="/">
          Pics Palette
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-3 w-100 d-flex justify-content-between align-items-center">
            <li className="nav-item">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active fw-3 hover-underline-animation"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link fw-3 hover-underline-animation"
                    aria-current="page"
                    to="/categories"
                  >
                    Explore
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <div class="box">
                <div>
                  <input
                    type="text"
                    class="input"
                    name="txt"
                    value={searchQuery}
                    onChange={handleSearch}
                    onMouseOut={(e) => {
                      setSearchQuery("");
                    }}
                    autoComplete="off"
                  />
                </div>
                <AiOutlineSearch
                  style={{ color: "", fontSize: "1.3em" }}
                  className="searchIcon"
                />
              </div>
            </li>
            <li className="nav-item">
              <ul className="navbar-nav">
                {user ? (
                  <li className="nav-item m-2">
                    <NavLink to={`/account/${user?.validUser?._id}`}>
                      <img
                        src={user?.validUser?.profilePicture}
                        className="profilePic"
                        alt=""
                      />
                    </NavLink>
                  </li>
                ) : (
                  ""
                )}
                <li className="nav-item m-2">
                  <NavLink
                    className="button d-flex align-items-center justify-content-center"
                    to="/create"
                  >
                    <FaPlus className="pe-2 fs-4" /> Compose
                  </NavLink>
                </li>
                <li className="nav-item m-2">
                  {user ? (
                    <NavLink
                      className="btn btn-danger d-flex align-items-center justify-content-center"
                      to="/signin"
                      onClick={logout}
                    >
                      Logout
                    </NavLink>
                  ) : (
                    <NavLink
                      className="button d-flex align-items-center justify-content-center"
                      to="/signup"
                    >
                      SignIn/LogIn
                    </NavLink>
                  )}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
