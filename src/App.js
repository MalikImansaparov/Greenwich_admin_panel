import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Main } from './pages/main/main';
import { Home } from './pages/home/home';
import Products from "./pages/products/product";
import {SignInPage} from "./pages/signIn";
import {Orders} from "./pages/orders/order";
import {Employers} from "./pages/employers/employers";

const App = () => {
  return (
      <>
        <Routes>
          <Route path='/' element={<SignInPage/>}/>
          <Route path="home" element={<Home />}>
            <Route path="main" element={<Main />} />
            <Route path="orders" element={<Orders/>} />
            <Route path="employers" element={<Employers/>} />
            <Route path="products" element={<Products/>} />
          </Route>
        </Routes>
      </>
  );
};
export default App;
