import React, { Component } from 'react';
import './style.css'
import { Link } from 'react-router-dom';
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
            <Link to = {`/detail-page/${movie.maPhim}`} className='btn btn-success'>Detail</Link>
          </div>
        </div>
      </div>
    );
  }
}
