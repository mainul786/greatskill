import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext/UserContext';

const Home = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h1>Home component: {user?.displayName}</h1>
        </div>
    );
};

export default Home;