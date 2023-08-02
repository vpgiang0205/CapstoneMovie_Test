import * as actions from './constants'
import api from 'apiUtil'

export const actTheatersItem = (id) => {
    return (dispatch) => {
        dispatch(actTheatersItemRequest());
        api.get(`QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${id}`)
            .then((result) => {
                console.log(result.data.content)
                dispatch(actTheatersItemSuccess(result.data.content))
            })
            .catch((error) => {
                dispatch(actTheatersItemFail(error))
            })
    }
}

const actTheatersItemRequest = () => {
    return {
        type: actions.THEATERS_ITEM_REQUEST
    }
}

const actTheatersItemSuccess = (data) => {
    return {
        type: actions.THEATERS_ITEM_SUCCESS,
        payload: data
    }
}

const actTheatersItemFail = (error) => {
    return {
        type: actions.THEATERS_ITEM_FAIL,
        payload: error
    }
}
