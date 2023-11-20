import { useState } from "react";
import PaymentForm from "../components/DetailsPage/PaymentForm";
import DetailsLayout from "../components/DetailsLayout";

function DetailsPage({games}) {

  return (

    <DetailsLayout>
      <PaymentForm games={games} />
    </DetailsLayout>
  );
}

export default DetailsPage;
