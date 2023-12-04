import { useState, useEffect, useContext } from 'react';
import supabase from '../supabase/client';
import AppContext from '../contexts/AppContext';

function useProfile() {
  const { session } = useContext(AppContext);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getProfile() {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single();
        if (error) {
          console.warn(error);
        } else {
          setProfile(data);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }

    getProfile();
  }, [session]);

  return {
    profile,
    loading,
  };
}

export default useProfile;