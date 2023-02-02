export const checkAuth = state => {
    return state.auth.isAuth
}

export const checkInitialize = state => state.auth.isInitial

export const getUserName = state => state.auth.currentUser.username
export const getCurrentUser = state => state.auth.currentUser