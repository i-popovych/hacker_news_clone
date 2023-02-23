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