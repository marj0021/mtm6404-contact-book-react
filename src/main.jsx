import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import Home from "./Home.jsx";
import Add from "./pages/Add.jsx";
import Edit from "./pages/Edit.jsx";
import User from "./pages/User.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="new" element={<Add />} />
        <Route path="edit/:id" element={<Edit />} />
        <Route path="user/:id" element={<User />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
