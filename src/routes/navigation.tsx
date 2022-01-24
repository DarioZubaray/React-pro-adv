import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { routes } from './routes';

import logo from '../assets/logo.svg';
import { ListItemNavLink } from '../components/ListItemNavLink';
import { Suspense } from 'react';

export const Navigation = () => {

    return (
        <Suspense fallback={ <span>Loading...</span> }>
            <BrowserRouter>
                <div className='main-layout'>
                    <nav>
                        <img src={logo} alt="React logo" />
                        <ul>
                            {
                                routes.map(({to, name}) => (
                                    <ListItemNavLink to={to} name={name} key={ to } />
                                ))
                            }
                        </ul>
                    </nav>

                    <Routes>
                        {
                            routes.map(({ path, Component}) => (
                                <Route path={path} element={ <Component /> } key={ path }  />
                            ))
                        }

                        <Route path="/*" element={ <Navigate to={ routes[0].to  } replace /> } />
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    );
};
