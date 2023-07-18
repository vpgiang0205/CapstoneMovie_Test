import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './_components/Navbar/Navbar'
import './index.css'

export default class HomeTemplate extends Component {
  render() {
    return (
      <div>
        {/* bo dinh tuyen */}
        <Navbar />
        <Outlet />
      </div>
    )
  }
}
