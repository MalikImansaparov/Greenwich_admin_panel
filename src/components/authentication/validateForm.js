import * as Yup from 'yup';
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const validationSchema = Yup.object().shape({
        name:Yup.string()
            .required('Имя обязателный'),
        surname: Yup.string()
            .required('Пароль обязателный'),
        number: Yup.string()
            .required('Номер обязателный')
            .min(9, 'Не правилный номер')
            .max(12, 'Не правилный номер'),
        email: Yup.string()
            .required('Логин обязателный')
            .email('Электронная почта не правильный'),
        role: Yup.string()
            .required('Роль обязателный'),
        salary: Yup.number()
            .required('зарплата обязателный'),
        password: Yup.string()
            .required('Пароль обязателный')
            .min(6, 'Не правилный пароль')
            .max(10, 'Не правилный пароль'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Пароль не совпадает')
            .required('Потверждение обязателный'),
    })

