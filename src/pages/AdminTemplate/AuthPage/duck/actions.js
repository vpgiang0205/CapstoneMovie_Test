import { AUTH_FAIL, AUTH_REQUEST, AUTH_SUCCESS } from "./constants"
import api from "apiUtil"

export const actAuth = (user, navigate) => {
    return (dispatch) => {
        dispatch(actAuthRequest())
        api.post(`QuanLyNguoiDung/DangNhap`, user)
            .then((result) => {
                const user = result.data.content

                if (!(user.maLoaiNguoiDung === "QuanTri")) {
                    // Show error
                    const error = {
                        response: {
                            data: {
                                content: "Bạn không có quyền truy cập!"
                            },
                        },
                    };
                    return Promise.reject(error);
                }

                // Lưu thông tin lên reducer
                dispatch(actAuthSuccess(user))

                // Lưu trạng thái đăng nhập
                localStorage.setItem("UserAdmin", JSON.stringify(user))

                // Chuyển hướng
                navigate("/admin/dashboard", {replace: true})
            })
            .catch((error) => {
                dispatch(actAuthFail(error))
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