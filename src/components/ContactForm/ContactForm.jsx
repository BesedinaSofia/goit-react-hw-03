// import React from 'react';
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import styles from './ContactForm.module.css';

// const ContactForm = ({ onSubmit }) => {
//   const initialValues = {
//     name: '',
//     number: '',
//   };

//   const validationSchema = Yup.object({
//     name: Yup.string()
//       .min(3, 'Must be at least 3 characters')
//       .max(50, 'Must be 50 characters or less')
//       .required('Required'),
//     number: Yup.string()
//       .min(7, 'Must be at least 7 characters')
//       .max(15, 'Must be 15 characters or less')
//       .required('Required'),
//   });

//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={validationSchema}
//       onSubmit={(values, { resetForm }) => {
//         onSubmit(values.name, values.number);
//         resetForm();
//       }}
//     >
//       <Form className={styles.form}>
//         <Field name="name" placeholder="Name" />
//         <ErrorMessage name="name" component="div" className={styles.error} />
//         <Field name="number" placeholder="Number" />
//         <ErrorMessage name="number" component="div" className={styles.error} />
//         <button type="submit">Add Contact</button>
//       </Form>
//     </Formik>
//   );
// };

// export default ContactForm;

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Name must be at least 3 characters')
        .max(50, 'Name must be at most 50 characters')
        .required('Name is required'),
      number: Yup.string()
        .min(7, 'Number must be at least 7 characters')
        .max(15, 'Number must be at most 15 characters')
        .required('Number is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      onSubmit(values.name, values.number);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <label htmlFor="name">Name</label>
      <input
        id="name" // Додаємо унікальний id
        name="name" // Додаємо name
        type="text"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        autoComplete="off" // Опціонально додаємо autocomplete
      />
      {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
      ) : null}

      <label htmlFor="number">Number</label>
      <input
        id="number" // Додаємо унікальний id
        name="number" // Додаємо name
        type="text"
        value={formik.values.number}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        autoComplete="off" // Опціонально додаємо autocomplete
      />
      {formik.touched.number && formik.errors.number ? (
        <div>{formik.errors.number}</div>
      ) : null}

      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
