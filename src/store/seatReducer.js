import data from '../SeatData.json'

const initialState = {
    listSeat: data,
    selectedSeats: []
}
const seatReducer = (state = initialState, action) => {
    switch (action.type) {
        case "selectSeat":
            const { seat } = action.payload
            return {
                ...state,
                selectedSeats: [...state.selectedSeats, seat],
            }
        case "removeSeat":
            return {
                ...state,
                selectedSeats: state.selectedSeats.filter((seat) => seat.num !== action.payload),
            }
        default:
            return { ...state }
    }
}

export default seatReducer