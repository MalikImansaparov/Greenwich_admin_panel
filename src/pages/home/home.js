import {Outlet} from "react-router";
import ResponsiveDrawer from "../sidebar/drawer";
import {Main} from "../main/main";

export const Home = () => {
  return (
          <div>
            {/*<ResponsiveDrawer/>*/}
            <Main/>
            <Outlet />
          </div>
      )
};
