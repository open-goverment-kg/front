import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./containers/home";
import InnerPage from "./containers/inner";
import Publish from "./containers/publish";
import Layout from "./layout";
import { ROUTES } from "./utils/constants";

const App = () => {
  return (
    <>
      <Routes>
        <Route path={ROUTES.MAIN} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="card/:id" element={<InnerPage />} />
          <Route path={ROUTES.PUBLISH} element={<Publish />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
