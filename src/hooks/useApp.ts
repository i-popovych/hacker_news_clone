import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getUserName} from "../selectors/auth";
import {useActions} from "./useActions";


export const useInitialize = () => {
    const {profileThunk} = useActions();
    const currentUsername = useSelector(getUserName)
    const [isInitialize, setIsInitialize] = useState(false);

    const {authThunk} = useActions();
    useEffect(() => {
        console.log('initialize')
        const fetchData = async () => {
            await authThunk.checkAuth()
            await profileThunk.fetchSavedNews()
            setIsInitialize(true);
        }
        fetchData();
    }, [currentUsername])
    return isInitialize;
}