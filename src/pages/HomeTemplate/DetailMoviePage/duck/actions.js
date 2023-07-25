import { DETAIL_MOVIE_FAIL, DETAIL_MOVIE_REQUEST, DETAIL_MOVIE_SUCCESS } from './constants'
import api from '../../../../apiUtil'

export const actFetchDetailMovie = (id) => {
    return (dispatch) => {
        dispatch(actDetailRequest())

        api.get(`QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actDetailSuccess(result.data.content))
                }
            })
            .catch((error) => {
                dispatch(actDetailFail(error))
            })
    }
}

const actDetailRequest = () => {
    return {
        type: DETAIL_MOVIE_REQUEST
    }
}
const actDetailSuccess = (data) => {
    return {
        type: DETAIL_MOVIE_SUCCESS,
        payload: data,
    }
}
const actDetailFail = (error) => {
    return {
        type: DETAIL_MOVIE_FAIL,
        payload: error
    }
} 