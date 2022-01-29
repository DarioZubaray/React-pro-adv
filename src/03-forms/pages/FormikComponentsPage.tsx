import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikComponentsPage = () => {

    return (
        <div>
            <h1>Formik Components</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={ (values) => console.log(values) }
                validationSchema={ Yup.object({
                    firstName: Yup.string()
                                    .max(15, 'Debe de tener 15 caracteres o menos')
                                    .required('Requerido'),
                    lastName: Yup.string()
                                    .max(10, 'Debe de tener 10 caracteres como máximo')
                                    .required('Requerido'),
                    email: Yup.string().email('El correo no es válido').required('Requerido'),
                    jobType: Yup.string()
                                .notOneOf(['ir-junior'], 'Esta opción no está habilitada')
                                .required('Requerido'),
                    term: Yup.boolean().oneOf([true], 'Debe de aceptar las condiciones'),
                })}
            >
                {
                    () => (
                        <Form noValidate>

                            <label htmlFor='firstName'>First Name</label>
                            <Field name="firstName" type="text" />
                            <ErrorMessage name="firstName" component="span" />

                            <label htmlFor='lastName'>Lat Name</label>
                            <Field name="lastName" type="text" />
                            <ErrorMessage name="lastName" component="span"/>

                            <label htmlFor='email'>Email</label>
                            <Field name="email" type="email" />
                            <ErrorMessage name="email" component="span"/>

                            <label htmlFor='jobType'>Job Type</label>
                            <Field name="jobType" as="select">
                                <option value="">Pick up an option</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT Senior</option>
                                <option value="it-junior">IT Junio</option>
                            </Field>
                            <ErrorMessage name="jobType" component="span"/>

                            <label>
                                <Field name="terms" type="checkbox"  />
                                Terms and conditions
                            </label>
                            <ErrorMessage name="terms" component="span"/>

                            <button type="submit">Submit</button>

                        </Form>
                    )
                }

            </Formik>
        </div>
    );
};
