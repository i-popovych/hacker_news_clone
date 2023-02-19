import axios from "axios";
import { News } from "./types";

export const instanse = axios.create({
    baseURL: 'http://localhost:5000/api/',
})

interface newsList {
    items: News[],
    totalCount: number
}

export const NewsAPI = {
    //todo typing it
    getAllNews: () => {
        return instanse.get('news');
    },
    getNews: async (page: number, limit: number) => {
        const res = await instanse.get<newsList>('news', {
            params: {
                page, limit,
            },
        });
        return res.data;
    },
};



