import Wish from "../models/wish";

interface FetchWisheAction {
    type: WishActionTypes.FETCH_WISHES,
}

interface RemoveWishAction {
    type: WishActionTypes.REMOVE_WISHES,
}

interface AddWishAction {
    type: WishActionTypes.ADD_WISHE,
}
interface FetchWisheSuccessAction {
    type: WishActionTypes.FETCH_WISHES_SUCCESS,
    payload: Wish[],
}

interface FetchWisheErrorAction {
    type: WishActionTypes.FETCH_WISHES_ERROR,
    payload: string;
}

export enum WishActionTypes {
    FETCH_WISHES = "FETCH_WISHES",
    ADD_WISHE = "ADD_WISHE",
    REMOVE_WISHES = "REMOVE_WISHES",
    FETCH_WISHES_SUCCESS = "FETCH_WISHES_SUCCESS",
    FETCH_WISHES_ERROR = "FETCH_WISHES_ERROR",
}

export interface WishState {
    wishes: Wish[],
    loading: boolean,
    modal: boolean,
    error: null | string,
}

export type WishAction = FetchWisheAction
 | FetchWisheErrorAction 
 | FetchWisheSuccessAction 
 | RemoveWishAction 
 | AddWishAction;