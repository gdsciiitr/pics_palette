import './Navbar.css';
import React from 'react'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand fw-3 fs-2" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
          <ul class="navbar-nav ms-5 mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active fw-3 hover-underline-animation" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-3 hover-underline-animation" aria-current="page" href="#">Categories</a>
            </li>
          </ul>
          <ul class="navbar-nav ms-5 mb-2 mb-lg-0">
            <li class="nav-item m-2">
            <a class="button" href="#">+ Compose</a>
            </li>
            <li class="nav-item m-2">
            <a class="button" href="#">SignIn/LogIn</a>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
  )
}

export default Navbar