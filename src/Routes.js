import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Repos from './pages/repos'
import Starred from "./pages/starred";

const RoutesProject = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repos" element={<Repos />} />
        <Route path="/starred" element={<Starred />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesProject;
