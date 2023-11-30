import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function LoginPage() {
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // Stato per memorizzare l'errore di accesso

  const handleLogin = async (event) => {
    event.preventDefault();

    const signInResult = await signIn(email, password);

    if (signInResult.error) {
      let errorMessage = "I dati inseriti non sono corretti, riprova.";
      setError(signInResult.error.error_description || errorMessage);
    } else {
      setError(null);
      navigate("/account");
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };



  return (
    <div className="container-fluid p-0 p-lg-5">
      <div className="row">
        <div className="col-12 d-flex justify-content-center align-items-center">
          <div className="form-container my-5 shadow-sm">
            <form className="form" onSubmit={handleLogin}>
              <h1 className="text-dark fw-bold mb-0">
                Accedi con i tuoi dati.
              </h1>
              <h3 className="text-dark fw-bold h6 mb-4">
                Oppure{" "}
                <Link to="/register" className="text-danger">
                  registrati
                </Link>{" "}
                se non hai un account.
              </h3>
              {error && (
                <div
                  class="alert alert-danger d-flex align-items-center"
                  role="alert"
                >
                  <i className="fa-solid fa-lg fa-triangle-exclamation mx-2"></i>
                  <div>{error}</div>
                </div>
              )}
              <div className="form-group my-2">
                <label htmlFor="email">Inserisci Email</label>
                <input
                  name="email"
                  id="email"
                  type="text"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="jodyossino.dev@gmail.com"
                />
              </div>
              <div className="form-group my-2">
                <label htmlFor="password">Inserisci Password</label>
                <input
                  name="password"
                  id="password"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="********"
                />
              </div>
              <button id="btn" type="submit" className="form-submit-btn">
                Accedi
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
