import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import InternshipPage from "./Components/InternshipPage";
import Home from "./Components/Home";
import SoloPage from "./Components/SoloPage";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/internship" element={<InternshipPage />} />
      <Route exact path="/solo" element={<SoloPage />} />
    </Routes>
  </BrowserRouter>
);
