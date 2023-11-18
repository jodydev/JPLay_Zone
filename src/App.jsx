import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import DetailsPage from "./pages/DetailsPage";
import HomePage from "./pages/HomePage";
import { useState } from "react";

import './assets/css/AppNavbar.css';
import './assets/css/AppCarouselHero.css';
import './assets/css/AppProducts.css';
import './assets/css/AppCardGame.css';

export function App() {


  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </Layout>
  );
}

function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default Root;

