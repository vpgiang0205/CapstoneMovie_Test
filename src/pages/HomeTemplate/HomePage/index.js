import React, { Component } from 'react'
import Banner from './Banner'
import ListMoviePage from '../ListMoviePage'
import SearchMovie from './SearchMovie'
import CarouselMovie from './CarouselMovie'
export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Banner />
        <SearchMovie />
        <CarouselMovie />
      </div>
    )
  }
}
