import { useEffect, useState } from "react";
import supabase from "../supabase/client";

export default function Avatar({ url, size, onUpload }) {
  
  const [avatarUrl, setAvatarUrl] = useState(null);

  useEffect(() => {
    if (avatarUrl) {
      onUpload(avatarUrl);
    }
  }, [avatarUrl, onUpload]);

  // funzione che carica l'immagine nello storage...
  async function downloadImage(path) {
    try {
      const { data, error } = await supabase.storage
        .from("avatars")
        .download(path);
      if (error) {
        throw error;
      }
      const url = URL.createObjectURL(data);
      setAvatarUrl(url);
    } catch (error) {
      console.log("Error downloading image: ", error.message);
    }
  }

  // se url cambia invoca la funzione downloadImage...
  useEffect(() => {
    if (url) downloadImage(url);
  }, [url]);


  return (
    <div className="container">
      <div className="row">
        <div
          className="d-flex align-items-center flex-nowrap mt-3 mt-lg-0"
          style={{ width: size }}
        >
          <div className="row">
            
            <div className="col-6 col-lg-6">
              {avatarUrl ? (
                <img
                  src={avatarUrl}
                  alt="Avatar"
                  className="avatar image circle"
                  style={{
                    height: size,
                    width: size,
                  }}
                />
              ) : (
                <div
                  className="avatar no-image circle"
                  style={{
                    height: size,
                    width: size,
                    
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



