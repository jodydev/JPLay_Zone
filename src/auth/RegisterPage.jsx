import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

function RegisterPage() {
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleRegister = async (event) => {
    event.preventDefault();
    const { username, email, password } = Object.fromEntries(
      new FormData(event.currentTarget)
    );
  
    try {
      const { error } = await signUp({
        email,
        password,
        options: {
          data: {
            username,
          },
        },
      });
  
      const errorEmail = 'Unable to validate email address: invalid format';
      const errorPassword = 'Signup requires a valid password';
  
      const errorMessageMail = "Email errata, riprova";
      const errorMessagePassword = "Dati incompleti o errati, riprova";
  
      if (error?.message === errorEmail) {
        setError(errorMessageMail);
      } else if (error?.message === errorPassword) {
        setError(errorMessagePassword);
      } else {
        setError("Errore durante la registrazione, riprova");
      }
      
      if (error?.status === 422) {
        navigate("/register");
      } else {
        navigate("/account");
      }
    } catch (error) {
      setError("Errore durante la registrazione, riprova");
    }

    console.log(error);
  };

  return (
    <div className="container-fluid p-0 p-lg-5">
      <div className="row">
        <div className="col-12 d-flex justify-content-center align-items-center">
          <div className="form-container my-3 shadow-sm">
            <form onSubmit={handleRegister} className="form ">
              <h1 className="text-dark fw-bold">Registrati</h1>
              <h3 className="text-dark fw-bold h6 mb-4">Oppure <Link to="/login" className="text-danger">Accedi</Link> se hai già un account.</h3>
              {error && 
                <div
                  class="alert alert-danger d-flex align-items-center"
                  role="alert"
                >
                  <i className="col-0 fa-solid fa-lg fa-triangle-exclamation mx-2 justify-content-start"></i>
                  <div className="col-4 text-nowrap">{error}</div>
                  <div className="col-7 d-flex justify-content-end">
                  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>

                  </div>
                </div>
              }
              <div className="form-group">
                <label htmlFor="email">Inserisci Username</label>
                <input name="username" id="username" type="text" placeholder="jodydev" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Inserisci Email</label>
                <input name="email" id="email" type="text" placeholder="jodyossino.dev@gmail.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Inserisci Password</label>
                <input name="password" id="password" type="text" placeholder="********" required/>
              </div>
              <div className="col-6">
                
              </div>
              <button type="submit" className="form-submit-btn">
                Registrati
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
