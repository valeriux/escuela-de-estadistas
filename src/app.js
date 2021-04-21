import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./style.scss";
import "bulma";
import Home from "./components/Home";
import DogShow from "./components/DogShow";
import Nosotros from "./components/Nosotros";
import SearchDog from "./components/SearchDog";
import NavBar from "./components/Navbar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Router>
        <NavBar />
        <div>
          <Switch>
            {/* <Route path='/dogs/:id' component={DogShow} /> */}
            <Route path="/nosotros" component={Nosotros} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
