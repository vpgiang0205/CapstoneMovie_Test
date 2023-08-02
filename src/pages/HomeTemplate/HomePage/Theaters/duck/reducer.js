import * as actions from './constants'

const initialState = {
    loading: false,
    data: null,
    error: null,
}

const theatersReducer = (state = initialState, action) => {
    switch (action.type) {

        case actions.THEATERS_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }

        }

        case actions.THEATERS_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state }

        }

        case actions.THEATERS_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }

        }

        default:
            return { ...state }
    }
}

export default theatersReducer