import * as Yup from 'yup';
// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const validationSchema = Yup.object().shape({
  first_name: Yup.string().required('Имя обязателный'),
  last_name: Yup.string().required('Фамилия обязателный'),
  phone_number: Yup.string()
    .required('Номер обязателный')
    .min(9, 'Не правилный номер')
    .max(14, 'Не правилный номер'),
  role: Yup.string().required('Роль обязателный'),
  // salary: Yup.number().required('Зарплата обязателный'),
  password: Yup.string()
    .required('Пароль обязателный')
    .min(6, 'Небезопасный пароль'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Пароль не совпадает')
    .required('Потверждение обязателный'),
});

