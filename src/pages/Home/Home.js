import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext/UserContext';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const { user } = useContext(AuthContext);
    const courses = useLoaderData();
    return (
        <div>
            <h1>Home component: {user?.displayName}</h1>
            <h2>Courses: {courses.length}</h2>
            {/* {
                courses.map(course=><Link>{course?.name}</Link>)
            } */}
           
        </div>
    );
};

export default Home;