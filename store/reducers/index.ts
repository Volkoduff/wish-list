import { combineReducers } from "redux";
import { wishReducer } from "./wishReducer";

export const rootReducer = combineReducers({
    wish: wishReducer,
})

export type RootState = ReturnType<typeof rootReducer>
