import {AppState} from "../redux/store";

export const getLoadingStatus = (state: AppState) => state.profile.isLoading
export const getSavedNews = (state: AppState, page: number, limit: number, search: string | null = null) => {
    console.log('get saved news')
    if(search) return state.profile.savedNews.filter(i => i.title.includes(search))
    limit = +limit;
    const news = [];
    page = (page - 1) * limit;
    limit = page + limit > state.profile.savedNews.length ? state.profile.savedNews.length : page + limit;
    for (let i = page; i < limit; i++) {
        news.push(state.profile.savedNews[i]);
    }
    return news;
}


export const getSavedNewsLength = (state: AppState) => state.profile.savedNews.length
export const getSavedNewsId = (state: AppState) => state.profile.savedNewsId

// export const getLoadingNews = (state: AppState) => state.profile.loadingSavedNewsId