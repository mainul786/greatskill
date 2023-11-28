import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CardSummary from '../CardSummary/CardSummary';

const Courses = () => {
    const topics = useLoaderData();
   
    return (
        <div>
            {
                topics.map(topic =><CardSummary key = {topic._id}
                topic = {topic}
                ></CardSummary>)
            }
        </div>
    );
};

export default Courses;