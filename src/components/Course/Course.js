import React from 'react';
import './Course.css';

const Course = (props) => {
    console.log(props.data);
    const { name, img, features } = props.data;
    console.log(features);
    
    return (
            <div className='col-5'>
            {/* each courses */}
            <div class="p-0 bg-light rounded m-2 border course">
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
                <button className="w-100 mt-2 rounded">Enroll Now</button>
            </div>
            </div>
    );
}

export default Course;
