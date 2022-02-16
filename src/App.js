import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Main } from './pages/main/main';
import { Home } from './pages/home/home';
import {SignInPage} from "./components/authentication/signIn";
import {Orders} from "./components/orders/order";
import {Employers} from "./components/employers/Employers";
import {Contacts} from "./components/contacts/contacts";
import {Statistic} from "./components/statistic/statistic";
import {AddEmployers} from "./components/employers/addEployers/AddEployers";
import {EditEmployersTab} from "./components/employers/EditEmployers/EditEmployersTab";
import {EmployersTable} from "./components/employers/EmployersTable/EmployersTable";
import {ProductsTable} from "./components/products/ProductsTable/ProductsTable";
import {Products} from "./components/products/Products";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="home" element={<Home />}>
          <Route index  path="main" element={<Main />} />
          <Route path="orders" element={<Orders />} />
          <Route path="employers" element={<Employers />} >
            <Route index element={<EmployersTable/>}/>
            <Route path="add" element={<AddEmployers/>} />
            <Route path="edit" element={<EditEmployersTab/>}/>
          </Route>
          <Route path="products" element={<Products/>}>
            <Route index element={<ProductsTable/>}/>
            {/*<Route path="add" element={<AddProducts/>} />*!/*/}
            {/*<Route path="edit" element={<EditProducts/>}/>*!/*/}
          </Route>
          <Route path="statistics" element={<Statistic/>} />
          <Route path="contacts" element={<Contacts/>} />
        </Route>
      </Routes>
    </>
  );
};
export default App;

//<Routes>
//         <Route path="/" element={<SignInPage />} />
//         <Route path="домой" element={<Home />}>
//           <Route index path="главная" element={<Main />} />
//           <Route path="заказы" element={<Orders />} />
//           <Route path="сотрудники" element={<Employers />} >
//             <Route index element={<EmployersTable/>}/>
//             <Route path="добавить" element={<AddEmployers/>} />
//             <Route path="редактировать" element={<EditEmployersTab/>}/>
//           </Route>
//           <Route path="продукты" element={<Products/>}>
//             <Route index element={<ProductsTable/>}/>
//             {/*<Route path="add" element={<AddProducts/>} />*/}
//             {/*<Route path="edit" element={<EditProducts/>}/>*/}
//           </Route>
//           <Route path="статистика" element={<Statistic/>} />
//           <Route path="контакты" element={<Contacts/>} />
//         </Route>
//       </Routes>
