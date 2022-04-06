interface FetchWisheAction {
    type: WishActionTypes.FETCH_WISHES,
}

interface FetchWisheSuccessAction {
    type: WishActionTypes.FETCH_WISHES_SUCCESS,
    payload: any[],
}

interface FetchWisheErrorAction {
    type: WishActionTypes.FETCH_WISHES_ERROR,
    payload: string;
}

export enum WishActionTypes {
    FETCH_WISHES = "FETCH_WISHES",
    FETCH_WISHES_SUCCESS = "FETCH_WISHES_SUCCESS",
    FETCH_WISHES_ERROR = "FETCH_WISHES_ERROR",
}

export interface WishState {
    wishes: any[],
    error: null | string,
    loading: boolean,
    modal: boolean,
}

export type WishAction = FetchWisheAction | FetchWisheErrorAction | FetchWisheSuccessAction;