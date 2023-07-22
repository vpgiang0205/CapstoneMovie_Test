import React, { Component } from 'react';
import './style.css'
export default class MovieItem extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="col-md-3">
        <div className="card">
          <img className="card-img-top" src={movie.hinhAnh} alt={movie.tenPhim} />
          <div className="card-body">
            <h5 className="card-title">{movie.tenPhim}</h5>
            <p className="card-text">Text</p>
          </div>
        </div>
      </div>
    );
  }
}
