import moment from "moment";

export const getPagesCount = (total: number, limit: number) => Math.ceil(total / limit)

export const setArrPage = (totalPage: number) => {
    let pages = [];
    for(let i = 1; i <= totalPage; i++) pages.push(i);
    return pages;
}

//todo typing it
export const sortByStr = (arr: any[], str: string) => {
    console.log('sort')
    return arr.sort((a: any, b: any) => a[str].localeCompare(b[str]))
}

export const calculatePaginationIndex = (page: number, limit: number, length: number): [number, number] => {
    let b = page * limit;
    let a = b - limit;
    b = b > length ? length : b;
    return [a, b]
}

export const getMainPartUrl = (url: string) => {
    let temp = url.split('/')[2];
    return temp.includes('www.') ? temp.split('www.')[1] : temp;
}

export const getDateFromMill = (milliseconds: number) => {
    const currentDate = moment();
    const unixDate = moment(milliseconds);
    const diff = currentDate.diff(unixDate)
    return moment.duration(diff).humanize() + ' ago'
}

export const unicalizeArr = (arr: string[]) => Array.from( new Set(arr) )