import { ResourceStore } from "i18next";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./nav";

export default () => (
  <BrowserRouter>
    <React.Fragment>
      <Routes>
        {routes.map((route) => (
          <Route
            exact={route.exact}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </React.Fragment>
  </BrowserRouter>
);
