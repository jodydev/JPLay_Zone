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

// Import dei file CSS
import "./assets/css/AppNavbar.css";
import "./assets/css/AppCarouselHero.css";
import "./assets/css/AppProducts.css";
import "./assets/css/AppCardGame.css";

// Componente principale dell'applicazione
export function App() {
  return (
    <Layout>
      {/* Configurazione delle rotte */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/searchGame" element={<GameSearch />} />
        <Route path="/allGames" element={<AllGames />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<RouteNotFound />} />

        {/* Rotte disponibili solo per gli utenti autenticati */}
        <Route element={<LoggedUserRoutes />}>
          <Route path="/account" element={<Account />} />
          <Route path="/setting" element={<AccountSetting />} />
        </Route>
      </Routes>
    </Layout>
  );
}

// Componente root dell'applicazione
function Root() {
  const userData = useAuth(); // Utilizzo del custom hook per l'autenticazione

  const [session, setSession] = useState(null);

  // Effetto per ottenere e impostare la sessione corrente
  useEffect(() => {
    // Ottiene la sessione corrente
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Ascolta i cambiamenti di autenticazione
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  // Restituisce la struttura dell'applicazione
  return (
    <AppContext.Provider value={{ session, setSession, userData }}>
      <GameProvider>
        {/* Configurazione del router principale */}
        <Router>
          <App /> {/* Componente principale dell'applicazione */}
        </Router>
      </GameProvider>
    </AppContext.Provider>
  );
}

export default Root;
