import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

import Menu from "./components/menu";
import Lista from "./components/lista";
import Nuevo from "./components/nuevo";

function App() {
  return (
    <Provider store={store}>
      <Router >
        <Menu />
        <Route exact path="/" component={Lista} />
        <Route  path="/nuevo" component={Nuevo} />
      </Router>
    </Provider>
  );
}

export default App;
