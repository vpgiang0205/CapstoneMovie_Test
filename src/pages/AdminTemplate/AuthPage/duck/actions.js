import { AUTH_FAIL, AUTH_REQUEST, AUTH_SUCCESS } from "./constants"
import api from "../../../../apiUtil"

export const actAuth = (user) => {
    return (dispatch) => {
        dispatch(actAuthRequest())
            api.post(`QuanLyNguoiDung/DangNhap`,user)
            .then ((result) => {
                console.log(result.data)
            })
            .catch ((error) => {
                console.log(error)
            })
    }
} 

const actAuthRequest = () => {
    return {
        type: AUTH_REQUEST
    }
}
const actAuthSuccess = (data) => {
    return {
        type: AUTH_SUCCESS,
        payload: data
    }
}
const actAuthFail = (error) => {
    return {
        type: AUTH_FAIL,
        payload: error,
    }
}