import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import formJson from '../data/custom-form.json';
import { MySelect, MyTextInput } from '../components';

const initialValues: { [key: string] : any } = {};
const requeridFields: { [key: string] : any } = {};

for (const input of formJson) {
    initialValues[input.name] = input.value;

    if ( !input.validations ) continue;

    let schema = Yup.string()
    for (const rule of input.validations) {
        if ( rule.type === 'requerid') {
            schema = schema.required( rule.description );
        }

        if ( rule.type === 'minLength') {
            schema = schema.min((rule as any).value, rule.description );
        }

        if ( rule.type === 'email') {
            schema = schema.email( rule.description );
        }
    }

    requeridFields[input.name] = schema;
}

const validationSchema = Yup.object({ ... requeridFields });

export const DynamicFormsPage = () => {
    return (
        <div>
            <h1>Dynamic Form</h1>

            <Formik
                initialValues={ initialValues }
                validationSchema= { validationSchema }
                onSubmit={(value) => console.log(value) }
            >
                {
                    (formik) => (
                        <Form noValidate>
                            <h1>Hola juli</h1>

                            {
                                formJson.map( ({type, name, placeholder, label, options}) => {

                                    if (type === 'input' || type === 'email' || type === 'password') {
                                        return <MyTextInput
                                                    key={ name }
                                                    name={ name }
                                                    label={ label }
                                                    type={ type as any }
                                                    placeholder={placeholder} />
                                    } else if ( type === 'select') {
                                        return <MySelect
                                                    key={ name }
                                                    name={ name }
                                                    label={ label }
                                        >
                                            <option value="">Select an option</option>
                                            {
                                                options?.map( opt => <option key={ opt.value } value={ opt.value }>{ opt.label }</option>)
                                            }
                                        </MySelect>
                                    }

                                    return <span>Type: { type } no es soportado</span>
                                })
                            }
                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    );
};
