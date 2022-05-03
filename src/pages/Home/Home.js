import React from 'react'
import { useSelector } from 'react-redux';
import { getSongsSelector } from '../../redux/app/selectors';
import CardList from '../../components/CardList/CardList'

const Home = () => {
    const songs = useSelector(getSongsSelector);
    return (
        <div className='page'>
            <CardList data={songs} />
        </div>
    )
}

export default Home