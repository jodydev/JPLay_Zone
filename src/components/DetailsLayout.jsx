import { useGameContext } from "../contexts/GameContext";
import CustomizedBreadcrumbs from "./DetailsPage/CustomizedBreadcrumbs";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import useProfile from "../hooks/useProfile";
import Messages from "./Messages";

function DetailsLayout({ children }) {
  const { profile } = useProfile();

  const { gameData } = useGameContext();

  return (
    <>
      <div className="container-fluid p-0 my-5">
        <CustomizedBreadcrumbs />

        <Container maxWidth="xl">
          <Divider />
        </Container>

        <Container maxWidth="xl">
          <div className="row">{children}</div>
        </Container>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 ">
           
          </div>
          <div className="col-12 col-lg-6">
            {profile && <Messages gameData={gameData} />}
          </div>
        </div>
  
      </div>
    </>
  );
}

export default DetailsLayout;
