import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () =>{
    return(
        <div style={{height:"100vh", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
            <h1>404 Page Not Found | Under Construction</h1>
            <div>   
                <Link to="/" style={{textDecoration:"none"}}>
                    <h3>Go Back</h3>
                </Link>
            </div>
            
            
        </div>
        
    )
}

export default PageNotFound;