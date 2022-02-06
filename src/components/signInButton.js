import * as React from 'react';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';

const btnColor = {
    500: '#9C9C9C',
    600: '#487349',
};

const CustomButtonRoot = styled('span')`
  height: 52px;
  width: 320px;
  background-color: ${btnColor[500]};
  padding: 14px 130px;
  border-radius: 20px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  margintop: 110px;
  &:hover {
    background-color: ${btnColor[600]};
  }
`;

export function CustomButton(props) {
    return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}

