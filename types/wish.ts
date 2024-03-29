import Wish from "../models/wish";

interface FetchWisheAction {
    type: WishActionTypes.FETCH_WISHES,
}

interface RemoveWishAction {
    type: WishActionTypes.REMOVE_WISH,
}

interface RemoveWishSuccessAction {
    type: WishActionTypes.REMOVE_WISH_SUCCESS,
    payload: string;
}

interface AfterRemoveWishSuccessAction {
    type: WishActionTypes.AFTER_REMOVE_WISH_SUCCESS,
    payload: string;
}

interface AddWishAction {
    type: WishActionTypes.ADD_WISH,
}

interface AddWishSuccessAction {
    type: WishActionTypes.ADD_WISH_SUCCESS,
    payload: Wish,
}

interface FetchWisheSuccessAction {
    type: WishActionTypes.FETCH_WISHES_SUCCESS,
    payload: Wish[],
}
interface OpenNewWishModal {
    type: WishActionTypes.OPEN_NEW_WISH_MODAL,
}

interface CloseNewWishModal {
    type: WishActionTypes.CLOSE_NEW_WISH_MODAL,
}
interface FetchWisheErrorAction {
    type: WishActionTypes.FETCH_WISHES_ERROR,
    payload: string;
}
export interface SendWishData {
    title: string;
    category: string;
    description: string;
}

export enum WishActionTypes {
    FETCH_WISHES = "FETCH_WISHES",
    ADD_WISH = "ADD_WISH",
    ADD_WISH_SUCCESS = "ADD_WISH_SUCCESS",
    OPEN_NEW_WISH_MODAL = "OPEN_NEW_WISH_MODAL",
    CLOSE_NEW_WISH_MODAL = "CLOSE_NEW_WISH_MODAL",
    REMOVE_WISH = "REMOVE_WISH",
    REMOVE_WISH_SUCCESS = "REMOVE_WISH_SUCCESS",
    AFTER_REMOVE_WISH_SUCCESS = "AFTER_REMOVE_WISH_SUCCESS",
    FETCH_WISHES_SUCCESS = "FETCH_WISHES_SUCCESS",
    FETCH_WISHES_ERROR = "FETCH_WISHES_ERROR",
}

export interface WishState {
    wishes: Wish[],
    loading: boolean,
    adding: boolean,
    newWishModal: boolean,
    deleting: boolean,
    actualWishes: boolean,
    deletedId: null | string,
    error: null | string,
}

export type WishAction = FetchWisheAction 
| FetchWisheErrorAction | AddWishSuccessAction 
| AfterRemoveWishSuccessAction | FetchWisheSuccessAction 
| RemoveWishAction | RemoveWishSuccessAction | OpenNewWishModal | CloseNewWishModal
| AddWishAction;
