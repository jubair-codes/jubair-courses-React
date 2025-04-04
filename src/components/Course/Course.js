import React from 'react';
import './Course.css';

const Course = (props) => {
    const { name, img, features, price } = props.data;
    
    return (
            <div className='col-5'>
            {/* each courses */}
            <div className="p-0 bg-light rounded m-3 border course">
                <div className='w-100 img-cover rounded' style={{
                    backgroundImage: `url(${img})`
                }}></div>
                <div className='p-3'>
                    <h4>{name}</h4>
                    <h6>
                        <li>{features[0]}</li>
                        <li>{features[1]}</li>
                        <li>{features[2]}</li>
                    </h6>
                </div>
                <h3 className='text-center'>${price}</h3>
                <button 
                    className="w-100 mt-2 rounded" 
                    onClick={() => {props.enrollHandler(props.data)}}>
                        Enroll Now
                </button>
            </div>
            </div>
    );
}

export default Course;
