import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext/UserContext';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error));
    }

    return (
        <div>
            <Link to='/'>Home</Link>
            <> {user?.uid
                ?
                <>
                    <span>{user?.displayName}</span>
                    
                    <button onClick={handleSignOut}>LogOut</button>
                </>
                :
                <>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                </>
            }

            </>
        </div>
    );
};

export default Header;