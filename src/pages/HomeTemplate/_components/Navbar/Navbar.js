import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="nav justify-content-center">
                    <NavLink className={({ isActive }) => isActive ? "my-active nav-link" : "nav-link"} to="" >Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "my-active nav-link" : "nav-link"} to="/about-page">About</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "my-active nav-link" : "nav-link"} to="/list-movie-page">List Movie</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "my-active nav-link" : "nav-link"} to="/booking-page">Booking</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "my-active nav-link" : "nav-link"} to="/hooking-page">Hooking</NavLink>
                </nav>
            </div>
        )
    }
}
