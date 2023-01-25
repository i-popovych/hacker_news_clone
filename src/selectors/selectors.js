export const getNewsList = state => state.news.newsArr

export const getSearchingNews = state => state.news.searchNewsArr

export const getSearchingStatus = state => state.news.isSearching
export const getLoadingStatus = state => state.news.isLoading

export const getCurrentNewsData = state => state.news.currentNewsData
export const getTotalCount = state => state.news.totalCount