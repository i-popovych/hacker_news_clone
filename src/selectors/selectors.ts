import {AppState} from "../redux/store";

export const getNewsList = (state: AppState) => state.news.newsArr
export const getSavedNewsItem  = (state: AppState, id: string) => state.news.newsArr.find(i => i.id === id)

export const getSearchingNews = (state: AppState) => state.news.searchNewsArr

export const getSearchingStatus = (state: AppState) => state.news.isSearching
export const getLoadingStatus = (state: AppState) => state.news.isLoading

export const getCurrentNewsData = (state: AppState) => state.news.currentNewsData
export const getTotalCount = (state: AppState) => state.news.totalCount