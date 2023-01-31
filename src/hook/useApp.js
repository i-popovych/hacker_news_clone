import {useDispatch} from "react-redux";
import {checkAuth} from "../redux/authReducer";
import {fetchSavedNews} from "../redux/profileReducer";
import {useEffect, useState} from "react";


export const useInitialize = () => {
    const dispatch = useDispatch();
    const [isInitialize, setIsInitialize] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            await dispatch(checkAuth());
            await dispatch(fetchSavedNews())
            setIsInitialize(true);
        }
        fetchData();
    }, [])
    return isInitialize;
}