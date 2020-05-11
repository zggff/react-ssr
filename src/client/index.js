import React from "react";
import { hydrate } from "react-dom";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";
import StyleContext from "isomorphic-style-loader/StyleContext";

const insertCss = (...styles) => {
  const removeCss = styles.map((style) => style._insertCss());
  return () => removeCss.forEach((dispose) => dispose());
};

hydrate(
  <StyleContext.Provider value={{ insertCss }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StyleContext.Provider>,
  document.getElementById("root")
);
