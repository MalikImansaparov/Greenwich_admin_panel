import * as Yup from 'yup';
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const validate = Yup.object({
  name: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
  // phone: Yup.number().phone('Email is invalid').required('Email is required'),
  // .matches(phoneRegExp, 'Phone number is not valid')
  phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  email: Yup.string().email('Email is invalid').required('Email is required'),
  // password: Yup.string()
  //     .matches(
  //         /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
  //         'Must be 6 Characters, One Uppercase, One Lowercase, One Number & One special Character'
  //     )
  //     .required('Password is required'),
  // confirmPassword: Yup.string()
  //     .oneOf([Yup.ref('password'), null], 'Password must match')
  //     .required('Confirm password is required'),
});










// import * as Yup from 'yup';
//
//  // const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
//
// export const validate = Yup.object({
//   name: Yup.string()
//     .max(15, 'Must be 15 characters or less')
//     .required('Required'),
//
//   number: Yup.number('Number is invalid').required('Number is required'),
//   // .matches(phoneRegExp, 'Phone number is not valid'),
//   // phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
//   email: Yup.string().email('Email is invalid').required('Email is required'),
//   password: Yup.string('Password is invalid').required('Password is required'),
//   // .matches(
//   //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
//   //   'Must be 6 Characters, One Uppercase, One Lowercase, One Number & One special Character'
//   // )
//
//   confirmPassword: Yup.string()
//     .oneOf([Yup.ref('password'), null], 'Password must match')
//     .required('Confirm password is required'),
// });
