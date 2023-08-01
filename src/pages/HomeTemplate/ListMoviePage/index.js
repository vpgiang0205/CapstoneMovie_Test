import React, { Component } from 'react'

import MovieItem from './MovieItem'

import { actFetchListMovie } from './duck/actions'
import { connect } from 'react-redux'


class ListMoviePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // check khoan thoi gian pending
      loading: false,
      data: null,
      error: null,
    }
  }
  componentDidMount() {
    this.props.fetchListMovie()
  }
  renderListMovie = () => {
    const { data, loading } = this.props;

    if (loading) return <div>loading....</div>

    return data?.map((movie) => {
      return <MovieItem key={movie.maPhim} movie={movie} />
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.renderListMovie()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.listMovieReducer.loading,
    data: state.listMovieReducer.data,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    // listMovieRequest: () => {
    //   dispatch(actListMovieRequest())
    // },

    // listMovieSuccess: (data) => {
    //   dispatch(actListMovieSuccess(data))
    // },

    // listMovieFail: (error) => {
    //   dispatch(actListMovieFail(error))
    // }

    fetchListMovie: () => {
      dispatch(actFetchListMovie())
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListMoviePage)