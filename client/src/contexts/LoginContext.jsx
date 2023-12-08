import { createContext, useContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

const LoginContext = createContext({ user: {}, setUser: () => {} });

export const LoginProvider = ({ children }) => {
    const [user, setUser] = useState({});

    const contextValue = useMemo(() => {
        return { user, setUser };
    }, [user]);

    return (
        <LoginContext.Provider value={contextValue}>
            {children}
        </LoginContext.Provider>
    );
};

export const useLoginInfo = () => {
    return useContext(LoginContext);
};

LoginProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
