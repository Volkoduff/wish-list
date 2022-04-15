
interface OpenModalAction {
    type: UIActionTypes.OPEN_MODAL,
}

interface CloseModalAction {
    type: UIActionTypes.CLOSE_MODAL,
}

interface LoginAction {
    type: UIActionTypes.LOG_IN,
}

interface LogoutAction {
    type: UIActionTypes.LOG_OUT,
}


export enum UIActionTypes {
    OPEN_MODAL = "OPEN_MODAL",
    CLOSE_MODAL = "CLOSE_MODAL",
    LOG_IN = "LOG_IN",
    LOG_OUT = "LOG_OUT",
}

export interface UIState {
    modal: boolean,
    loggedIn: boolean,
}

export type UIAction = OpenModalAction | CloseModalAction | LoginAction | LogoutAction
