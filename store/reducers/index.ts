import { combineReducers } from "redux";
import { uiReducer } from "./uiReducer";
import { wishReducer } from "./wishReducer";

export const rootReducer = combineReducers({
    wish: wishReducer,
    ui: uiReducer
})

export type RootState = ReturnType<typeof rootReducer>
