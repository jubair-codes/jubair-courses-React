import React from 'react';
import './Catalog.css';
import Course from '../Course/Course.js'
import Cart from '../Cart/Cart.js'

const Catalog = (props) => {
    console.log(props.data);

    const courses = props.data;
    return (
        <div className='w-100'>
            <div className='w-100 p-2'>
                <h2 className='p-5'>Browse All Courses</h2>
                <div className="container w-100 catalog d-flex">
                    {/* all courses */}
                    <div className="row courses-catalog">
                        {
                            courses.map(course => <Course
                                data={course}
                            ></Course>)
                        }
                    </div>
                    {/* sidebar */}
                    <div className='catalog-sidebar'>
                        <Cart></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Catalog;
