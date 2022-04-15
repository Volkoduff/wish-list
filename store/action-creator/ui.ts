import { Dispatch } from "react";
import { UIAction, UIActionTypes } from "../../types/ui";

export const openModal = () => {
    return (dispatch: Dispatch<UIAction>) => {
        dispatch({ type: UIActionTypes.OPEN_MODAL });
    }
}

export const closeModal = () => {
    return (dispatch: Dispatch<UIAction>) => {
        dispatch({ type: UIActionTypes.CLOSE_MODAL });
    }
}

export const logIn = () => {
    return (dispatch: Dispatch<UIAction>) => {
        dispatch({type: UIActionTypes.LOG_IN})
    }
}

export const logOut = () => {
    return (dispatch: Dispatch<UIAction>) => {
        dispatch({type: UIActionTypes.LOG_OUT})
    }
}
