import axios from "axios";
import {INews} from "../model/INews";
import {calculatePaginationIndex} from "../utils/utils";

export const localhost = axios.create({
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
    getAllNewsIds: async (type: 'topstories' | 'newstories') => {
        const res = await hn.get<number[]>(`${type}.json`, {
            params: {
                print: 'pretty'
            }
        });
        return res.data;
    },
    getNews: async (page: number = 1, limit: number = 10, type: 'topstories' | 'newstories' = 'topstories'): Promise<newsList> => {
        let newsIdsArr: number[]  = await NewsAPI.getAllNewsIds(type);
        const len = newsIdsArr.length
        let [a, b] = calculatePaginationIndex(page, limit, newsIdsArr!.length)
        newsIdsArr = newsIdsArr!.slice(a, b)
        let res2: INews[] = await Promise.all(
            newsIdsArr!.map(async (i, index) => {
                let temp = await NewsAPI.getItem(i)
                temp.id = String(temp.id)
                temp.index = a + index + 1;
                return temp;
            })
        )
        return {items: res2, totalCount: len};

        // const res = await instanse.get<newsList>('news', {
        //     params: {
        //         page, limit,
        //     },
        // });
        // return res.data;
    },
    getItem: async (id: number) => {
        const res = await hn.get<INews>(`item/${id}.json`, {
            params: {
                print: 'pretty'
            }
        })
        return res.data;
    }
};

export default NewsAPI;

