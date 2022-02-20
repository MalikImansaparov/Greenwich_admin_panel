import React from "react";
import {BrowserRouter as Router, Routes} from 'react-router-dom';
import {UseRoutes} from './routes'
import {Main} from "./pages/main/main";
import { useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/authContext";
import CircularIndeterminate from "./components/preloader";

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
                { isAuthenticated && <Main/> }
                    <>
                    <UseRoutes isAuthenticated={isAuthenticated} userId={userId}/>
                    </>
            </Router>
        </AuthContext.Provider>
    )
}
export default App;

