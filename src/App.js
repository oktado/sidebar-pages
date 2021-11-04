import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Category } from "./Pages/Category/index";
import { Home } from "./Pages/Home/index";
import { Favourite } from "./Pages/Favourite/index";
import { Overview } from "./Pages/Overview/index";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/sidebar-pages">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/category" component={Category} />
          <Route path="/favourite" component={Favourite} />
          <Route path="/overview" component={Overview} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
