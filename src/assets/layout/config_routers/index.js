import React from "react";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "../../../pages/Error";
import { PATHS } from "../path";
import Blog from "../../../pages/Blog";

function routerList() {
  return (
    <Routes>
      <Route path={PATHS.HOME_PAGE} element={<Blog />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default routerList;
