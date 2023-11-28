import React from 'react';
import { BiHide } from "react-icons/bi";
import { PiStarThin } from "react-icons/pi";
import { Link } from 'react-router-dom';

const CardSummary = ({topic}) => {
const {title, img, view, rating, details, id} = topic;
    return (
        <div className="card w-96 bg-base-100 shadow-xl ">
        <figure><img src={img} alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title">
           {title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{details}</p>
          <div className='grid grid-cols-2 gap-8'>
            <div>
            <Link to={`/topic/${id}`}><button className="btn btn-accent">See Details</button></Link>
            </div>
            <div className="card-actions flex ">
            <div className="badge text-md">{view} <BiHide /></div> 
            <div className="badge text-md ">{rating} <PiStarThin /></div>
          </div>
          </div>
        </div>
      </div>
    );
};

export default CardSummary;