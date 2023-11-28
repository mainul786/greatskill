import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext/UserContext';
import { Link, useLoaderData } from 'react-router-dom';
import CardSummary from '../CardSummary/CardSummary';

const Home = () => {
    const { user } = useContext(AuthContext);
    const courses = useLoaderData();
    console.log(courses)
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-6 ml-4'>
        
            {
                courses.map(course=><CardSummary
                key={course.id}
                topic={course}
                ></CardSummary>)
            }
           
        </div>
    );
};

export default Home;