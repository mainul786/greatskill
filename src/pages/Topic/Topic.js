import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Topic = () => {
    const topic = useLoaderData();

    const { id, title, details, img } = topic;
    console.log(topic)
    return (
        <div className="card card-side bg-base-100 shadow-xl m-6">
            <figure><img src={img} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{details}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
};

export default Topic;