import {useDispatch} from "react-redux";
import {addNews} from "../redux/newsReducer";

export const WithSendButton = Children => {
    const dispatch = useDispatch();
    const onAddNewsClick = id => {
        dispatch(addNews(id));
    }

    return props => {
        return <Children {...props} addNews={onAddNewsClick}/>
    }

}