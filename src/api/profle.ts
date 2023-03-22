import {instanse} from "./news";
import {INews, INews2} from "../model/INews";


const profileAPI = {
    addNews: async (newsId: string) => {
        return await instanse.post<{newsId: string}>('add_news', {newsId}, {
            headers: {authorization: `Barer ${localStorage.getItem('token')}`}
        });
    },
    deleteNews: async (newsId: string) => {
        return await instanse.delete(`delete_news?newsId=${newsId}`, {
            headers: {authorization: `Barer ${localStorage.getItem('token')}`}
        });
    },
    getSavedNewsIds: async () => {
        const res = await instanse.get<string[]>('saved-news', {
            headers: {authorization: `Barer ${localStorage.getItem('token')}`}
        })
        return res.data
    }
}

export default profileAPI