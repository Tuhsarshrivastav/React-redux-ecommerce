import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import store from "./Store/";
import Details from "./components/Details";
function App() {
  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <Nav />
          <Route path="/" exact component={Home} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/details/:id" exact component={Details} />
        </Provider>
      </Router>
    </div>
  );
}

export default App;
