import {combineReducers} from "redux"
import seatReducer from './seatReducer'
import listMovieReducer from "../pages/HomeTemplate/ListMoviePage/duck/reducer";
import detailMovieReducer from "../pages/HomeTemplate/DetailMoviePage/duck/reducer";

const rootReducer = combineReducers({
    // child Reducer
    seatReducer,
    listMovieReducer,
    detailMovieReducer
});

export default rootReducer;