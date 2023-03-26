import {INews} from "../model/INews";

export const filterNews = (value: string, arr: INews[]): INews[] => {
    type NewsSortKey = 'score' | 'index';
    switch (value) {
        case 'score': //for numbers
            return arr.sort((a, b) => {
                if ( a[value as NewsSortKey] < b[value as NewsSortKey] ) return 1
                else if ( a[value as NewsSortKey] > b[value as NewsSortKey] ) return -1
                return 0
            })
            break
        case 'index':
            return arr.sort((a, b) => {
                return a[value as NewsSortKey] - b[value as NewsSortKey]
            })
            break;
        default: //for strings
            return arr.sort((a: any, b: any) => {
                return a[value].localeCompare(b[value])
            })
    }
}