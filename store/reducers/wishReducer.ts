import { Reducer } from "redux";
import Wish from "../../models/wish";
import { WishAction, WishState, WishActionTypes } from "../../types/wish";

const initialState = {
    wishes: [],
    loading: false,
    adding: false,
    deleting: false,
    error: null,
}

export const wishReducer: Reducer<WishState, WishAction> = (state = initialState, action: WishAction): WishState => {
    switch (action.type) {
        case WishActionTypes.FETCH_WISHES:
            return { ...initialState, loading: true }

        case WishActionTypes.FETCH_WISHES_SUCCESS:
            return { ...initialState, wishes: action.payload }

        case WishActionTypes.FETCH_WISHES_ERROR:
            return { ...initialState, error: action.payload, wishes: state.wishes }

        case WishActionTypes.ADD_WISH:
            return { ...initialState, loading: true, wishes: state.wishes }

        case WishActionTypes.ADD_WISH_SUCCESS:
            return { ...initialState, wishes: [action.payload, ...state.wishes] }

        case WishActionTypes.REMOVE_WISH:
            return { ...initialState, loading: true, wishes: state.wishes }

        case WishActionTypes.REMOVE_WISH_SUCCESS:
            return { ...initialState, loading: false, wishes: state.wishes.filter((wish: Wish) => wish.id !== action.payload)}

        default:
            return state
    }
};