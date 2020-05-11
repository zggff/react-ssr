import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import { HomePage } from "./pages/Home.page";
import { TestPage } from "./pages/Test.page";
import withStyles from "isomorphic-style-loader/withStyles";
import s from "./App.scss";
import img1 from "../images/broiler2.jpg";
import img2 from "../images/happy-broiler-logo.svg";

class App extends React.Component {
  render() {
    return (
      <div className={"root"}>
        <div className="nav">
          <ul>
            <li>
              <Link to="home">home</Link>
            </li>
            <li>
              <Link to="test">test</Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="title">hello</h1>
          <img src={img1} alt="ew"></img>
          <img src={img2} alt="ew"></img>
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route path="/test" component={TestPage} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default withStyles(s)(App);
