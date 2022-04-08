import { Dispatch } from "redux"
import { SendWishData, WishAction, WishActionTypes } from "../../types/wish";

export const fetchWishes = () => {
    return async (dispatch: Dispatch<WishAction>) => {
        try {
            dispatch({ type: WishActionTypes.FETCH_WISHES });
            const response = await fetch('api/wishes');
            const result = await response.json();
            dispatch({
                type: WishActionTypes.FETCH_WISHES_SUCCESS,
                payload: result.wishes
            })
        } catch (e) {
            dispatch({ 
                type: WishActionTypes.FETCH_WISHES_ERROR, 
                payload: 'Произошла ошибка при зазрузке списка' 
            })
        }
    }
}

export const removeWish = (id: string) => {
    return async (dispatch: Dispatch<WishAction>) => {
        try {
            dispatch({ type: WishActionTypes.REMOVE_WISH });
            const response = await fetch('api/delete-wish', {
                method: "DELETE",
                body: id,
            })
            const { deleteItemId } = await response.json();
            dispatch({
                type: WishActionTypes.REMOVE_WISH_SUCCESS,
                payload: deleteItemId
            })
        } catch (e) {
            dispatch({ 
                type: WishActionTypes.FETCH_WISHES_ERROR, 
                payload: 'Произошла ошибка при удалении' 
            })
        }
    }
}

export const addWish = (data: SendWishData) => {
    return async (dispatch: Dispatch<WishAction>) => {
        try {
            dispatch({ type: WishActionTypes.ADD_WISH });
            const {title, category, description, date} = data;
            const response = await fetch('api/new-wish', {
                method: "POST",
                body: JSON.stringify(data),
                headers: {'Content-type': 'application/json'}
            })
            const result = await response.json();
            dispatch({
                type: WishActionTypes.ADD_WISH_SUCCESS,
                payload: data
            })
        } catch (e) {
            dispatch({ 
                type: WishActionTypes.FETCH_WISHES_ERROR, 
                payload: 'Произошла ошибка при добавлении' 
            })
        }
    }
}


