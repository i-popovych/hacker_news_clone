import {useDispatch, useSelector} from "react-redux";
import {checkAuth} from "../redux/authReducer";
import {fetchSavedNews} from "../redux/profileReducer";
import {useEffect, useState} from "react";
import {getCurrentUser, getUserName} from "../selectors/auth";


export const useInitialize = () => {
    const dispatch = useDispatch();
    const currentUsername = useSelector(state => getUserName(state))
    const [isInitialize, setIsInitialize] = useState(false);
    useEffect(() => {
        console.log('initialize')
        const fetchData = async () => {
            await dispatch(checkAuth());
            await dispatch(fetchSavedNews())
            setIsInitialize(true);
        }
        fetchData();
    }, [currentUsername])
    return isInitialize;
}