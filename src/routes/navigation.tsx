import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { ShoppingPage } from '../02-components-patterns/pages/ShoppingPage';

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
                            <NavLink to="/shopping" className={ markIfActive }>Shopping</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={ markIfActive }>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/users" className={ markIfActive }>Users</NavLink>
                        </li>
                    </ul>
                </nav>

            <Routes>
                <Route path="/about" element={ <About /> } />
                <Route path="/users" element={ <h1>Users</h1> } />
                <Route path="/shopping" element={ <ShoppingPage /> } />

                <Route path="/*" element={ <Navigate to="/shopping" replace /> } />
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