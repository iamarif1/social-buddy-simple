import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import About from "./component/About/About";
import Home from "./component/Home/Home";
import PostDetail from "./component/PostDetail/PostDetail";

function App() {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/home">Home2</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
             <Home/>
            </Route>
            <Route path="/about">
             <About></About>
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/post/:id">
              <PostDetail/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
