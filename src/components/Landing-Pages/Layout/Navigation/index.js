import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () =>{
    return(
        <>
            <h1>Navigation</h1>
            <div>
                <Link to="/">
                    <li>home</li>
                </Link>
                <Link to="/about">
                    <li>About</li>
                </Link>
                <Link to="/offers">
                    <li>Offers</li>
                </Link>
                <Link to="/top-course">
                    <li>Top Course</li>
                </Link>
                <Link to="/faq">
                    <li>FAQ</li>
                </Link>
                <Link to="/testimonials">
                    <li>Testimonials</li>
                </Link>
            </div>
        </>
    )
}

export default Navigation;