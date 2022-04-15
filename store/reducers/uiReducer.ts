import { UIAction, UIActionTypes, UIState } from "../../types/ui";

const initialState = {
    modal: false,
    loggedIn: false,
}

export const uiReducer = (state = initialState, action: UIAction): UIState => {
    switch(action.type) {
        case UIActionTypes.CLOSE_MODAL:
            return {...initialState}
        case UIActionTypes.OPEN_MODAL:
                return {...initialState, modal: true}
        case UIActionTypes.LOG_IN:
                return {...initialState, loggedIn: true}
        case UIActionTypes.LOG_OUT:
                return {...initialState}
        default:
            return state
    }
};