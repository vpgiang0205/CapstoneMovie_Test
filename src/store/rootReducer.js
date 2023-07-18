import {combineReducers} from "redux"
import seatReducer from './seatReducer'

const rootReducer = combineReducers({
    // child Reducer
    seatReducer,
});

export default rootReducer;