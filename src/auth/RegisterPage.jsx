import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

function RegisterPage() {
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  // Gestisce la registrazione di un nuovo utente
  const handleRegister = async (event) => {
    event.preventDefault();
    const { username, email, password } = Object.fromEntries(
      new FormData(event.currentTarget)
    );

    try {
      // Effettua la registrazione attraverso la funzione signUp fornita da useAuth()
      const { error } = await signUp({
        email,
        password,
        options: {
          data: {
            username,
          },
        },
      });

      // Possibili messaggi di errore restituiti dalla registrazione
      const errorEmail = "Unable to validate email address: invalid format";
      const errorPassword = "Signup requires a valid password";
      const errorMessageMail = "Email errata, riprova";
      const errorMessagePassword = "Dati incompleti o errati, riprova";

      // Gestisce i diversi tipi di errori restituiti durante la registrazione
      if (error?.message === errorEmail) {
        setError(errorMessageMail);
      } else if (error?.message === errorPassword) {
        setError(errorMessagePassword);
      } else {
        setError("Errore durante la registrazione, riprova");
      }

      // Se il codice di errore è 422, reindirizza alla pagina di registrazione, altrimenti vai alla pagina delle impostazioni
      if (error?.status === 422) {
        navigate("/register");
      } else {
        navigate("/setting");
      }
    } catch (error) {
      // Gestisce eventuali errori durante la registrazione
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
              <h3 className="text-dark fw-bold h6 mb-2">
                Oppure{" "}
                <Link to="/login" className="text-danger">
                  Accedi
                </Link>{" "}
                se hai già un account.
              </h3>
              {error && (
                <div
                  className="alert alert-danger d-flex align-items-center"
                  role="alert"
                >
                  <i className="col-0 fa-solid fa-lg fa-triangle-exclamation mx-2 justify-content-start"></i>
                  <div className="col-4 text-nowrap">{error}</div>
                  <div className="col-7 d-flex justify-content-end">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    ></button>
                  </div>
                </div>
              )}

              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  name="username"
                  id="username"
                  type="text"
                  placeholder="Jody"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  id="email"
                  type="text"
                  placeholder="jodyossino.dev@gmail.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  name="password"
                  id="password"
                  type="text"
                  placeholder="********"
                  required
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

// const SignupSchema = Yup.object().shape({
//   firstName: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Required'),
//   lastName: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Required'),
//   email: Yup.string().email('Invalid email').required('Required'),
// });

// export const ValidationSchemaExample = () => (
//   <div>
//     <h1>Signup</h1>
//     <Formik
//       initialValues={{
//         firstName: '',
//         lastName: '',
//         email: '',
//       }}
//       validationSchema={SignupSchema}
//       onSubmit={values => {
//         // same shape as initial values
//         console.log(values);
//       }}
//     >
//       {({ errors, touched }) => (
//         <Form>
//           <Field name="firstName" />
//           {errors.firstName && touched.firstName ? (
//             <div>{errors.firstName}</div>
//           ) : null}
//           <Field name="lastName" />
//           {errors.lastName && touched.lastName ? (
//             <div>{errors.lastName}</div>
//           ) : null}
//           <Field name="email" type="email" />
//           {errors.email && touched.email ? <div>{errors.email}</div> : null}
//           <button type="submit">Submit</button>
//         </Form>
//       )}
//     </Formik>
//   </div>
// );
