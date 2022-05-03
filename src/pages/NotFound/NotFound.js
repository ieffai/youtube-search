import React from 'react'
import { NEW_SEARCH_MSG, NOT_FOUND_MSG } from '../../utils/consts'

const NotFound = () => {
    return (
        <div className='notFound'>
            <span>{NOT_FOUND_MSG}</span>
            <span>{NEW_SEARCH_MSG}</span>
        </div>
    )
}

export default NotFound