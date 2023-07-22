import {combineReducers} from "redux"
import seatReducer from './seatReducer'
import listMovieReducer from "../pages/HomeTemplate/ListMoviePage/duck/reducer";
const rootReducer = combineReducers({
    // child Reducer
    seatReducer,
    listMovieReducer,
});

export default rootReducer;