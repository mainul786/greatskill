import React, { createContext } from 'react';

export const AuthContext = createContext();

const UserContext = ({ children }) => {
    const user = { displayName: 'Najiya islam' }


    const auth = { user };
    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;