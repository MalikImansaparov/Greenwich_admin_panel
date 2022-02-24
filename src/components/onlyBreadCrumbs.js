import styled from "@emotion/styled";
import React from "react";
import { useLocation } from "react-router-dom";

export const BreadcrubWrapper = styled('div')`
  justify-content: end;
  width: 1050px;
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

export const OnlyBreadCrumbs = () => {
    const location = useLocation();
    const {pathname} = location
    return (
        <div>
            {pathname && <BreadcrubWrapper>
                {/*{pathname === "/products" ? "Продукты > " : null}*/}
                {/*{pathname === "/orders" ? "Заказы > " : null}*/}
                {/*{pathname === "/employers" ? "Сотрудники > " : null}*/}
                {/*{pathname === "/employers/add" ? "Сотрудники > Добавление" : null}*/}
                {/*{pathname === "/employers/edit" ? "Сотрудники > Редактирование" : null}*/}
                {/*/!*{pathname === `/employers/edit${id}` ? `Сотрудники > Редактирование > ${id}` : null}*!/*/}
                {pathname === "/contacts" ? "Контакты" : null}
                {pathname === "/statistics" ? "Статистика" : null}
            </BreadcrubWrapper>}
        </div>
    )
};

//const breadCrumbView = () => {
//         const { pathname } = location;
//         const pathnames = pathname.split("/").filter((item) => item);
//         const capatilize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
//         return (
//             <BreadcrubsWrapper>
//                 <Breadcrumb separator=">">
//                     {pathnames.length > 0 ? (
//                         <Breadcrumb.Item>
//                             <Link to='/'> </Link>
//                         </Breadcrumb.Item>
//                     ) : (
//                         <Breadcrumb.Item>
//                             <Link to='/main'>главная</Link>
//                         </Breadcrumb.Item>
//                     )}
//                     {pathnames.map((name, index) => {
//                         const routeTo = `>${pathnames.slice(0, index + 1).join(">")}`;
//                         const isLast = index === pathnames.length - 1;
//                         return isLast ? (
//                             <Breadcrumb.Item style={{margin: '10px'}}>{capatilize(name)}</Breadcrumb.Item>
//                         ) : (
//                             <Breadcrumb.Item style={{margin: '10px'}}>
//                                 <Link to={`${routeTo}`}>{capatilize(name)}</Link>
//                             </Breadcrumb.Item>
//                         );
//                     })}
//                 </Breadcrumb>
//             </BreadcrubsWrapper>
//         );
//  };
//
//     return <>{breadCrumbView()}</>;
// };
