import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Home from '../Home/Home';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import Contact from '../Contact/Contact';
import Blog from '../Blog/Blog';
import BlogArticle from '../BlogArticle/BlogArticle';
import HowTo from '../HowTo/HowTo';
import Troc from '../Troc/Troc';
import Stock from '../Stock/Stock';
import StockAdd from '../StockAdd/StockAdd';
import Settings from '../Settings/Settings';
import Error from '../Error/Error';

function App() {
  const [user, updateUser] = useState();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>
          <Route path="/contact" element={<Contact user={user} />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/blog/:article" element={<BlogArticle />}></Route>
          <Route path="/commentcamarche" element={<HowTo />}></Route>
          <Route path="/troquez" element={<Troc />}></Route>
          <Route path="/stock" element={<Stock />}></Route>
          <Route path="/stock/add" element={<StockAdd />}></Route>
          <Route path="/potager/parametres" element={<Settings />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
