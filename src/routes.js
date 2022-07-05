import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import LandPage from "./Pages/LandPage/LandPage";
import MapPage from "./Pages/Map/Map";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MapPage/>} path="/map" />
        <Route element={<LandPage/>} exact path="/" />
        <Route path="*" element={<LandPage to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;