import React, { memo } from 'react'
import classes from './CardList.module.scss';
import Card from '../../components/Card/Card';
const CardList = ({ data }) => {
    return (
        <div className={classes.cardlist}>
            {data.map((item) => (
                <Card
                    key={item.link}
                    {...item}
                    size={'big'}
                />
            ))}

        </div>
    )
}

export default memo(CardList)