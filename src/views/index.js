import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Setting from "./Setting";

export default () => (
  <BrowserRouter>
    <React.Fragment>
      <Routes>
        <Route exact path="/setting" element={<Setting />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </React.Fragment>
  </BrowserRouter>
);
