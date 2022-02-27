import {Route, Routes} from "react-router-dom";
import {SignInPage} from "./components/authentication/signIn";
import {Home} from "./components/home/home";
import {MainContainer} from "./components/home/main/mainContainer";
import {Orders} from "./components/orders/order";
import {Employers} from "./components/employers/Employers";
import {EmployersTable} from "./components/employers/EmployersTable/EmployersTable";
import {AddEmployers} from "./components/employers/addEployers/AddEployers";
import {EditEmployersTab} from "./components/employers/EditEmployers/EditEmployersTab";
import {Products} from "./components/products/Products";
import {ProductsTable} from "./components/products/ProductsTable/ProductsTable";
import {Contacts} from "./components/contacts/contacts";
import React, {useState} from "react";
import {Navigate} from "react-router";
import {Statistic} from "./components/statistic/statistic";
import {useSelector} from "react-redux";

// export const PrivateRoute = ({ children }) => {
//     const [isSuperAdmin, setSuperAdmin] = useState(null)
//     const role = useSelector((state => state.role))
//     if( role === 'Суперадмин'){
//         setSuperAdmin(role)
//         return isSuperAdmin ? children : <Navigate to="/home" />
//     }
//     return children
// }
export const UseRoutes = (isAuthenticated) => {

    // const isSuperAdmin = useAuth();

    if(isAuthenticated){
        return (
            <Routes>
                <Route index path="/auth" element={<SignInPage />} />
                <Route path="/" element={<Home/>}>
                    <Route index  path="home" element={<MainContainer />} />
                    <Route path="orders" element={<Orders />} />
                    {/*<PrivateRoute>*/}
                        <Route path="employers" element={<Employers />} >
                            <Route index element={<EmployersTable/>}/>
                            <Route path="add" element={<AddEmployers/>} />
                            <Route path="edit" element={<EditEmployersTab/>}/>
                        </Route>
                    {/*</PrivateRoute>*/}
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
    } else {
        return (
            <Routes>
                <Route index path="/auth" element={<SignInPage />} />
                <Route path="*" element={<Navigate to='/auth'/>} />
            </Routes>
        )
    }

}



