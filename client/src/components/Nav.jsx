import { useLocation, useNavigate } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import styles from './Nav.module.css';
const Nav = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const pathname = location.pathname;
    const onNavClick = (e, { name }) => navigate(name);
    return (
        <Menu className={styles.nav}>
            <Menu.Item
                name='/home'
                active={pathname === '/home'}
                onClick={onNavClick}
            >
                Home
            </Menu.Item>

            <Menu.Item
                name='/rent'
                active={pathname === '/rent'}
                onClick={onNavClick}
            >
                Rent
            </Menu.Item>

            <Menu.Item
                name='/lend'
                active={pathname === '/lend'}
                onClick={onNavClick}
            >
                Lend
            </Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item
                    name='/log-in'
                    active={pathname === '/log-in'}
                    onClick={onNavClick}
                >
                    Log In
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
};

export default Nav;
