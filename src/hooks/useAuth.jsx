import { useState, useEffect } from "react";
import supabase from "../supabase/client";

function useAuth() {
  const [session, setSession] = useState(null)

  const signUp = async (email, password) => await supabase.auth.signUp(email, password); 

  const signIn = async (email, password) => await supabase.auth.signInWithPassword({
    email,
    password
  });

  const signOut = async () => await supabase.auth.signOut();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, []); 


  return {
    session, 
    signIn, 
    signUp, 
    signOut
  }
}

export default useAuth;