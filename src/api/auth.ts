import axios from "axios";
import {instanse} from "./news";
import {IUserAuth} from "../model/user";

//todo: тут інтрфейс чи тип?????
export interface UserAuthData {
    token: string
    user: IUserAuth
}


const authAPI = {
    //todo як тут правильно тип єбаний повернути щоб все світилось
    getAuthStatus: async () => {
        const res = await instanse.get<UserAuthData>('me', {
            headers: {
                authorization: `Barer ${localStorage.getItem('token')}`
            }
        })
        return res.data
    },

    login: async (username: string, password: string) => {
        const res = await instanse.post<UserAuthData>('login', {
            username, password
        })
        return res.data
    },

    registration: async (username: string, password: string) => {
        return await instanse.post('registration', {
            username, password
        })
    }
}


export default authAPI