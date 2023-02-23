import {instanse} from "./news";
import {INews} from "../model/INews";


const profileAPI = {
    addNews: async (newsId: string) => {
        return await instanse.post('add_news', {newsId}, {
            headers: {authorization: `Barer ${localStorage.getItem('token')}`}
        });
    },
    deleteNews: async (newsId: string) => {
        return await instanse.delete(`delete_news?newsId=${newsId}`, {
            headers: {authorization: `Barer ${localStorage.getItem('token')}`}
        });
    },
    getSavedNews: async () => {
        const res = await instanse.get<INews[]>('saved-news', {
            headers: {authorization: `Barer ${localStorage.getItem('token')}`}
        })
        return res.data
    }
}

export default profileAPI