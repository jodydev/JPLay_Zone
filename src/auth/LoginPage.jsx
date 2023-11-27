import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function LoginPage() {

    const { signIn } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (event) => {
        event.preventDefault();

        setLoading(true);
        const signInResult = await signIn(email, password);

        if (signInResult.error) {
            alert(signInResult.error.error_description || signInResult.error.message);
        } else {
            navigate('/account');
        }
        setLoading(false);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <div className="form-container my-5 shadow-sm">
                        <form className="form" onSubmit={handleLogin}>
                            <h1 className="text-dark fw-bold mb-0">Accedi con i tuoi dati.</h1>
                            <h3 className="text-dark fw-bold h6 mb-4">Oppure <Link to="/register" className="text-danger">registrati</Link> se non hai un account.</h3>
                            <div className="form-group">
                                <label htmlFor="email">Inserisci Email</label>
                                <input
                                    name="email"
                                    id="email"
                                    type="text"
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Inserisci Password</label>
                                <input
                                    name="password"
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                            </div>
                            <button type="submit" className="form-submit-btn" disabled={loading}>
                                {loading ? 'Caricamento...' : 'Accedi'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;
