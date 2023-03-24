import React, {createContext, Dispatch, useContext, useEffect, useMemo, useState} from 'react';
import {useSelector} from "react-redux";
import {getSavedNews, getSavedNewsId, getSavedNewsLength} from "../selectors/profile";
import NewsList from "../components/NewsList/NewsList";
import {useSearch} from "../hooks/form";
import PaginationUI from "../common/Pagination/PaginationUI";
import SavedNewsForm from "../components/SavedNewsForm/SavedNewsForm";
import {calculatePaginationIndex, sortByStr} from "../utils/utils";
import {AppState} from "../redux/store";
import NewsProfileItem from "../components/NewsList/NewsProfileItem";
import {INews2} from "../model/INews";
import NewsAPI from "../api/news";
import Search from "../components/Search/Search";
import news from "../api/news";
import profileAPI from "../api/profle";
import {useActions} from "../hooks/useActions";

const onSearch = (arr: INews2[], callback: any) => (searchInp: string) => {
    const res = arr.filter(i => i.title.toLowerCase().includes(searchInp.toLowerCase()));
    callback(res)
}

const onDeleteFromState =
    (arr: INews2[], updateNews: Dispatch<INews2[]>) => (id: string) =>  {
    const newsArr = arr.filter(i => i.id !== id)
    updateNews(newsArr)
}

export const ProfileContext = createContext(null as any)

const Profile = () => {
    const {profileActions} = useActions()
    let [newsList, setNewsList] = useState([] as INews2[])
    let [newsSearchedList, setNewsSearchedList] = useState([] as INews2[]);
    const [searchInp, setSearchInp] = useSearch(onSearch(newsList, setNewsSearchedList));
    //
    // const [totalNews, setTotalNews] = useState(null as number | null)
    // const [page, setPage] = useState('1');
    // const [limit, setLimit] = useState(5);

    // useEffect(() => {
    //     setTotalNews(newsList.length)
    // }, [newsList])


    // let newsListIds = useSelector((state: AppState) => getSavedNews(state, +page, +limit, searchInp));
    let newsListIds = useSelector(getSavedNewsId);

    // useEffect(() => {
    //     let [a, b] = calculatePaginationIndex(+page, limit, newsListIds.length)
    //     const getNews = async () => {
    //         let temp = await Promise.all(newsListIds.map(async (i, index) => {
    //             if (a >= index && index <= b) return await NewsAPI.getItem(Number(i))
    //             return null
    //         }))
    //
    //         newsList = temp.filter(i => i !== null) as INews2[]
    //
    //         setNewsList(newsList)
    //
    //     }
    //     getNews()
    // }, [page, limit])

    useEffect(() => {
        const getNews = async () => {
            let result = await Promise.all(newsListIds.map(async (i, index) => {
                return await NewsAPI.getItem(Number(i))
            }))

            if(result.filter(Boolean).length) setNewsList(result)
        }
        getNews()
    }, [])

    useEffect(() => {
        console.log(searchInp)
    }, [searchInp])

    // useMemo(() => {
    //     if (filter) newsList = sortByStr(newsList, filter);
    // }, [filter])


    return (
        <ProfileContext.Provider value={onDeleteFromState(newsList, setNewsList)}>
            <div>
                <Search setSearchInp={setSearchInp} searchInp={searchInp}/>
                {searchInp
                    ? <NewsList newsList={newsSearchedList} ChildrenItem={NewsProfileItem}/>
                    :
                    <NewsList newsList={newsList} ChildrenItem={NewsProfileItem}/>
                }
                {/*{!searchInp && totalNews &&*/}
                {/*    <PaginationUI onChangePage={setPage} limit={Number(limit)} countItems={totalNews} currentPage={+page}/>}*/}
            </div>
        </ProfileContext.Provider>
    );
};

export default Profile;