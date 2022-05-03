import React from 'react'
import { useSelector } from 'react-redux'
import RelatedPlaylist from '../../components/RelatedPlaylist/RelatedPlaylist'
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'
import { getVideoSelector } from '../../redux/app/selectors'

const Video = () => {
    const video = useSelector(getVideoSelector);

    return (
        <div className='linkedPage'>
            <VideoPlayer path={video.link} />
            <RelatedPlaylist list={video.relatedPlaylists} />
        </div>
    )
}

export default Video