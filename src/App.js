import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import LandingPage from "./pages/LandingPage";
import OutletPage from "./pages/OutletPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Buyer */}
        <Route path="/" element={<Layout />}>
          <Route index element={<OutletPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
