import React from 'react';
import { MainContainer } from './components/home/main/mainContainer';
import { Route, Routes, Outlet } from 'react-router-dom';
import { SignInPage } from './components/authentication/signIn';
import { Home } from './components/home/home';
import { Orders } from './components/orders/order';
import { Employers } from './components/employers/Employers';
import { EmployersTable } from './components/employers/EmployersTable/EmployersTable';
import { AddEmployers } from './components/employers/addEployers/AddEployers';
import { EditEmployersTab } from './components/employers/EditEmployers/EditEmployersTab';
import { Products } from './components/products/Products';
import { ProductsTable } from './components/products/ProductsTable/ProductsTable';
import { Contacts } from './components/contacts/contacts';
import { Statistic } from './components/statistic/statistic';
import {Navigate} from "react-router";

const PrivateRoute = () => {
  return (
      localStorage.getItem('role') === 'суперадмин' ?
          <Outlet/> : <Navigate to="/home" />
  )
}

  const App = () => {
  return (
      <>
    <Routes>
      <Route index path="/auth" element={<SignInPage />} />
      <Route path="/" element={<Home />}>
        <Route index path="home" element={<MainContainer />} />
        <Route path="orders" element={<Orders />} />
        <Route path="employers" element={<PrivateRoute/>}>
        <Route path="employers" element={<Employers/>}>
          <Route index element={<EmployersTable />} />
          <Route path="add" element={<AddEmployers />} />
          <Route path="edit" element={<EditEmployersTab />} />
        </Route>
        </Route>
        <Route path="products" element={<Products />}>
          <Route index element={<ProductsTable />} />
          {/*<Route path="add" element={<AddProducts/>} />*!/*/}
          {/*<Route path="edit" element={<EditProducts/>}/>*!/*/}
        </Route>
        <Route path="statistics" element={<Statistic />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
        </>
  );
};
export default App;
