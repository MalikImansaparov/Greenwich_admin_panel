import styled from "@emotion/styled";
import React from "react";
import { useLocation } from "react-router-dom";

export const BreadcrubsWrapper = styled('div')`
  justify-content: end;
  width: 1060px;
  border-radius: 20px;
  background: #ffffff;
  border: none;
  outline: none;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: 600;
  color: #487349;
  margin-bottom: 30px;
`;

 const BreadCrumb = () => {
    const location = useLocation();
    const {pathname} = location
    return (
        <div>
            {pathname && <BreadcrubsWrapper>
                {pathname === "/products" ? "Продукты > " : null}
                {pathname === "/orders" ? "Заказы > " : null}
                {pathname === "/employers" ? "Сотрудники > " : null}
                {pathname === "/employers/add" ? "Сотрудники  >  Добавление сотрудника" : null}
                {pathname === "/employers/edit" ? "Сотрудники  >  Редактирование сотрудника" : null}
                {pathname === "/products/add" ? "Продукты  >  Добавление продукта" : null}
                {pathname === "/products/edit" ? "Продукты  >  Редактирование продукта" : null}
                {pathname === "/contacts/edit" ? "Контакты  >  Редактирование контактов " : null}
                {/*{pathname === `/employers/edit${id}` ? `Сотрудники > Редактирование > ${id}` : null}*/}
            </BreadcrubsWrapper>}
        </div>
    )
};

 export default BreadCrumb

