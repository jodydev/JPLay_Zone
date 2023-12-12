import { useState, useEffect } from "react";
import supabase from "../supabase/client";

// Hook per la gestione dell'autenticazione
function useAuth() {
  // Stato per memorizzare i dati della sessione
  const [session, setSession] = useState(null);

  // Funzione per la registrazione di un nuovo utente
  const signUp = async (email, password) =>
    await supabase.auth.signUp(email, password);

  // Funzione per il login di un utente esistente
  const signIn = async (email, password) =>
    await supabase.auth.signInWithPassword({
      email,
      password,
    });

  // Funzione per il logout dell'utente attuale
  const signOut = async () => await supabase.auth.signOut();

  // Effetto per ottenere la sessione dell'utente e registrare un ascoltatore per i cambiamenti di autenticazione
  useEffect(() => {
    // Ottiene la sessione attuale dell'utente
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Registra un ascoltatore per i cambiamenti di autenticazione
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    // Annulla l'iscrizione all'ascoltatore quando il componente viene smontato
    return () => subscription.unsubscribe();
  }, []);

  // Restituisce le funzioni e i dati relativi all'autenticazione
  return {
    session,
    signIn,
    signUp,
    signOut,
  };
}

export default useAuth;
