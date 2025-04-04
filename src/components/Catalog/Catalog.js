import React, { useState } from 'react';
import './Catalog.css';
import Course from '../Course/Course.js'
import Cart from '../Cart/Cart.js'

const Catalog = (props) => {
    const courses = props.data;
    const [cart, setCart] = useState([]);
    function enrollHandler(course) {
        const newCart = [...cart, course];
        console.log(newCart);
        setCart(newCart);
    }
    
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
                                key={course.key}
                                enrollHandler={enrollHandler}
                            ></Course>)
                        }
                    </div>
                    {/* sidebar */}
                    <div className='catalog-sidebar'>
                        <Cart cart={cart}></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Catalog;
