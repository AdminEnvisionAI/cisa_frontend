import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/layout/Layout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Course from "./pages/course/Course";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="courses" element={<Course />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
