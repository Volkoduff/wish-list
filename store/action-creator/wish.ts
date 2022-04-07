import { Dispatch } from "redux"
import { WishAction, WishActionTypes } from "../../types/wish"

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

// export const removeWish = () => {
//     return async (dispatch: Dispatch<WishAction>) => {
//         try {
//             dispatch({ type: WishActionTypes.FETCH_WISHES });
//             const response = await fetch('api/wishes');
//             const result = await response.json();
//             dispatch({
//                 type: WishActionTypes.FETCH_WISHES_SUCCESS,
//                 payload: result.wishes
//             })
//         } catch (e) {
//             dispatch({ 
//                 type: WishActionTypes.FETCH_WISHES_ERROR, 
//                 payload: 'Произошла ошибка при зазрузке списка' 
//             })
//         }
//     }
// }
// export const addWish = () => {
//     return async (dispatch: Dispatch<WishAction>) => {
//         try {
//             dispatch({ type: WishActionTypes.FETCH_WISHES });
//             const response = await fetch('api/wishes');
//             const result = await response.json();
//             dispatch({
//                 type: WishActionTypes.FETCH_WISHES_SUCCESS,
//                 payload: result.wishes
//             })
//         } catch (e) {
//             dispatch({ 
//                 type: WishActionTypes.FETCH_WISHES_ERROR, 
//                 payload: 'Произошла ошибка при зазрузке списка' 
//             })
//         }
//     }
// }