import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CardSummary from '../CardSummary/CardSummary';

const Courses = () => {
    const topics = useLoaderData();
   
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-6 ml-4'>
            {
                topics.map(topic =><CardSummary key = {topic._id}
                topic = {topic}
                ></CardSummary>)
            }
        </div>
    );
};

export default Courses;