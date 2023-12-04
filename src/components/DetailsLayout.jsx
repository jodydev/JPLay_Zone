import CustomizedBreadcrumbs from "./DetailsPage/CustomizedBreadcrumbs";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";

function DetailsLayout({ children}) {
  return (
    <div className="container-fluid p-0 my-5">
      <CustomizedBreadcrumbs  />

      <Container maxWidth="xl">
        <Divider />
      </Container>

      <Container maxWidth="xl">
        <div className="row">{children}</div>
      </Container>
    </div>
  );
}

export default DetailsLayout;
