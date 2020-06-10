import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import "./styles/styles.scss";
import * as serviceWorker from "./serviceWorker";
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
const history = createBrowserHistory();

const jsx = (
  <Router history={history}>
    <AppRouter />
  </Router>
);

ReactDOM.render(jsx, document.getElementById("root"));

serviceWorker.unregister();
