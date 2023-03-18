import Main from './components/Main/Main';
import NotFound from './components/NotFound/NotFound';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/login/Login';
import SignIn from './components/login/pages/SignIn';
import Explore from './components/Explore/Explore';
import CreatePost from './components/Create/Create';
import Navbar from './components/Navbar/Navbar';
import Sendmail from './components/login/pages/Sendmail';
import ChangePwd from './components/login/pages/ChangePwd';
import { useSelector } from 'react-redux';
import User from './components/User/User';

function App() {

  const user=localStorage.getItem('profiles')?.token

  return (
    <>
      <Router >
      <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/batch/:batch' element={<Explore />} />
          <Route path='/search' element={<Explore />} />
          <Route path='/recent' element={<Explore />} />
          <Route path='/top' element={<Explore />} />
          <Route path='/create' element={<CreatePost />} />
          <Route path='/signup' element={<Login />} />
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/send-mail' element={<Sendmail/>} />
          <Route path='/user/reset/:id/:token' element={<ChangePwd/>} />
          <Route path='/account/:id' element={<User/>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
