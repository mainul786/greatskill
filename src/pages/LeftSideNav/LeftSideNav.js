import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const LeftSideNav = () => {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('https://greatskill-server.vercel.app/courses')
        .then(res=> res.json()) 
        .then(data => setCourses(data))
    }, [])
   
    return (
        <div className='mr-6'>
        {
            courses.map(course =><p key={course.id}><Link  to={`/courses/${course.id}`}> {course?.name}</Link></p>)
        }
       
        </div>
    );
};

export default LeftSideNav;