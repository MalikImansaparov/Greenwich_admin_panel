import styled from "@emotion/styled";
import React from "react";
import { useLocation } from "react-router-dom";

export const BreadcrubWrapper = styled('div')`
  justify-content: end;
  width: 1080px;
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
                {pathname === "/employers" ? "Сотрудники > " : null}
                {pathname === "/contacts" ? "Контакты" : null}
                {pathname === "/statistics" ? "Статистика" : null}
            </BreadcrubWrapper>}
        </div>
    )
};

