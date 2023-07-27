import * as ActionTypes from "./constants"
import api from '../../../../apiUtil'


export const actAddUser = (user) => {
    return (dispath) => {
        dispath(actAddUserRequest())

        api.post("/QuanLyNguoiDung/ThemNguoiDung", user)
            .then((result) => {
                console.log(result.data);                
            })
            .catch((error) => {
                dispath(actAddUserFail(error))
            })
    }

}

const actAddUserRequest = () => {
    return {
        type: ActionTypes.ADD_USER_REQUEST,
    }
}

const actAddUserSuccess = (data) => {
    return {
        type: ActionTypes.ADD_USER_SUCCESS,
        payload: data
    }
}

const actAddUserFail = (error) => {
    return {
        type: ActionTypes.ADD_USER_FAIL,
        payload: error
    }
}