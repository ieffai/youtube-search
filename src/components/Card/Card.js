import React, { memo } from 'react'
import classes from './Card.module.scss';
import { useNavigate } from 'react-router-dom'
import { VIDEO_ROUTE } from '../../routes/routesConsts';

const Card = (props) => {
    const navigate = useNavigate();

    const navigateHandler = () => {
        const id = props.link.split('=')[1];
        const route = VIDEO_ROUTE + '/' + id;
        navigate(route)
    }

    return (
        <div className={classes.card}>
            <div
                className={classes.card__video}
                onClick={navigateHandler}>
                VIDEO
            </div>
            <div className={classes.card__details}>
                <div onClick={navigateHandler}>{props.name}</div>
                <div>{props.likes}</div>
                <div>{props.dislikes}</div>
                <div>{props.views}</div>
            </div>

        </div>
    )
}

export default memo(Card)