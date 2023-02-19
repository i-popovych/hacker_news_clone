export const getPagesCount = (total, limit) => Math.ceil(total / limit)

export const setArrPage = (totalPage) => {
    let pages = [];
    for(let i = 1; i <= totalPage; i++) pages.push(i);
    return pages;
}

export const sortByStr = (arr, str) => {
    console.log('sort')
    return arr.sort((a, b) => a[str].localeCompare(b[str]))
}