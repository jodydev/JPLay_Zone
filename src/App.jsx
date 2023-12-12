import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { GameProvider } from "./contexts/GameContext";
import AppContext from "./contexts/AppContext";
import Layout from "./components/Layout";
import DetailsPage from "./pages/DetailsPage";
import HomePage from "./pages/HomePage";
import GameSearch from "./pages/GameSearch";
import RouteNotFound from "./pages/RouteNotFound";
import LoginPage from "./auth/LoginPage";
import RegisterPage from "./auth/RegisterPage";
import useAuth from "./hooks/useAuth";
import LoggedUserRoutes from "./auth/LoggedUserRoutes";
import supabase from "./supabase/client";
import Account from "./auth/Account";
import AccountSetting from "./auth/AccountSetting";
import AllGames from "./pages/AllGames";

import "./assets/css/AppNavbar.css";
import "./assets/css/AppCarouselHero.css";
import "./assets/css/AppProducts.css";
import "./assets/css/AppCardGame.css";



export function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/searchGame" element={<GameSearch />} />
        <Route path="/allGames" element={<AllGames />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<RouteNotFound />} />

        <Route element={<LoggedUserRoutes />}>
          <Route path="/account" element={<Account />} />
          <Route path="/setting" element={<AccountSetting />} />
        </Route>
      </Routes>
    </Layout>
  );
}

function Root() {
  const userData = useAuth();

  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <AppContext.Provider value={{ session, setSession, userData }}>
      <GameProvider>
        <Router>
          <App />
        </Router>
      </GameProvider>
    </AppContext.Provider>
  );
}

export default Root;
