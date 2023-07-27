import React, { Component } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default class AdminTemplate extends Component {
  render() {
    if (!localStorage.getItem("UserAdmin")){
      return <Navigate replace to = "/auth" />
    }
    return (
      <div>
      <Outlet/>
      </div>
    )
  }
}
