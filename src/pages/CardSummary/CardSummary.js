import React from 'react';

const CardSummary = ({topic}) => {
const {title, img, view, rating, details} = topic;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title">
           {title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{details}</p>
          <div className="card-actions justify-end flex">
            <div className="badge badge-outline">{view}</div> 
            <div className="badge badge-outline">{rating}</div>
          </div>
        </div>
      </div>
    );
};

export default CardSummary;