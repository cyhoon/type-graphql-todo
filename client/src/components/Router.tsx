import * as React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={HomePage} />
      </div>
    </BrowserRouter>
  );
};

export default Router;
