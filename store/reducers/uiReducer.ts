import { UIAction, UIActionTypes, UIState } from "../../types/ui";

const initialState = {
    modal: false,
}

export const uiReducer = (state = initialState, action: UIAction): UIState => {
    switch(action.type) {
        case UIActionTypes.CLOSE_MODAL:
            return {modal: false}
        case UIActionTypes.OPEN_MODAL:
                return {modal: true}
        default:
            return state
    }
};