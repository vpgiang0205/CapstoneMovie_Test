import {combineReducers} from "redux"
import seatReducer from './seatReducer'
import listMovieReducer from "pages/HomeTemplate/ListMoviePage/duck/reducer";
import detailMovieReducer from "pages/HomeTemplate/DetailMoviePage/duck/reducer";
import authReducer from "pages/AdminTemplate/AuthPage/duck/reducer";
import addUserReducer from "pages/AdminTemplate/AddUser/duck/reducer";
import carouselMovieReducer from "pages/HomeTemplate/HomePage/CarouselMovie/duck/reducer";
import theatersReducer from "pages/HomeTemplate/HomePage/Theaters/duck/reducer";
import theatersItemReducer from "pages/HomeTemplate/HomePage/Theaters/TheaterItem/duck/reducer";

const rootReducer = combineReducers({
    // child Reducer
    seatReducer,
    listMovieReducer,
    detailMovieReducer,
    authReducer,
    addUserReducer,
    carouselMovieReducer,
    theatersReducer,
    theatersItemReducer
});

export default rootReducer;