import React from 'react'
import Card from '../Card/Card';
import classes from './RelatedPlaylist.module.scss';

const RelatedPlaylist = ({ list }) => {
    return (
        <div className={classes.playlist}>
            {list?.map((item) => (
                <Card
                    key={item.link}
                    {...item}
                    size={'small'}
                />
            ))}

        </div>
    )
}

export default RelatedPlaylist