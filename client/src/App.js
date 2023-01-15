import Main from './components/Main/Main';
import NotFound from './components/NotFound/NotFound';
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Login from './components/login/Login';
import SignIn from './components/login/pages/SignIn';
import Categories from './components/Categories/Categories';
import CreatePost from './components/Create/Create';
import Navbar from './components/Navbar/Navbar';
import { useSelector } from 'react-redux';

function App() {
  console.log("hello jii");
  // const {user}=useSelector((state)=>state.auth);

  return (
    <>
      <Router >
      <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/recent' element={<Categories />} />
          <Route path='/top' element={<Categories />} />
          <Route path='/create' element={<CreatePost />} />
          <Route path='/signup' element={<Login />} />
          <Route path='/signin' element={<SignIn/>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
