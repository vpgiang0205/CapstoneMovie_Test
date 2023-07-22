import React, { Component } from 'react'

import axios from 'axios'
import MovieItem from './MovieItem'

import { actListMovieRequest, actListMovieSuccess, actListMovieFail } from './duck/actions'
import { connect } from 'react-redux'
import listMovieReducer from './duck/reducer'
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
    // call API
    this.props.listMovieRequest();


    axios({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP03",
      method: "GET",
      headers: {
        TokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MCIsIkhldEhhblN0cmluZyI6IjE0LzAxLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwNTE5MDQwMDAwMCIsIm5iZiI6MTY3NzQzMDgwMCwiZXhwIjoxNzA1MzM4MDAwfQ.k7Kzay9-bYUjN7pTcMrYpgTq5Xe5U6jdvM1OUQ5L_2A"
      }
    })

      .then((result) => {
        this.props.listMovieSuccess(result.data.content)
      })

      .catch((error) => {
        this.props.listMovieFail(error)
      })
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
    listMovieRequest: () => {
      dispatch(actListMovieRequest())
    },

    listMovieSuccess: (data) => {
      dispatch(actListMovieSuccess(data))
    },

    listMovieFail: (error) => {
      dispatch(actListMovieFail(error))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListMoviePage)