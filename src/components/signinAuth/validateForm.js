import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  first_name: Yup.string().required('Имя обязательный'),
  last_name: Yup.string().required('Фамилия обязательный'),
  phone_number: Yup.string()
    .required('Номер обязательный')
    .min(9, 'Не правилный номер')
    .max(14, 'Не правилный номер'),
  role: Yup.string().required('Роль обязательный'),
  password: Yup.string()
    .required('Пароль обязательный')
    .min(6, 'Небезопасный пароль'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Пароль не совпадает')
    .required('Потверждение обязательный'),
});

