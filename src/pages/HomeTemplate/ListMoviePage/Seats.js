import React, { Component } from 'react';
import { connect } from 'react-redux';
import SeatItem from './SeatItem';
import './Seats.css';

class Seats extends Component {
  handleRemoveSeat = (index) => {
    const { selectedSeats } = this.props;
    const seatNumber = selectedSeats[index].num;
    this.props.removeSeat(seatNumber);

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      if (checkbox.value === seatNumber) {
        checkbox.checked = false;
      }
    })
  };


  calculateTotalPrice = () => {
    const { selectedSeats } = this.props; // Update to use Redux state
    let totalPrice = 0;
    selectedSeats.forEach((seat) => {
      totalPrice += seat.price;
    });
    return totalPrice;
  };

  renderListSeats = () => {
    const { listSeat } = this.props;

    return listSeat?.map((item, index) => {
      if (item.column) {
        return (
          <tr key={index}>
            <td>{item.column}</td>

            {item.ListSeat.map((seat, index) => {
              return (
                <td key={index}>
                  <SeatItem seat={seat} />
                </td>
              );
            })}
          </tr>
        );
      }
      return null; // Add this to handle the missing return statement
    });
  };
  renderSelectedSeats = () => {
    const { selectedSeats } = this.props;
    
    return selectedSeats.map((seat, index) => (
      <tr key={index}>
        <td>{seat.num}</td>
        <td>{seat.price}</td>
        <td>
          <button type="button" className="btn btn-danger my-2" onClick={() => this.handleRemoveSeat(index)}>Remove</button>
        </td>
      </tr>
    ));
  };


  render() {
    const total = this.calculateTotalPrice();
    return (
      <div className="main__Content">
        <p id="notification" />
        <div className="text-center row container">

          <div className=' col-6'>
            <div className="screen bg-warning text-center">
              <h2 className="">Screen this way</h2>
            </div>

            <table id="seatsBlock" className=" w-100 my-3">
              <tbody>
                {this.renderListSeats()}
              </tbody>
            </table>

          </div>

          <div className="col-6">
            <table className="w-100 text-center">
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
                {this.renderSelectedSeats()}
                <tr className="bg-warning ">
                  <td className='py-2'>Total</td>
                  <td></td>
                  <td>{total}</td>
                </tr>
                <tr>
                  <td colSpan="3">
                    <button
                      className="m-3 btn btn-dark w-75"
                    >
                      Purchase
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <ul className="d-flex">
          <li className="smallBox greenBox">Selected Seat</li>
          <li className="smallBox redBox">Reserved Seat</li>
          <li className="smallBox emptyBox">Empty Seat</li>
        </ul>
      </div>
    );
  }
}

// Dispatch to Reducer
const mapDispatchToProps = (dispatch) => {
  return {
    removeSeat: (seat) => {
      const action = {
        type: 'removeSeat',
        payload: seat,
      };
      dispatch(action)
    }
  };
};


const mapStateToProps = (state) => {
  return {
    listSeat: state.seatReducer.listSeat,
    selectedSeats: state.seatReducer.selectedSeats,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Seats);