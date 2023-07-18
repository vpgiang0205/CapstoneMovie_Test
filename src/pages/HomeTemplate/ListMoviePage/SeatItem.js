import React, { Component } from 'react';
import { connect } from 'react-redux';

class SeatItem extends Component {
    handleOnChangeCheckBox = (event) => {
        const isChecked = event.target.checked;
        const { seat, selectSeat, removeSeat } = this.props;
        if (isChecked) {

            selectSeat(seat, isChecked);
        }
        else {
            removeSeat(seat.num);
        }

    };

    render() {
        const { seat, index } = this.props;
        return (
            <input
                type="checkbox"
                className="custom-checkbox"
                defaultValue={seat.num}
                key={index}
                onChange={this.handleOnChangeCheckBox}
            />
        );
    }
}

// Dispatch to Reducer
const mapDispatchToProps = (dispatch) => {
    return {
        selectSeat: (seat, isChecked) => {
            const action = {
                type: 'selectSeat',
                payload: { seat, isChecked },
            };
            dispatch(action);
        },
        removeSeat: (seat) => {
            const action = {
                type: 'removeSeat',
                payload: seat,
            };
            dispatch(action)
        }
    };
};

export default connect(null, mapDispatchToProps)(SeatItem);
