import {instanse} from "./news";

const authAPI = {
    getAuthStatus: async () => {
        try{
            const res = await instanse.get('me', {
                headers: {
                    authorization:`Barer ${localStorage.getItem('token')}`
                }
            });
            return res;
        } catch (e) {
            return false;
        }
    },

    login: async (username, password) => {
        try {
            return await instanse.post('login', {
                username, password
            })
        }
        catch (e) {
            return e
        }
    },

    registration: async (username, password) => {
        try {
            return await instanse.post('registration', {
                username, password
            })
        }
        catch (e) {
            return e
        }
    }
}

export default authAPI