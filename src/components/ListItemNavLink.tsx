import { NavLink } from 'react-router-dom';

interface Props {
    to: string;
    name: string;
}

export const ListItemNavLink = ({to, name}: Props) => {

    const markIfIsActive = ({isActive}: {isActive: boolean}): string => {
        return isActive ? 'nav-active' : ''
    }

    return (
        <li>
            <NavLink
                to={ to }
                className={ markIfIsActive }
            >{ name }
            </NavLink>
        </li>
    );
};
