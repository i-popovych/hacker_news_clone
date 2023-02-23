import {useDispatch, useSelector} from "react-redux";
import {getSavedNewsId} from "../selectors/profile";
import {profileThunk} from "../redux/profileReducer";

export const WithSendButton = Children => {
    const dispatch = useDispatch();
    const savedNewsId = useSelector(getSavedNewsId);
    const onAddNewsClick = id => {
        dispatch(profileThunk.addNews(id));
    }

    return props => {
        return <Children {...props} addNews={onAddNewsClick} savedNewsId={savedNewsId}/>
    }
}