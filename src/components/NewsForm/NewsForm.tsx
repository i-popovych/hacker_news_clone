import React, {FC} from 'react';
import Search from "../Search/Search";
import SelectFilter from "../SelectFilter/SelectFilter";
import SelectLimit from "../SelectLimit/SelectLimit";
import {CurrentNewsData} from "../../redux/newsReducer";
import s from './NewsForm.module.scss'
interface Props {
    setSearchInp: (searchStr: string) => void
    searchInp: string
    currentNewsData: CurrentNewsData
    setCurrentNewsDataLimit: (limit: string) => void
    filterNews: (value: string) => void
}

const NewsForm: FC<Props> = (props) => {
    const {
        setSearchInp, searchInp, currentNewsData, setCurrentNewsDataLimit, filterNews
    } = props
    return (
        <form className={s.NewsForm}>
            <div className={s.NewsForm__search}>
                <Search setSearchInp={setSearchInp} searchInp={searchInp}/>
            </div>
            <div className={s.NewsForm__selectLimit}>
                <SelectLimit limit={currentNewsData.limit} setLimit={setCurrentNewsDataLimit}/>
            </div>
            <div className={s.NewsForm__selectFilter}><SelectFilter filterNews={filterNews}/></div>
        </form>
    );
};

export default NewsForm;