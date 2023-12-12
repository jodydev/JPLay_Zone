import { useState, useEffect, useContext } from "react";
import supabase from "../supabase/client";
import AppContext from "../contexts/AppContext";

// Hook per ottenere il profilo dell'utente corrente
function useProfile() {
  // Ottiene la sessione dall'AppContext
  const { session } = useContext(AppContext);

  // Stati per memorizzare il profilo e lo stato di caricamento
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  // Effetto per recuperare il profilo dell'utente in base alla sessione
  useEffect(() => {
    let ignore = false;

    async function getProfile() {
      setLoading(true);
      const { user } = session;

      const { data, error } = await supabase
        .from("profiles")
        .select(`*`)
        .eq("id", user.id)
        .single();

      if (!ignore) {
        if (error) {
          console.warn(error);
        } else if (data) {
          setProfile(data); // Imposta il profilo ottenuto dal database
        }
      }

      setLoading(false);
    }

    getProfile();

    return () => {
      ignore = true;
    };
  }, [session]);

  // Restituisce il profilo e lo stato di caricamento
  return {
    profile, // Profilo dell'utente
    loading, // Stato di caricamento
  };
}

export default useProfile;
