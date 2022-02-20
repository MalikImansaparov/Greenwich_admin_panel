import {Route, Routes} from "react-router-dom";
import {SignInPage} from "./components/authentication/signIn";
import {Home} from "./pages/home/home";
import {Main} from "./pages/main/main";
import {Orders} from "./components/orders/order";
import {Employers} from "./components/employers/Employers";
import {EmployersTable} from "./components/employers/EmployersTable/EmployersTable";
import {AddEmployers} from "./components/employers/addEployers/AddEployers";
import {EditEmployersTab} from "./components/employers/EditEmployers/EditEmployersTab";
import {Products} from "./components/products/Products";
import {ProductsTable} from "./components/products/ProductsTable/ProductsTable";
import {Statistic} from "./components/statistic/statistic";
import {Contacts} from "./components/contacts/contacts";
import React from "react";

export const UseRoutes = (isAuthenticated) => {
    if(isAuthenticated){
        return (
            <Routes>
                <Route path="/auth" element={<SignInPage />} />
                <Route path="/" element={<Home />}>
                    <Route index  path="home" element={<Main />} />
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
        )
    }
    return (
        <Routes>
            <Route path="/auth" element={<SignInPage />} />
            <Route path="*" element={<SignInPage />} />
        </Routes>
    )
}
