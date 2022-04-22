import { Dispatch } from "react";
import { UIAction, UIActionTypes } from "../../types/ui";

export const logIn = () => {
    return (dispatch: Dispatch<UIAction>) => {
        localStorage.setItem('loggedIn', '1')
        dispatch({type: UIActionTypes.LOG_IN})
    }
}

export const logOut = () => {
    return (dispatch: Dispatch<UIAction>) => {
        localStorage.removeItem('loggedIn')
        dispatch({type: UIActionTypes.LOG_OUT})
    }
}
