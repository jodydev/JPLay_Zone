import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../supabase/client";
import AppContext from "../contexts/AppContext";
import Avatar from "../components/Avatar";

export default function Settings() {

  const navigate = useNavigate();
  const { session } = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [first_name, setfirstName] = useState(null);
  const [last_name, setLastName] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [telephone, setTelephone] = useState(null);
  const [city, setCity] = useState(null);
  const [address, setAddress] = useState(null);
  const [error, setError] = useState(null);

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
          setUsername(data.username);
          setfirstName(data.first_name);
          setLastName(data.last_name);
          setAvatarUrl(data.avatar_url);
          setTelephone(data.telephone);
          setCity(data.city);
          setAddress(data.address);
        }
      }
      setLoading(false);
    }

    getProfile();

    return () => {
      ignore = true;
    };
  }, [session]);

  async function updateProfile(event, avatarUrl) {
    event.preventDefault();

    setLoading(true);
    const { user } = session;

    const updates = {
      id: user.id,
      username,
      first_name,
      last_name,
      avatar_url,
      telephone,
      city,
      address,
      updated_at: new Date(),
    };

    if (avatarUrl) {
      updates.avatar_url = avatarUrl; // Aggiorna l'avatar_url solo se è stato fornito un nuovo URL
    }

    const { error } = await supabase.from("profiles").upsert(updates);

    if (error) {
      alert(error.message);
    } else {
      setLoading(false);
      if (avatarUrl) {
        setAvatarUrl(avatarUrl); // Aggiorna lo stato dell'avatar_url se è stato fornito un nuovo URL
      }
      navigate("/account", { state: { updatedProfile: updates } });
    }
  }

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

      const { data, error } = await supabase.storage
        .from("avatars")
        .upload(filePath, file); // Carica il file su Supabase

      if (error) {
        throw error;
      }

      const url = URL.createObjectURL(file);
      setAvatarUrl(url);
    } catch (error) {
      alert(error.message);
    } finally {
      setUploading(false);
    }
  }



  return (
    <div className="container-fluid p-0 p-lg-3">
      <div className="row">
        <div className="col-12 d-flex justify-content-center align-items-center">
          <div className="form-container shadow-sm px-3">
            <form className="form" onSubmit={updateProfile}>
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-12 col-lg-6">
                  <div>
                    <h1 className="text-dark fw-bold">Ancora un attimo..</h1>
                    <h5 className="text-dark fw-bold h6">
                      Aggiorna prima i tuoi dati!
                    </h5>
                  </div>
                </div>

                <div className="col-5 col-lg-3  flex-column">
                  <p className="text-dark fw-bold h5">
                    Aggiungi il tuo <br /> avatar
                  </p>
                  <input
                    type="file"
                    id="single"
                    accept="image/*"
                    onChange={uploadAvatar}
                    disabled={uploading}
                    style={{ margin: "0 auto" }}
                  />
                </div>

                <div className="col-12 col-lg-2">
                  {avatar_url ? (
                    <Avatar
                      url={avatar_url}
                      size={100}
                      onUpload={(event, url) => {
                        updateProfile(event, url);
                      }}
                    />
                  ) : (
                    <div className="add-photo circle"></div>
                  )}
                </div>
              </div>

              {error && (
                <div
                  class="alert alert-danger d-flex align-items-center"
                  role="alert"
                >
                  <i className="fa-solid fa-lg fa-triangle-exclamation mx-2"></i>
                  <div>{error}</div>
                </div>
              )}

              <div className="container px-3">
                <div className="row">
                  <div className="col-6">
                    <div className="form-group my-2">
                      <label htmlFor="first_name">
                        <i class="fa-solid fa-circle-user"></i> Nome
                        <input
                          type="text"
                          id="first_name"
                          name="first_name"
                          placeholder="Jody"
                          value={first_name || ""}
                          onChange={(e) => setfirstName(e.target.value)}
                        />
                      </label>
                    </div>

                    <div className="form-group my-3">
                      <label htmlFor="username">
                        <i class="fa-solid fa-signature"></i> Username
                        <input
                          type="text"
                          id="username"
                          name="username"
                          placeholder="Username"
                          value={username || ""}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </label>
                    </div>

                    <div className="form-group my-3">
                      <label htmlFor="city">
                        <i class="fa-solid fa-house"></i> Città
                        <input
                          id="city"
                          type="text"
                          value={city || ""}
                          onChange={(e) => setCity(e.target.value)}
                          placeholder="Bologna"
                        />
                      </label>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group my-2">
                      <label htmlFor="last_name">
                        <i class="fa-regular fa-circle-user"></i> Cognome
                        <input
                          type="text"
                          id="last_name"
                          name="last_name"
                          placeholder="Ossino"
                          value={last_name || ""}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </label>
                    </div>

                    <div className="form-group my-3">
                      <label htmlFor="telephone">
                        <i class="fa-solid fa-phone"></i> Telefono
                        <input
                          id="telephone"
                          type="text"
                          value={telephone || ""}
                          onChange={(e) => setTelephone(e.target.value)}
                          placeholder="333617.."
                        />
                      </label>
                    </div>

                    <div className="form-group my-3">
                      <label htmlFor="address">
                        <i class="fa-solid fa-location-dot"></i> Indirizzo
                        <input
                          id="address"
                          type="text"
                          value={address || ""}
                          onChange={(e) => setAddress(e.target.value)}
                          placeholder="Via del Successo"
                        />
                      </label>
                    </div>
                  </div>
                </div>

                <button type="submit" className="form-submit-btn my-3">
                  Aggiorna
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
