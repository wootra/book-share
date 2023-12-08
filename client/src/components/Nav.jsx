import { useLocation, useNavigate } from 'react-router-dom';
import { Dropdown, Image, Input, Menu } from 'semantic-ui-react';
import styles from './Nav.module.css';
const Nav = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const pathname = location.pathname;

    const onNavClick = (e, { name }) => navigate(name);
    const onUserInfoClick = (e, { value }) => navigate(value);
    const loginLabel = 'Songhyeon Jun';
    return (
        <Menu className={styles.nav} pointing secondary>
            <Image src='https://react.semantic-ui.com/logo.png' size='mini' />
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
                <Menu.Item>
                    <Input
                        transparent
                        icon={{ name: 'search', link: true }}
                        placeholder='Search users...'
                    />
                </Menu.Item>
                <Dropdown item icon='setting' text={loginLabel}>
                    <Dropdown.Menu className={styles.userInfo}>
                        <Dropdown.Item
                            value='/userinfo/profile'
                            content='/userinfo/profile'
                            onClick={onUserInfoClick}
                        >
                            Profile
                        </Dropdown.Item>

                        <Dropdown.Divider />
                        <Dropdown.Item>Log Out</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
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
