import React, { memo } from 'react'
import { getThumbPath } from '../../../utils/helpers';
import useNavigateHandler from '../../../utils/hooks/useNavigateHandler';
import classes from './CardThumbnail.module.scss';

const CardThumbnail = ({ videoId, video, size }) => {
    const navHandler = useNavigateHandler(videoId, video);
    const thumbPath = getThumbPath(videoId);
    const rootClasses = [classes.thumbnail];

    if (size === 'small') {
        rootClasses.push(classes.thumbnail_s);
    }

    return (
        <div
            className={rootClasses.join(' ')}
            onClick={navHandler}>
            <img
                src={thumbPath}
                alt='video thumbnail'
                className={classes.thumbnail__img}
            />
        </div>
    )
}

export default memo(CardThumbnail)