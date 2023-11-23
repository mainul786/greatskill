import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext/UserContext';
import gSkill from '../../assest/images/gSkill.jpg';


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
        <div className="navbar bg-primary text-primary-content flex justify-between items-center">
            <div>
                <Link to='/' className="text-3xl">
                    <img src={gSkill} alt='' className='h-9 rounded-lg' />
                </Link>
                <Link to='/' className='text-2xl px-4'>Home</Link>
            </div>
            <div>
                {user?.uid
                    ?
                    <>
                        <span>{user?.displayName}</span>

                        <button onClick={handleSignOut}>LogOut</button>
                    </>
                    :
                    <div>
                        <Link to='/login' className='px-4 text-2xl'>Login</Link>
                        <Link to='/register' className='pr-4 text-2xl'>Register</Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default Header;