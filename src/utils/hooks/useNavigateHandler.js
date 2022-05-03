import { useNavigate } from 'react-router-dom';
import { VIDEO_ROUTE } from '../../routes/routesConsts';
import { useDispatch } from 'react-redux';
import { setVideo } from '../../redux/app/slice';

export default function useNavigateHandler(id, video) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const navHandler = () => {
        const route = VIDEO_ROUTE + '/' + id;
        dispatch(setVideo(video));
        navigate(route)

    }

    return navHandler
}
