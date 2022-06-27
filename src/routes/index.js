import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { publicRoutes, privateRoutes } from "./routes";
import { loggedUser } from "../services/services";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {loggedUser
          ? privateRoutes.map((route, i) => (
              <Route key={i} path={route.path} element={<route.component />} />
            ))
          : publicRoutes.map((route, i) => (
              <Route key={i} path={route.path} element={<route.component />} />
            ))}
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
