import profileAPI from "../api/profle";
import {INews, INews2} from "../model/INews";
import {filterWithoutId, savedNewsWithoutId} from "../utils/reducers";
import {AppState, BaseThunk, InferActionsTypes} from "./store";
import {AuthActions, authActions} from "./authReducert";
import {useSelect} from "../hooks/form";
import {getSavedNewsItem} from "../selectors/selectors";
import {useSelector} from "react-redux";
import NewsAPI from "../api/news";
import {unicalizeArr} from "../utils/utils";


enum ProfileTypes {
    SAVED_NEWS = 'profileReducer/SAVED_NEWS',
    SAVED_NEWS_ID = 'profileReducer/SAVED_NEWS_ID',
    SET_LOADING_STATUS = 'profileReducer/SET_LOADING_STATUS',
    DELETE_SAVED_NEWS = 'profileReducer/DELETE_SAVED_NEWS',
    DELETE_SAVED_NEWS_ID = 'profileReducer/DELETE_SAVED_NEWS_ID',
    ADD_SAVED_NEWS = 'profileReducer/ADD_SAVED_NEWS'
}

const initialState = {
    savedNewsId: [] as string[],
    savedNews: [] as INews2[],
    isLoading: true
}

export type InitialState = typeof initialState

const profileReducer = (state = initialState, action: ProfileActions): InitialState => {
    switch (action.type) {
        case ProfileTypes.SAVED_NEWS:
            return {...state, savedNews: [...action.newsArr]}
        case ProfileTypes.ADD_SAVED_NEWS:
            return {...state, savedNews: [...state.savedNews, action.news]}
        case ProfileTypes.SAVED_NEWS_ID:
            return {...state, savedNewsId: unicalizeArr([...state.savedNewsId, ...action.newsIdArr])}
        case ProfileTypes.DELETE_SAVED_NEWS:
            return {...state, savedNews: savedNewsWithoutId(state.savedNews, action.newsId)}
        case ProfileTypes.DELETE_SAVED_NEWS_ID: {
            const res = state.savedNewsId.filter(i => i != action.newsId);
            return {...state, savedNewsId: res}
        }
        case ProfileTypes.SET_LOADING_STATUS:
            return {...state, isLoading: action.bool}

        default:
            return state;
    }
}

export const profileActions = {
    setSavedNews: (newsArr: INews2[]) => ({type: ProfileTypes.SAVED_NEWS, newsArr} as const),
    setSavedIdNews: (newsIdArr: string[]) => ({type: ProfileTypes.SAVED_NEWS_ID, newsIdArr} as const),
    setLoadingStatus: (bool: boolean) => ({type: ProfileTypes.SET_LOADING_STATUS, bool} as const),
    deleteSavedNews: (newsId: string) => ({type: ProfileTypes.DELETE_SAVED_NEWS, newsId} as const),
    deleteSavedNewsId: (newsId: string) => ({type: ProfileTypes.DELETE_SAVED_NEWS_ID, newsId} as const),
    addSavedNews: (news: INews2) => ({type: ProfileTypes.ADD_SAVED_NEWS, news} as const),
}

export const profileThunk = {
    addNews: (id: string): Thunk => async (dispatch) => {
            dispatch(profileActions.setLoadingStatus(true));
            const res = await profileAPI.addNews(id);
            if (res.status === 200) {
                dispatch(profileActions.setSavedIdNews([id]))
                const news: INews2 = await NewsAPI.getItem(Number(id))
                if (news) dispatch(profileActions.addSavedNews(news))
                else console.log('no news was found')
            }
            dispatch(profileActions.setLoadingStatus(false))
    },

    deleteNews: (id: string): Thunk => async (dispatch) => {
        try {
            const res = await profileAPI.deleteNews(id);
            if (res.status === 200) {
                dispatch(profileActions.deleteSavedNews(id));
                dispatch(profileActions.deleteSavedNewsId(id))
            }
        } catch (e) {
            console.log(e)
        }
    },


    // fetchSavedNews: (): Thunk => async (dispatch) => {
    //     try {
    //         //todo: learn about it
    //         /*
    //         чи треба тут дату і як її правильно в аксіосі відображаи
    //         де організувати обробку помилок ту чи в axios
    //         * */
    //         dispatch(profileActions.setLoadingStatus(true))
    //         const newsIdsArr = await profileAPI.getSavedNewsIds();
    //         if (newsIdsArr) {
    //             dispatch(profileActions.setSavedIdNews(newsIdsArr))
    //         }
    //         // dispatch(profileActions.setSavedNews(data));
    //         dispatch(profileActions.setLoadingStatus(false))
    //     } catch (e) {
    //         console.log(e);
    //     }
    // },
    fetchSavedNewsIds: (): Thunk => async (dispatch) => {
        try {
            const ids = await profileAPI.getSavedNewsIds();
            dispatch(profileActions.setSavedIdNews(ids.newsList))
        } catch (e) {
            console.log(e)
        }
    }
}

export type ProfileActions = InferActionsTypes<typeof profileActions>
type Thunk = BaseThunk<ProfileActions>
export default profileReducer