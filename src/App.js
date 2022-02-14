import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Main } from './pages/main/main';
import { Home } from './pages/home/home';
import {SignInPage} from "./components/authentication/signIn";
import {Orders} from "./components/orders/order";
import {Employers} from "./components/employers/Employers";
import {Contacts} from "./components/contacts/contacts";
import {Statistic} from "./components/statistic/statistic";
import {Products} from "./components/products/products";
import {AddEmployers} from "./components/employers/addEployers/AddEployers";
import {EditEmployersTab} from "./components/employers/EditEmployers/EditEmployersTab";
import {EmployersTable} from "./components/employers/EmployersTable/EmployersTable";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="home" element={<Home />}>
          <Route index  path="main" element={<Main />} />
          <Route path="orders" element={<Orders />} />
          <Route path="employers" element={<Employers />} >
            <Route index path="list" element={<EmployersTable/>} />
            <Route path="add" element={<AddEmployers/>} />
            <Route path="edit" element={<EditEmployersTab/>}/>
          </Route>
          <Route path="products" element={<Products/>} />
          <Route path="statistics" element={<Statistic/>} />
          <Route path="contacts" element={<Contacts/>} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
