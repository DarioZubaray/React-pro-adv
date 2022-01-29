import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

const initialValues = {
    name: '',
    email: '',
    password1: '',
    password2: ''
}
const validationSchema = () => {
    return Yup.object({
        name: Yup.string()
                 .min(2, 'El nombre debe ser mayor a 2 letras')
                 .max(15, 'El nombre no debe ser mayor a 15 letras')
                 .required('Requerido'),
        email: Yup.string()
                  .email('Revise el formato del correo')
                  .required('Requerido'),
        password1: Yup.string()
                      .min(6, 'La contraseña debe ser mayor a 6 caracteres')
                      .required('Requerido'),
        password2: Yup.string()
                      .min(6, 'La contraseña debe ser mayor a 6 caracteres')
                      .required('Requerido')
                      .oneOf([Yup.ref('password1')], 'Las contraseñas no coinciden')
    })
}
export const RegisterFormikPage = () => {


    return (
        <div>
            <h1>Formik Register Page</h1>

            <Formik
                initialValues={ initialValues }
                onSubmit={ (values) => console.log(values) }
                validationSchema={ validationSchema }
            >
                {
                    ({ resetForm }) => (
                        <Form noValidate>
                            <Field name="name" type="text" placeholder="Name"/>
                            <ErrorMessage name="name" component="span" />

                            <Field name="email" type="email" placeholder="Email"/>
                            <ErrorMessage name="email" component="span" />

                            <Field name="password1" type="password" placeholder="Password"/>
                            <ErrorMessage name="password1" component="span" />

                            <Field name="password2" type="password" placeholder="Repeat password"/>
                            <ErrorMessage name="password2" component="span" />

                            <button type="submit">Register</button>
                            <button onClick={ () => resetForm() }>Reset</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    );
};
