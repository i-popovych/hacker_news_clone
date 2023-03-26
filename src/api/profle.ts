import {localhost} from "./news";


const profileAPI = {
    addNews: async (newsId: string) => {
        return await localhost.post<{newsId: string}>('add_news', {newsId}, {
            headers: {authorization: `Barer ${localStorage.getItem('token')}`}
        });
    },
    deleteNews: async (newsId: string) => {
        return await localhost.delete(`delete_news?newsId=${newsId}`, {
            headers: {authorization: `Barer ${localStorage.getItem('token')}`}
        });
    },
    getSavedNewsIds: async () => {
        const res = await localhost.get<{newsList: string[]}>('saved-news', {
            headers: {authorization: `Barer ${localStorage.getItem('token')}`}
        })
        return res.data
    }
}

export default profileAPI