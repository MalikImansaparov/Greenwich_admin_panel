import * as React from 'react';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';

const btnColor = {
    500: '#9C9C9C',
    600: '#487349',
    700: '#FFFFFF',
};

const CustomButtonRoot = styled('span')`
height: 52px;
width: 320px;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: bold;
  font-size: 0.875rem;
  background-color: ${btnColor[500]};
  padding: 14px 18px;
  border-radius: 20px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  font-family: Montserrat;
font-size: 18px;
font-weight: 600;
line-height: 24px;
text-align: center;
marginTop: 110px;
  &:hover {
    background-color: ${btnColor[600]};
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }
`;

export function CustomButton(props) {
    return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}

// export default function UnstyledButtonsSpan() {
//     return (
//         <Stack spacing={2} direction="row">
//             <CustomButton>Button</CustomButton>
//         </Stack>
//     );
// }
