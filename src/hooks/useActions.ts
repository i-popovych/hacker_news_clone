import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {authActions, authThunk} from "../redux/authReducert";

export const useActions = () => {
    const dispatch = useDispatch();
    return {
        authActions: bindActionCreators(authActions, dispatch),
        authThunk: bindActionCreators(authThunk, dispatch)
    }
}