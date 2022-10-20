import React, {useState} from 'react'
import { BiSearchAlt2 } from "react-icons/bi";
import styles from './SearchItem.module.scss';

const searchItem = ({searchText, setSearchText }) => {

    const handleSearch = (e) => {
        setSearchText(e.target.value.toLowerCase());
    }
  return (
    <form className={styles.searchForms}>
        <BiSearchAlt2/>
        <input type="search" value={searchText} onChange={handleSearch} className={styles.searchInput} placeholder='Filter by Name, ISBN or Category'  />
    </form>
  )
}

export default searchItem