import React, { Component } from 'react'
import Seats from './Seats'
export default class ListMoviePage extends Component {
  render() {
    return (
      <div className='container' >Listmovie
        <div>
          <h1 className='mb-5 text-center text-white'>MOVIE SEAT SELECTION</h1>
        </div>
        <div className="main bg-white">
          <Seats />
        </div>
      </div>
    )
  }
}
