import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div className='my-5'>
                <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
                    <div className="container">
                        <NavLink className="navbar-brand" to="/">
                            LOGO
                        </NavLink>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) => isActive ? "my-active nav-link" : "nav-link"} to="/" >Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) => isActive ? "my-active nav-link" : "nav-link"} to="/about-page">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) => isActive ? "my-active nav-link" : "nav-link"} to="/list-movie-page">List Movie</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) => isActive ? "my-active nav-link" : "nav-link"} to="/booking-page">Booking</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
