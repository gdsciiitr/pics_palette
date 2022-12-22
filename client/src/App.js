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
import Categories from './components/Categories/Categories';
import Create from './components/Create/Create';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Router >
      <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/create' element={<Create />} />
          <Route path='/signup' element={<Login />} />
          <Route path='/signin' element={<SignIn/>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
