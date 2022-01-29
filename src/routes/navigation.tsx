import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';

import { 
    RegisterPage,
    FormikBasicPage,
    FormikYupPage,
    FormikComponentsPage,
    FormikAbstractationPage
} from '../03-forms/pages';

import logo from '../assets/logo.svg';

export const Navigation = () => {

    const markIfActive = ({isActive}: {isActive: boolean}): string => {
        return isActive ? 'nav-active' : ''
    }

    return (
        <BrowserRouter>
            <div className='main-layout'>
                <nav>
                    <img src={logo} alt="React logo" />
                    <ul>
                        <li>
                            <NavLink to="/register" className={ markIfActive }>Register</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formikBasic" className={ markIfActive }>Formik BasicPage</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formikYup" className={ markIfActive }>Formik Yup</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formikComponents" className={ markIfActive }>Formik Components</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formikAbstractation" className={ markIfActive }>Formik Abstractation</NavLink>
                        </li>
                    </ul>
                </nav>

            <Routes>
                <Route path="/register" element={ <RegisterPage /> } />
                <Route path="/formikBasic" element={ <FormikBasicPage /> } />
                <Route path="/formikYup" element={ <FormikYupPage /> } />
                <Route path="/formikComponents" element={ <FormikComponentsPage /> } />
                <Route path="/formikAbstractation" element={ <FormikAbstractationPage /> } />

                <Route path="/*" element={ <Navigate to="/register" replace /> } />
            </Routes>
            </div>
        </BrowserRouter>
    );
};

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <hr />
        </div>
    )
}