import {
    ADD_USER_REQUEST,
    ADD_USER_SUCCESS,
    ADD_USER_FAIL
} from './constants'

const initialState = {
    loading: false,
    data: null,
    error: null
}

const addUserReducer = (state = initialState, action) => {
    switch (action) {
        case ADD_USER_REQUEST: {
            state.loading = true
            state.data = null
            state.error = null
            return { ...state }
        }

        case ADD_USER_SUCCESS: {
            state.loading = false
            state.data = action.payload
            state.error = null
            return {...state}
        }

        case ADD_USER_FAIL: {
            state.loading = false
            state.data = null
            state.error = action.payload
            return {...state}
        }

        default:
            return { ...state }
    }
}

export default addUserReducer