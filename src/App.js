import React from 'react';
import { MainContainer } from './components/home/main/mainContainer';
import { Route, Routes, Outlet } from 'react-router-dom';
import { SignInPage } from './components/signinAuth/signIn';
import { Home } from './components/home/home';
import { Orders } from './components/orders/order';
import { Employers } from './components/Employers/Employers';
import { Products } from './components/products/Products';
import { ProductsTable } from './components/products/ProductsTable/ProductsTable';
import { Contacts } from './components/contacts/ContactsCart/contacts';
import { Statistic } from './components/statistic/statistic';
import { Navigate } from 'react-router';
import { AddProducts } from './components/products/addProducts/AddProducts';
import { ContactsEdit } from './components/contacts/ContactsEditCart/ContactsEdit';
import { EditProducts } from './components/products/EditProducts/ProductsEdit';
import {ContactsAddCart} from "./components/contacts/ContactAdd/ContactAdd";
import {AboutEdit} from "./components/contacts/ContactsEditCart/AboutEdit";
import {EmployersTable} from "./components/Employers/EmployersTable/EmployersTable";
import {AddEmployers} from "./components/Employers/addEployers/AddEployers";
import {EditEmployers} from "./components/Employers/EditEmployers/EditEmployers";

const PrivateRoute = () => {
  return localStorage.getItem('role') !== 'Суперадмин' ? (
    <Outlet />
  ) : (
    <Navigate to="/auth" />
  );
};

const App = () => {
  return (
    <>
      <Routes>
        <Route index path="/auth" element={<SignInPage />} />
        <Route index path="home" element={<MainContainer />} />
        <Route path="/" element={<Home />}>
          <Route path="orders" element={<Orders />} />
          <Route path="employers" element={<Employers />}>
            <Route index element={<EmployersTable/>} />
            <Route path="" element={<PrivateRoute />}>
              <Route path="add" element={<AddEmployers/>} />
              <Route path=":id" element={<EditEmployers/>} />
            </Route>
          </Route>
          <Route path="products" element={<Products />}>
            <Route index element={<ProductsTable />} />
            <Route path="add" element={<AddProducts />} />
          </Route>
          <Route path="products/:id" element={<EditProducts />} />
          <Route path="statistics" element={<Statistic />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="contacts/add" element={<ContactsAddCart/>} />
          <Route path="contacts/:id" element={<ContactsEdit />} />
          <Route path="contacts/about" element={<AboutEdit/>} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
