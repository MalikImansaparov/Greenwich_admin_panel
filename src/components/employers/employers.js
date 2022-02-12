import {EmployersList} from "./EmployersList/EmployersList";
import { Header } from "../header/header";

export const Employers = () => {
return (
  <div sx={{ ml: '20px' }}>
     <Header/>
    <EmployersList />
  </div>
);
}
