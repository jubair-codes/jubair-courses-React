import React from 'react';
import './Header.css';

const Header = (props) => {
    return (
        <div className='w-100 bg-success nav-cover d-flex align-items-center'>
            <nav className='navbar navbar-expand-lg navbar-light'>
                {/* <img src={props.logo} alt="logo" className='logo' /> */}
                <h2 className='text-light'>JubairCourses</h2>
                <div className='d-flex nav-btn'>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Courses</a>
                    </li>
                </div>
            </nav>
        </div>
    );
}

export default Header;
