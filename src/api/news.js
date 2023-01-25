import axios from "axios";

const instanse = axios.create({
    baseURL: 'http://localhost:5000/api/',
})

export const NewsAPI = {
    getAllNews: () => {
        return instanse.get('news');
    },
    getNews: async (page, limit) => {
        return (await instanse.get('news', {
            params: {
                page, limit
            }
        })).data;
    }
}