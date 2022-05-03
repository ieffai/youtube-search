import React, { memo } from 'react'
import useNavigateHandler from '../../../utils/hooks/useNavigateHandler';
import classes from './CardDetails.module.scss';

const CardDetails = (props) => {

    // just to show another spread =)
    const video = { ...props }

    const rootClasses = [classes.details];

    if (props.size === 'small') {
        rootClasses.push(classes.details_s);
    }
    const navHandler = useNavigateHandler(props.videoId, video);

    return (
        <div className={rootClasses.join(' ')}>
            <h3 onClick={navHandler}>{props.name}</h3>
            <div className={classes.details__info}>Likes: {props.likes}</div>
            <div className={classes.details__info}>Dislikes: {props.dislikes}</div>
            <div className={classes.details__info}>Views: {props.views}</div>
        </div>
    )
}

export default memo(CardDetails)