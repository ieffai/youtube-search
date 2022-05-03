import React, { memo } from 'react'
import classes from './Card.module.scss';
import CardThumbnail from './CardThumbnail/CardThumbnail';
import CardDetails from './CardDetails/CardDetails';

const Card = (props) => {
    const id = props.link?.split('=')[1];
    return (
        <div className={classes.card}>
            <CardThumbnail videoId={id} video={props} size={props.size} />
            <CardDetails videoId={id} {...props} size={props.size} />
        </div>
    )
}

export default memo(Card)