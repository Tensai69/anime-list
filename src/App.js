import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import MainPage from "./components/MainPage";
import CurrentAnime from "./components/CurrentAnime";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/">
          <Redirect to="/page/1" />
        </Route>
        <Route exact path={`/page/:page/:search?`} component={MainPage} />
        <Route path={`/anime/:id`} component={CurrentAnime} />
      </Router>
    </>
  );
}

export default App;
