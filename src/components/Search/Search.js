import React, { memo, useState } from 'react'
import { SEARCH_PLACEHOLDER } from '../../utils/consts';
import classes from './Search.module.scss';
import { SEARCH_ICON } from '../../utils/images';


const Search = () => {
    const [value, setValue] = useState('')

    const searchHandler = (e) => {
        setValue(e.target.value)
    }

    const clickHandler = () => {
        alert('click')
    }

    return (
        <div className={classes.search}>
            <input
                className={classes.search__input}
                type="text"
                placeholder={SEARCH_PLACEHOLDER}
                onChange={searchHandler}
                value={value}
            />
            <button
                className={classes.button}
                onClick={clickHandler}
            >
                <img src={SEARCH_ICON} alt="Search button" />
            </button>
        </div>
    )
}

export default memo(Search)