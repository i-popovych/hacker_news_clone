import axios from "axios";
import {INews, INews2} from "../model/INews";
import {calculatePaginationIndex} from "../utils/utils";

export const instanse = axios.create({
    baseURL: 'http://localhost:5000/api/',
})

export const hn = axios.create({
    baseURL: 'https://hacker-news.firebaseio.com/v0/'
})

interface newsList {
    items: INews[],
    totalCount: number
}

const NewsAPI = {
    //todo typing it
    getAllNewNewsIds: async () => {
        const res = await hn.get<number[]>('newstories.json', {
            params: {
                print: 'pretty'
            }
        });
        return res.data;
    },
    getNews: async (page: number = 1, limit: number = 10, type: string = 'new') => {
        let newsIdsArr: number[];
        switch (type) {
            case 'new':
                newsIdsArr = await NewsAPI.getAllNewNewsIds();
                break;
        }
        const [a, b] = calculatePaginationIndex(page, limit, newsIdsArr!.length)
        newsIdsArr = newsIdsArr!.slice(a, b)
        let res2 = await Promise.all(
            newsIdsArr!.map(i => {
                return NewsAPI.getItem(i)
            })
        )
        console.log(res2)


        const res = await instanse.get<newsList>('news', {
            params: {
                page, limit,
            },
        });
        return res.data;
    },
    getItem: async (id: number) => {
        const res = await hn.get<INews2>(`item/${id}.json`, {
            params: {
                print: 'pretty'
            }
        })

        return res.data;
    }
};

export default NewsAPI;

