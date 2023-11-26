import { useContext } from "react";
import AppContext from "../contexts/AppContext";
import Account from "./Account";
import LoginPage from "./LoginPage";

function LoggedUserRoutes() {

    const {session, useSession} = useContext(AppContext)

    return(

        <div className="container" style={{ padding: '50px 0 100px 0' }}>
            {!session ? <LoginPage /> : <Account key={session.user.id} session={session} />}
        </div>

    )
}
export default LoggedUserRoutes;