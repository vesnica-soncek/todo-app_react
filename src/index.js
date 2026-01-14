import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { App } from './App';
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./Pages/Login/Login";

let container = document.getElementById("app");
let root = createRoot(container)
root.render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />} />
              <Route path="/login" element={<Login/>} />
          </Routes>
      </BrowserRouter>
  </StrictMode>

);
