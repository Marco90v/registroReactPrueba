import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Menu from "./components/menu";
import Lista from "./components/lista";

function App() {
  return (
    <div>
      <Menu />
      <Router>
        <Route path="/" component={Lista} />
        {/* <Route path="/Nuevo" component={Nuevo} /> */}
      </Router>
      {/* <Lista /> */}
    </div>
  );
}

export default App;
