import AppRouter from "./components/AppRouter/AppRouter";
import Search from "./components/Search/Search";
import './styles/styles.scss';

function App() {
  return (
    <div className="app">
      <Search />
      <AppRouter />
    </div>
  );
}

export default App;
