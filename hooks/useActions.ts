import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as WishActionCreator from "../store/action-creator/wish";
import * as UIActionCreator from "../store/action-creator/ui";



export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(
        Object.assign({}, WishActionCreator, UIActionCreator),
        dispatch
    )
};