import * as actions from './constants'
import api from 'apiUtil'

export const actTheaters = () => {
    return (dispatch) => {
        dispatch(actTheatersRequest());
        api.get("QuanLyRap/LayThongTinHeThongRap")
            .then((result) => {
                dispatch(actTheatersSuccess(result.data.content))
            })
            .catch((error) => {
                dispatch(actTheatersFail(error))
            })
    }
}

const actTheatersRequest = () => {
    return {
        type: actions.THEATERS_REQUEST
    }
}

const actTheatersSuccess = (data) => {
    return {
        type: actions.THEATERS_SUCCESS,
        payload: data
    }
}

const actTheatersFail = (error) => {
    return {
        type: actions.THEATERS_FAIL,
        payload: error
    }
}
