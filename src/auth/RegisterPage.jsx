import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppContext from "../contexts/AppContext";

function RegisterPage() {
  const { signUp } = useContext(AppContext);
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    const { username, email, password } = Object.fromEntries(
      new FormData(event.currentTarget)
    );

    let { error } = await signUp({
      email,
      password,
      options: {
        data: {
          username,
        },
      },
    });
    if (error) {
      alert(error.error_description || error.message);
    } else {
      navigate("/account");
    }
  };

  return (
    <div className="container-fluid p-0 p-lg-5">
      <div className="row">
        <div className="col-12 d-flex justify-content-center align-items-center">
          <div className="form-container my-5 shadow-sm">
            <form onSubmit={handleRegister} className="form ">
              <h1 className="text-dark fw-bold">Registrati</h1>
              <h3 className="text-dark fw-bold h6 mb-4">
                Oppure{" "}
                <Link to="/login" className="text-danger">
                  Accedi
                </Link>{" "}
                se hai già un account.
              </h3>
              <div className="form-group">
                <label htmlFor="email">Inserisci Username</label>
                <input
                  name="username"
                  id="username"
                  type="text"
                  placeholder="jodydev"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Inserisci Email</label>
                <input
                  name="email"
                  id="email"
                  type="text"
                  placeholder="jodyossino.dev@gmail.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Inserisci Password</label>
                <input
                  name="password"
                  id="password"
                  type="text"
                  placeholder="********"
                />
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
