import { Formik, Form, } from 'formik';
import * as Yup from 'yup';

import { MyCheckbox, MySelect, MyTextInput } from '../components';
import '../styles/styles.css';

export const FormikAbstractationPage = () => {

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
                                .notOneOf(['it-junior'], 'Esta opción no está habilitada')
                                .required('Requerido'),
                    term: Yup.boolean().oneOf([true], 'Debe de aceptar las condiciones'),
                })}
            >
                {
                    () => (
                        <Form noValidate>
                            <MyTextInput
                                label="First Name"
                                name="firstName"
                                placeholder="Ingrese su nombre"
                            />
                            <MyTextInput
                                label="Last Name"
                                name="lastName"
                                placeholder="Ingrese su apellido"
                            />
                            <MyTextInput
                                label="E-mail"
                                name="email"
                                placeholder="Ingrese su correo electrónico"
                                type="email"
                            />

                            <MySelect label="Job Type" name="jobType" >
                                <option value="">Pick up an option</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT Senior</option>
                                <option value="it-junior">IT Junior</option>
                            </MySelect>

                            <MyCheckbox label="Terms and conditions" name="terms" />

                            <button type="submit">Submit</button>

                        </Form>
                    )
                }

            </Formik>
        </div>
    );
};
