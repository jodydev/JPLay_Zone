import { useEffect, useState } from "react";
import supabase from "../supabase/client";

export default function Avatar({ url, size, onUpload }) {
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [uploading, setUploading] = useState(false);

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

  // funzione che controlla il path dell'immagine da inserire...
  async function uploadAvatar(event) {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      onUpload(event, filePath);
    } catch (error) {
      alert(error.message);
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div
          className="d-flex align-items-center flex-nowrap mt-3 mt-lg-0"
          style={{ width: size }}
        >
          <div className="row">
            <div className="col-5 col-lg-6 d-flex justify-content-center align-items-center flex-column">
              <p className="text-dark fw-bold h5">Aggiungi il tuo avatar</p>
              <input
                type="file"
                id="single"
                accept="image/*"
                onChange={uploadAvatar}
                disabled={uploading}
                style={{margin: '0 auto'}}
              />
            </div>
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



