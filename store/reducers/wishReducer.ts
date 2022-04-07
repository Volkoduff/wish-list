import { WishAction, WishState, WishActionTypes } from "../../types/wish";

const initialState = {
    wishes: [],
    loading: false,
    modal: false,
    error: null,
}

export const wishReducer = (state = initialState, action: WishAction): WishState => {
    switch(action.type) {
        case WishActionTypes.FETCH_WISHES:
            return {loading: true, error: null, modal: false, wishes: []}
        case WishActionTypes.FETCH_WISHES_SUCCESS:
            return {loading: false, error: null, modal: false, wishes: action.payload}
        case WishActionTypes.FETCH_WISHES_ERROR:
            return {loading: false, error: action.payload, modal: false, wishes: []}
        case WishActionTypes.ADD_WISHE:
            return {loading: true, error: null, modal: true, wishes: []}
        case WishActionTypes.FETCH_WISHES:
            return {loading: true, error: null, modal: true, wishes: []}
        default:
            return state
    }
};