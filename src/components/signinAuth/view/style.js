import {styled} from "@mui/system";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import * as Yup from "yup";

export const TextFieldsWrapper = styled(TextField)`
  width: 320px;
  height: 48px;
  fieldset {
    border-radius: 20px;
  }
  &:-webkit-autofill {
  transition: all 5000s easy-in-out;
`;
export const CustomButton = styled(Button)`
  height: 52px;
  width: 320px;
  background-color: #487349;
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
  margin-bottom: 70px;
  &:hover {
    background-color: #9c9c9c;
  }
`;
export const validationSchema = Yup.object({
    password: Yup.string()
        .required('Пароль обязательный')
        .min(5, 'Не правилный пароль')
        .max(10, 'Не правилный пароль'),
    phone_number: Yup.string()
        .required('Номер обязательный')
        .min(10, 'Не правилный номер')
        .max(16, 'Не правилный номер'),
});
