import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

export const RegisterPage = () => {

    const {
        name,
        email,
        password1,
        password2,
        formData,
        handleOnChange,
        resetForm,
        isValidEmail
    } = useForm({
        name: 'dario',
        email: 'dario@gmail.com',
        password1: '123456',
        password2: '123456'
    });

    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
    }

    return (
        <div>
            <h1>Register Page</h1>

            <form noValidate onSubmit={ (event) => handleOnSubmit(event) }>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={ name }
                    onChange={ (event) => handleOnChange(event) }
                    className={ `${name.trim().length <= 0 && 'has-error'}` }
                />
                { name.trim().length <= 0 && <span>Este campo es obligatorio.</span> }

                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={ email }
                    onChange={ handleOnChange }
                    className={ `${!isValidEmail(email) && 'has-error'}` }
                />
                { !isValidEmail(email) && <span>Este Email no es válido.</span> }

                <input
                    type="password"
                    placeholder="Password"
                    name="password1"
                    value={ password1 }
                    onChange={ handleOnChange }
                />
                { password1.trim().length <= 0 && <span>Este campo es obligatorio.</span> }
                { password1.trim().length < 6 && password1.trim().length > 0 && <span>La contraseña tiene que tener 6 caracteres.</span> }

                <input
                    type="password"
                    placeholder="Repeat password"
                    name="password2"
                    value={ password2 }
                    onChange={ handleOnChange }
                />
                { password2.trim().length <= 0 && <span>Este campo es obligatorio.</span> }
                { password2.trim().length > 0 && password1 !== password2 && <span>Las contraseñas no coinciden.</span> }


                <button type="submit">Register</button>
                <button onClick={ resetForm }>Reset</button>
            </form>
        </div>
    );
};
