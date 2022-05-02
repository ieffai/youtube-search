import React from 'react'
import { useSelector } from 'react-redux';
import { getInitialSongsSelector } from '../../redux/app/selectors';
import CardList from '../../components/CardList/CardList'

const Home = () => {
    const initialSongs = useSelector(getInitialSongsSelector);
    return (
        <div className='page'>
            <CardList data={initialSongs} />
        </div>
    )
}

export default Home