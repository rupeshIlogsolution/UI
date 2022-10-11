import React from 'react'
import './Navbar.css'

export const Navbar = () => {
    return (
        <div className='nav_main_div'>
             <div className='brand_name_smd'>
                <h4>NAVBAR</h4>
            </div>  
            <div className='nav_content'>
           
            <div className='brand_name'>
                <h4>NAVBAR</h4>
            </div>
            <ul>
                <li>
                    <a>Home</a>
                </li>
                <li>
                    <a>About</a>
                </li>
                <li>
                    <a>Logout</a>
                </li>
            </ul>
            </div>
        </div>
    )
}
