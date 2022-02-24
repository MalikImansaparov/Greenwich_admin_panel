import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import {UseRoutes} from './routes'
import {MainContainer} from "./components/home/main/mainContainer";
import { useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/authContext";
import CircularIndeterminate from "./components/preloader";
import {useSelector} from "react-redux";

const App = () => {

    const {token, login, logout, userId, ready} = useAuth()
    const isAuthenticated = !!token
    // const routes = useRoutes(isAuthenticated)

    if (!ready){
        return <CircularIndeterminate/>
    }


    return (
        <AuthContext.Provider value={{
            token, login, logout, userId, isAuthenticated
        }}>
            <Router>
                { isAuthenticated && <MainContainer/> }
                    <>
                    <UseRoutes isAuthenticated={isAuthenticated} userId={userId}/>
                    </>
            </Router>
        </AuthContext.Provider>
    )
}
export default App;

