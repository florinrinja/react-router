import React from 'react';
import {NavLink} from 'react-router-dom'

const Navigation =() =>{
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/notre-histoire'
                activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}
            >History</NavLink>
        </div>
    )
}

export default Navigation;