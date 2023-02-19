import {useDispatch, useSelector} from "react-redux";
import {addNews} from "../redux/profileReducer";
import {getSavedNewsId} from "../selectors/profile";

export const WithSendButton = Children => {
    const dispatch = useDispatch();
    const savedNewsId = useSelector(getSavedNewsId);
    const onAddNewsClick = id => {
        dispatch(addNews(id));
    }

    return props => {
        return <Children {...props} addNews={onAddNewsClick} savedNewsId={savedNewsId}/>
    }
}