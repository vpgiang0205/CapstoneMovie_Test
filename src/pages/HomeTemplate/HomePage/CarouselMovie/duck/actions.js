import * as actions from './constants'
import api from 'apiUtil'

export const actCarouselMovie = () => {
    return (dispatch) => {
        dispatch(actRequestCM) 
        api.get("QuanLyPhim/LayDanhSachPhim?maNhom=GP03")

        .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actSuccessCM(result.data.content))
                }
            })
            .catch((error) => {
                dispatch(actFailCM(error))
            })
    }
}

const actRequestCM = () => {
    return {
        type : actions.CAROUSEL_MOVIE_REQUEST
    }
}

const actSuccessCM = (data) => {
    return {
        type : actions.CAROUSEL_MOVIE_SUCCESS,
        payload : data
    }
}

const actFailCM = (error) => {
    return {
        type : actions.CAROUSEL_MOVIE_FAIL,
        payload : error
    }
}