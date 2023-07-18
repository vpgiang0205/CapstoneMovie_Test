import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="nav justify-content-center">
                    <NavLink className={({isActive}) => isActive? "my-active nav-link" : "nav-link"}  to="/" >Home</NavLink>
                    <NavLink className={({isActive}) => isActive? "my-active nav-link" : "nav-link"} to="/about">About</NavLink>
                    <NavLink className={({isActive}) => isActive? "my-active nav-link" : "nav-link"} to="/list-movie">List Movie</NavLink>
                </nav>
            </div>
        )
    }
}
