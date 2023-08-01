import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default class MovieItem extends Component {
  render() {
    const { movie } = this.props;
    return (
      <Link to={`/detail-page/${movie.maPhim}`}  className="col-3">
        <div className="card text-center my-2">
        
        {/* Card Overlay Container */}
        <div className="card-overlay-container">
        </div>
        
        {/* Card Image */}
          <img className="card-img-top" src={movie.hinhAnh} alt={movie.tenPhim} />

          {/* Card Body */}
          <div className='card-body'>
            <h5 className="card-title">{movie.tenPhim}</h5>
            <p className="card-text">{movie.moTa}</p>
            <Link to={`/detail-page/${movie.maPhim}`} className="btn btn-danger">
              Detail
            </Link>
          </div>

        </div>
      </Link>
    );
  }
}
