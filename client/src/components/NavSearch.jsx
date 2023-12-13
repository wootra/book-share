import PropTypes from 'prop-types';
import { Checkbox, Input, Menu } from 'semantic-ui-react';
import styles from './NavSearch.module.css';

const NavSearch = ({ isSearchable }) => {
    const onChecked = (e, { name }) => {
        console.log(name);
    };
    return (
        isSearchable && (
            <div className={styles.searchBar}>
                <Menu.Item>
                    <Input
                        // transparent
                        icon={{ name: 'search', link: false }}
                        placeholder='Search books...'
                    />
                </Menu.Item>
                <div className={`${styles.searchDrawer} flex gap-4 flex-wrap`}>
                    <Checkbox
                        name='title'
                        toggle
                        label='Title'
                        onChange={onChecked}
                    />
                    <Checkbox
                        name='author'
                        toggle
                        label='Author'
                        onChange={onChecked}
                    />
                    <Checkbox
                        name='owner'
                        toggle
                        label='Owner'
                        onChange={onChecked}
                    />
                </div>
            </div>
        )
    );
};

NavSearch.propTypes = {
    isSearchable: PropTypes.bool,
};

export default NavSearch;
