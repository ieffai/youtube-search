import React from 'react';
import classes from './VideoPlayer.module.scss';


const VideoPlayer = ({ path }) => {
    const id = path?.split('=')[1];
    return (
        <div className={classes.player}>
            <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${id}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
            </iframe>
            <div>some name<span> likes 9999</span></div>
        </div>
    )
}

export default VideoPlayer