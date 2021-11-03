import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Category } from "./Pages/Category/index";
import { Home } from "./Pages/Home/index";
import { Favourite } from "./Pages/Favourite/index";
import { Overview } from "./Pages/Overview/index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/category" component={Category} />
          <Route exact path="/favourite" component={Favourite} />
          <Route exact path="/overview" component={Overview} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
