export const getLoadingStatus = state => state.profile.isLoading
export const getSavedNews = (state, page, limit, search = null) => {
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

export const getSavedNewsLength = state => state.profile.savedNews.length
export const getSavedNewsId = state => state.profile.savedNewsId

export const getLoadingNews = state => state.profile.loadingSavedNewsId