import "babel-polyfill";
import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../client/App";
import { StaticRouter } from "react-router-dom";
import StyleContext from "isomorphic-style-loader/StyleContext";
import favicon from "../images/favicon.svg";

const PORT = 3000;

const server = express();
server.use(express.static("public"));

server.get("*", (req, res) => {
  const css = new Set(); // CSS for all rendered React components
  const insertCss = (...styles) =>
    styles.forEach((style) => css.add(style._getCss()));
  const html = renderToString(
    <StyleContext.Provider value={{ insertCss }}>
      <StaticRouter location={req.url} context={{}}>
        <App />
      </StaticRouter>
    </StyleContext.Provider>
  );
  res.send(`
        <htmL>
            <head>
                <title>happy broiler</title>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <script src="/bundle.js" defer></script>
                <link rel="icon" type="image/svg+xml" href=${favicon}>
                <style>${[...css].join("")}</style>
            </head>
            <body>
                <div id="root">
                    ${html}
                </div>
            </body>
        </htmL>
    `);
});

async function start() {
  server.listen(PORT, () => {
    console.log(`server started on http://localhost:${PORT}`);
  });
}

start();
