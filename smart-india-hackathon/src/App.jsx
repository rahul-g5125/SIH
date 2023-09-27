import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Profile from "./pages/Profile";
import Project from "./pages/Project";
import Home from "./pages/Home";
import Community from "./pages/Community";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/project" element={<Project />} />
          <Route path="/Community" element ={<Community />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
