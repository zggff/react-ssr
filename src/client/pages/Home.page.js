import React from "react";
import withStyles from "isomorphic-style-loader/withStyles";
import s from "./Home.page.scss";

const HomePage = () => {
  return (
    <div className="home">
      <h1>HomePage</h1>
    </div>
  );
};

export default withStyles(s)(HomePage);
