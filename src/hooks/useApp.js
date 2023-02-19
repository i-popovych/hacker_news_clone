import {useDispatch, useSelector} from "react-redux";
import {fetchSavedNews} from "../redux/profileReducer";
import {useEffect, useState} from "react";
import {getUserName} from "../selectors/auth";
import {useActions} from "./useActions";


export const useInitialize = () => {
    const dispatch = useDispatch();
    const currentUsername = useSelector(getUserName)
    const [isInitialize, setIsInitialize] = useState(false);

    const {authThunk} = useActions();
    useEffect(() => {
        console.log('initialize')
        const fetchData = async () => {
            await authThunk.checkAuth()
            await dispatch(fetchSavedNews())
            setIsInitialize(true);
        }
        fetchData();
    }, [currentUsername])
    return isInitialize;
}