import React, { Component } from 'react'
import Seats from './Seats'
export default class BookingPage extends Component {
  render() {
    return (
      <div className='container'>
        <div>
          <h1 className='my-5 text-center'>MOVIE SEAT SELECTION</h1>
        </div>
        <div className="main bg-white">
          <Seats />
        </div>
      </div>
    )
  }
}
