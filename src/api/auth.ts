import {localhost} from "./news";
import {IUserAuth} from "../models/user";

export interface UserAuthData {
    token: string
    user: IUserAuth
}


const authAPI = {
    getAuthStatus: async () => {
        const res = await localhost.get<UserAuthData>('me', {
            headers: {
                authorization: `Barer ${localStorage.getItem('token')}`
            }
        })
        return res.data
    },

    login: async (username: string, password: string) => {
        const res = await localhost.post<UserAuthData>('login', {
            username, password
        })
        return res.data
    },

    registration: async (username: string, password: string) => {
        return await localhost.post('registration', {
            username, password
        })
    }
}


export default authAPI