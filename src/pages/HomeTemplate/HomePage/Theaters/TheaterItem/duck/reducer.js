import * as actions from './constants'

const initialState = {
    loading: false,
    data: null,
    error: null,
}

const theatersItemReducer = (state = initialState, action) => {
    switch (action.type) {

        case actions.THEATERS_ITEM_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }

        }

        case actions.THEATERS_ITEM_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state }

        }

        case actions.THEATERS_ITEM_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }

        }

        default:
            return { ...state }
    }
}

export default theatersItemReducer