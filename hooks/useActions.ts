import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as WishActionCreator from "../store/action-creator/wish";

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(WishActionCreator, dispatch)
};