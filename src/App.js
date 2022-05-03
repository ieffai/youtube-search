import { useSelector } from "react-redux";
import AppRouter from "./components/AppRouter/AppRouter";
import Search from "./components/Search/Search";
import { NotFound } from "./pages";
import { getSongsSelector } from "./redux/app/selectors";
import './styles/styles.scss';
import { NEW_SEARCH_MSG } from "./utils/consts";

function App() {
  const songs = useSelector(getSongsSelector);
  return (
    <div className="app">
      <Search />
      {songs.length !== 3 && <span style={{ alignSelf: 'center' }}>{NEW_SEARCH_MSG}</span>}
      {!songs.length ? <NotFound /> : <AppRouter />}
    </div>
  );
}

export default App;
