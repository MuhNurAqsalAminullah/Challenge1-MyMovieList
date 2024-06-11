import React from "react";
import { Route, Routes } from "react-router-dom";
import { ProtectRouteOutlet } from "./PrivateRoute";
import Layout from "../layout";
import Home from "../page/Home";
import Detail from "../page/Detail";
import Login from "../page/Login";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<ProtectRouteOutlet />}>
          <Route path="/beranda" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="detail/:id" element={<Detail />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default Router;
