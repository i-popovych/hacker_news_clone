import React, {createContext, Dispatch, useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {getSavedNewsId} from "../selectors/profile";
import NewsList from "../components/NewsList/NewsList";
import {useSearch} from "../hooks/form";
import NewsProfileItem from "../components/NewsList/NewsProfileItem";
import {INews} from "../models/INews";
import NewsAPI from "../api/news";
import Search from "../components/Search/Search";
import Preloader from "../components/common/Preloader/Preloader";

const onSearch = (arr: INews[], callback: any) => (searchInp: string) => {
    const res = arr.filter(i => i.title.toLowerCase().includes(searchInp.toLowerCase()));
    callback(res)
}

const onDeleteFromState =
    (arr: INews[], updateNews: Dispatch<INews[]>) => (id: string) =>  {
    const newsArr = arr.filter(i => i.id !== id)
    updateNews(newsArr)
}

export const ProfileContext = createContext(null as any)

const Profile = () => {
    let [newsList, setNewsList] = useState([] as INews[])
    let [newsSearchedList, setNewsSearchedList] = useState([] as INews[]);
    const [searchInp, setSearchInp] = useSearch(onSearch(newsList, setNewsSearchedList));
    const [isLoading, setIsLoading] = useState(true);
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
            setIsLoading(true)
            let result = await Promise.all(newsListIds.map(async (i, index) => {
                return await NewsAPI.getItem(Number(i))
            }))

            if(result.filter(Boolean).length) setNewsList(result)
            setIsLoading(false)
        }
        getNews()
    }, [])

    // useMemo(() => {
    //     if (filter) newsList = sortByStr(newsList, filter);
    // }, [filter])

    if (isLoading) return <Preloader/>
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