import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionsCreator} from "../redux/actionsCreator";
import {profileActions, profileThunk} from "../redux/profileReducer";
import {newsActions, newsThunk} from "../redux/newsReducer";
// import {authActions, authThunk} from "../redux/authReducert";


export const useActions = () => {
    const dispatch = useDispatch();
    return {
        authActions: bindActionCreators(actionsCreator.authActions, dispatch),
        authThunk: bindActionCreators(actionsCreator.authThunk, dispatch),

        profileActions: bindActionCreators(profileActions, dispatch),
        profileThunk: bindActionCreators(profileThunk, dispatch),

        newsActions: bindActionCreators(newsActions, dispatch),
        newsThunk: bindActionCreators(newsThunk, dispatch),
    }
}