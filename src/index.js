import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import "./styles/styles.scss";
import * as serviceWorker from "./serviceWorker";

const jsx = (
  <div>
    <AppRouter />
  </div>
);

ReactDOM.render(jsx, document.getElementById("root"));

serviceWorker.unregister();
