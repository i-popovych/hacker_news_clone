import {instanse} from "./news";

const profileAPI = {
    addNews: async (newsId) => {
            return await instanse.post('add_news', {
                newsId
            },{
                headers: { authorization:`Barer ${localStorage.getItem('token')}` }
            });
    },
    getSavedNews: async () => {
        try {
            return await instanse.get('saved-news', {
                headers: {authorization:`Barer ${localStorage.getItem('token')}`}
            })
        } catch (e) {
            console.log(e)
        }
    }
}

export default profileAPI