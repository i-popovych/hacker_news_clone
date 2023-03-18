import axios, {AxiosResponse} from "axios";
import {INews, INews2} from "../model/INews";
import {calculatePaginationIndex} from "../utils/utils";

export const instanse = axios.create({
    baseURL: 'http://localhost:5000/api/',
})

export const hn = axios.create({
    baseURL: 'https://hacker-news.firebaseio.com/v0/'
})

interface newsList {
    items: INews2[],
    totalCount: number
}

const NewsAPI = {
    //todo typing it
    getAllNewsIds: async (type: string) => {
        const res = await hn.get<number[]>(`${type}.json`, {
            params: {
                print: 'pretty'
            }
        });
        return res.data;
    },
    getNews: async (page: number = 1, limit: number = 10, type: string = 'topstories', totalCount = 100): Promise<newsList> => {
        let newsIdsArr: number[];
        switch (type) {
            case 'topstories':
                newsIdsArr = await NewsAPI.getAllNewsIds(type);
                break;
        }
        let [a, b] = calculatePaginationIndex(page, limit, newsIdsArr!.length)
        newsIdsArr = newsIdsArr!.slice(a, b)
        let res2: INews2[] = await Promise.all(
            newsIdsArr!.map(async (i, index) => {
                let temp = await NewsAPI.getItem(i)
                temp.id = String(temp.id)
                temp.index = a + index + 1;
                return temp;
            })
        )
        return {items: res2, totalCount};


        // const res = await instanse.get<newsList>('news', {
        //     params: {
        //         page, limit,
        //     },
        // });
        // return res.data;
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

