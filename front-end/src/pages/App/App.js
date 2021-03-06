import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Redirect } from 'react-router-dom';

import './App.css';

//--------------------IMPORT PAGES--------------------//

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

//--------------------IMPORT COMPONENTS--------------------//

import Header from '../../components/MAIN/Header/Header';
import Footer from '../../components/MAIN/Footer/Footer';

//--------------------IMPORT CONTEXT--------------------//

import {
  UserContext,
  ProductDataContext,
  DataLoading,
} from '../../utilities/Context';
// import { auth, onAuthStateChanged } from '../../utilities/firebase';

function App() {
  // Variable with context
  const [user, updateUser] = useState();
  const [productData, setProductData] = useState();
  const [isDataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    setDataLoading(true);
    async function fetchData(url) {
      try {
        const response = await fetch(url);
        const data = await response.json();

        setProductData(data);
      } catch (err) {
        console.log(err);
        // setError(true);
      } finally {
        setDataLoading(false);
      }
    }

    fetchData(`http://localhost:3001/products`);
  }, []);

  const [show, showMenu] = useState(false);

  return (
    <div
      className="App"
      onClick={(e) => {
        if (
          e.target.className !== 'login-menu-button' &&
          !e.target.classList.contains('show-state')
        ) {
          showMenu(false);
        }
      }}
    >
      <BrowserRouter>
        <UserContext.Provider
          value={{
            user,
            updateUser,
          }}
        >
          <ProductDataContext.Provider value={{ productData, setProductData }}>
            <DataLoading.Provider value={{ isDataLoading, setDataLoading }}>
              <Header show={show} showMenu={showMenu} />
              <Routes>
                <Route path="*" element={<Error />}></Route>
                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signUp" element={<SignUp />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/commentcamarche" element={<HowTo />}></Route>
                {/* <Route path="/blog" element={<Blog />}></Route>
            <Route path="/blog/:article" element={<BlogArticle />}></Route> */}

                {/* Routes ?? prot??ger */}
                <Route path="/troquez" element={<Troc />}></Route>
                <Route path="/stock" element={<Stock />}></Route>
                <Route path="/stock/add" element={<StockAdd />}></Route>
                <Route path="/parametres" element={<Settings />}></Route>
                {/* Routes ?? prot??ger */}
              </Routes>
              <Footer />
            </DataLoading.Provider>
          </ProductDataContext.Provider>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
