
interface OpenModalAction {
    type: UIActionTypes.OPEN_MODAL,
}

interface CloseModalAction {
    type: UIActionTypes.CLOSE_MODAL,
}

interface LoginAction {
    type: UIActionTypes.CLOSE_MODAL,
}

interface LogoutAction {
    type: UIActionTypes.CLOSE_MODAL,
}


export enum UIActionTypes {
    OPEN_MODAL = "OPEN_MODAL",
    CLOSE_MODAL = "CLOSE_MODAL",
}

export interface UIState {
    modal: boolean,
}

export type UIAction = OpenModalAction | CloseModalAction
