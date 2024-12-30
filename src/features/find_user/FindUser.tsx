import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router";
import { searchNick } from "../../app/storage/searchNickSlice";
import { CiSearch } from "react-icons/ci";
import styles from "../../app/styles/search/style.module.css";

export const FindUser=()=>{
    const [searchVal, setSearchVal]=useState<string|number>('');
    const [searchParams, setSearchParams]=useSearchParams();
    const searchingNick=searchParams.get('nick');
    const dispatch=useDispatch();

    useEffect(()=>{
        setSearchParams({ nick: searchVal.toString() });
    }, [searchVal]);

    useEffect(()=>{
        dispatch(searchNick(searchingNick));
    }, [searchingNick]);

    return(
        <div className={styles.searchContainer}>
            <CiSearch className={styles.searchIcon} />
            <input type="search" onChange={e=>setSearchVal(e.target.value)} placeholder="Find person, group..." />
        </div>
    );
}