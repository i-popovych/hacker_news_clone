export const getLoadingStatus = state => state.profile.isLoading
export const getSavedNews = (state, str = '') => state.profile.savedNews.filter(i => i.title.includes(str))
export const getSavedNewsId = state => state.profile.savedNewsId

export const getLoadingNews = state => state.profile.loadingSavedNewsId