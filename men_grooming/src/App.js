import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import {Home} from "./component/Home";
import React from "react";
import {Routes, Route} from "react-router";
import {ToastContainer} from "react-toastify";
import {Login} from "./component/Login";
import {Detail} from "./component/Detail";
import {ListProduct} from "./component/ListProduct";
import {ListCategory} from "./component/category/ListCategory";
import {Cart} from "./component/Cart";
import {Search} from "./component/Search";
import {Customer} from "./component/Customer";
function App() {
  return (
      <>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/detail/:id" element={<Detail/>}/>
          <Route path="/list" element={<ListProduct/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/search/:searchName" element={<Search/>}/>
          <Route path="/category/:id" element={<ListCategory/>}/>
          <Route path="/info" element={<Customer/>}/>
        </Routes>
        <ToastContainer/>
      </>
  );
}

export default App;
