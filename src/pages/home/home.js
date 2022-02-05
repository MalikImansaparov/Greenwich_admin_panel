import {Outlet} from "react-router";
import ResponsiveDrawer from "../sidebar/drawer";

export const Home = () => {
  return (
          <div className="main">
            <div className="container">
                <div className='sidebar'></div>
            <ResponsiveDrawer/>
            <Outlet />
            </div>
          </div>
      )
};
